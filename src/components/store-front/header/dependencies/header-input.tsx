import { ICSearch } from 'icons';
import { FC } from 'react';
export const HeaderInput: FC<IHeaderInput> = ({
  className,
  onChange,
  onClick,
  cssAlt,
  layout = true,
  toggle,
}) => {
  return (
    <div className="relative ">
      <input
        className={toggle(
          'headerInput text-16px px-12  py-4  focus:outline-none',
          className,
          layout,
          cssAlt
        )}
        placeholder="جستجو کنید"
        onChange={onChange}
      />
      <ICSearch
        className="absolute top-16px right-20px fill-current"
        onClick={onClick}
      />
    </div>
  );
};
