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
          'header-input w-535px px-12  py-4 rounded-25px  bg-white_shade-200 border-white_shade-300 border-2  focus:outline-none',
          className,
          layout,
          cssAlt
        )}
        placeholder="جستجو کنید"
        onChange={onChange}
        style={{ direction: 'rtl' }}
      />
      <ICSearch
        className="IC-search absolute top-16px right-20px fill-current"
        onClick={onClick}
      />
    </div>
  );
};
