import React, { useState, useRef } from 'react';
import Autosuggest from 'react-autosuggest';
import { ICMultiply } from 'icons';

const languages = [
  {
    name: 'کیف',
  },
  {
    name: 'لباس',
  },
];

export const ReactChipInput = ({ chips, onSubmit, onRemove }) => {
  const formControlRef = useRef(null);
  const [suggest, setSuggest] = useState([]);
  const [value, setValue] = useState('');

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : languages.filter(
          (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const handleOnSubmit = (e, value) => {
    onSubmit(value);
    formControlRef.current.value = '';
    setValue('');
  };
  const renderSuggestion = (suggestion) => (
    <div
      onClick={(e) => handleOnSubmit(e, suggestion.name)}
      className="w-full flex flex-col absolute inset-x-0 -bottom-5 bg-gray_shade-800"
    >
      {suggestion.name}
    </div>
  );

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggest(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggest([]);
  };
  const shouldRenderSuggestions = () => {
    return true;
  };

  const inputProps = {
    placeholder: '',
    value,
    onChange: onChange,
  };

  return (
    <div
      dir="rtl"
      style={{ minHeight: '54px' }}
      className="relative flex items-center w-full bg-gray_shade-800 rounded "
    >
      <div className="flex flex-wrap  items-center px-2 ">
        {chips.map((chip, index) => (
          <div
            className="h-34px flex justify-center items-center mx-5px my-5px px-2 bg-gray_shade-900 text-gray_shade-300 font-iransans text-14px rounded"
            key={index}
          >
            <ICMultiply
              className="text-10px fill-current text-gray_shade-300 ml-10px"
              onClick={() => onRemove(index)}
            />
            {chip}
          </div>
        ))}
        <div>
          <Autosuggest
            ref={formControlRef}
            className="w-full bg-gray_shade-800 font-iransans text-14px"
            suggestions={suggest}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            // shouldRenderSuggestions={shouldRenderSuggestions}
            // alwaysRenderSuggestions={true}
            inputProps={inputProps}
            highlightFirstSuggestion={true}
          />
        </div>
      </div>
    </div>
  );
};
