import React, { useState, useRef, Fragment } from 'react';
import Autosuggest from 'react-autosuggest';
import { ICMultiply } from 'icons';

const languages = [
  {
    name: 'کیف',
  },
  {
    name: 'لباس',
  },
  {
    name: 'دیجیتال',
  },
];

export const ReactChipInput = ({ chips, onSubmit, onRemove }) => {
  const formControlRef = useRef(null);
  const [suggest, setSuggest] = useState(languages);
  const [value, setValue] = useState('');
  const [foucs, setFoucs] = useState(false);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? languages
      : languages.filter(
          (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const handleOnSubmit = (e, value) => {
    onSubmit(value);
    formControlRef.current.value = '';
    setValue('');
  };
  const renderSuggestion = () => {
    return (
      <div className="w-full flex flex-col absolute top-0  border-t border-gray_shade-900 bg-gray_shade-800 rounded ">
        {suggest.map((item, index) => (
          <span
            onClick={(e) => handleOnSubmit(e, item.name)}
            onMouseDown={(e) => e.preventDefault()}
            className="h-40px flex justify-end items-center px-2 text-white cursor-pointer hover:bg-gray_shade-700"
          >
            {item.name}
          </span>
        ))}
      </div>
    );
  };

  const onChange = (event) => {
    // console.log(event.target.value);
    setValue(event.target.value);
    setSuggest(getSuggestions(event.target.value));

    // console.log(suggest);
  };

  return (
    <Fragment>
      <div
        dir="rtl"
        style={{ minHeight: '54px' }}
        className="flex flex-col items-center justify-center w-full bg-gray_shade-800 rounded "
      >
        <div className="w-full flex flex-wrap items-center ">
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
          <div className="w-1/2">
            <input
              ref={formControlRef}
              className="w-full bg-gray_shade-800 font-iransans text-14px focus:outline-none px-2"
              placeholder={chips.length == 0 ? 'همه دسته بندی ها' : ''}
              onChange={(e) => onChange(e)}
              onFocus={() => setFoucs(true)}
              onBlur={() => setFoucs(false)}
            />
          </div>
        </div>
      </div>
      <div className="relative">{foucs ? renderSuggestion() : null}</div>
    </Fragment>
  );
};
