import { ICSearch } from 'icons';
import { GeneralInput } from 'components';
import { FC } from 'react';
export const HeaderInput: FC<IHeaderInput> = ({
  className,
  onChange,
  onClick,
  cssAlt,
  layout = true,
  toggle,
  style,
}) => {
  return (
    <div className="relative ">
      <GeneralInput
        className={className}
        cssClass="header-input"
        layout={layout}
        placeholder="جستجو کنید"
        onChange={onChange}
        style={{ direction: 'rtl' }}
      />
      <ICSearch
        className="absolute top-16px right-20px fill-current"
        onClick={onClick}
        cssClass="header-input__search"
      />
    </div>
  );
};
