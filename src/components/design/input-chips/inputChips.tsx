import { useState, useRef, Fragment } from 'react';
import { ICMultiply } from 'icons';

export const ReactChipInput = ({
  chips,
  onSelect,
  onRemove,
  initialSuggest,
}) => {
  const formControlRef = useRef(null);
  const [suggestions, setSuggestions] = useState(initialSuggest);
  const [open, setOpen] = useState(false);

  const handleOnSubmit = (item) => {
    item && onSelect(item);
    formControlRef.current.value = '';
  };

  const onChange = (event) => {
    const inputValue = event.target.value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const newSuggest =
      inputLength === 0
        ? initialSuggest
        : initialSuggest.filter(
            (suggest) =>
              suggest.title.toLowerCase().slice(0, inputLength) === inputValue
          );
    setSuggestions(newSuggest);
  };

  const Suggestions = () => (
    <div className="w-full flex flex-col absolute top-0  border-t border-gray_shade-900 bg-gray_shade-800 rounded ">
      {suggestions.map((item) => (
        <span
          onClick={() => handleOnSubmit(item)}
          onMouseDown={(e) => e.preventDefault()}
          className="h-40px flex justify-end items-center px-2 text-white cursor-pointer hover:bg-gray_shade-700"
        >
          {item.title}
        </span>
      ))}
    </div>
  );

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
              className="h-34px flex justify-center items-center mx-5px my-5px px-2 bg-gray_shade-900 text-gray_shade-300 text-14px cursor-pointer rounded"
              key={index}
            >
              <ICMultiply
                className="text-10px fill-current text-gray_shade-300 ml-10px"
                onClick={() => onRemove(chip)}
              />
              {chip.title}
            </div>
          ))}
          <form
            className="flex-grow"
            onSubmit={(e) => {
              e.preventDefault();
              const item = suggestions.find(
                (sug) => sug.title == formControlRef.current.value
              );
              handleOnSubmit(item);
            }}
          >
            <input
              name="chip"
              autoComplete="off"
              ref={formControlRef}
              className="w-full bg-gray_shade-800  text-14px focus:outline-none px-2 text-gray_shade-300"
              placeholder={chips.length == 0 ? 'همه دسته بندی ها' : ''}
              onChange={(e) => onChange(e)}
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}
            />
          </form>
        </div>
      </div>
      <div className="relative">{open ? <Suggestions /> : null}</div>
    </Fragment>
  );
};
