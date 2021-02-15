import { ICSearch } from 'icons';
import { GeneralInput } from 'components';
import { useDirection } from 'hooks';
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
  const { dirRtl, rightTL } = useDirection();
  return (
    <div className="relative ">
      <GeneralInput
        className={className}
        cssClass="header-input"
        layout={layout}
        placeholder="جستجو کنید"
        onChange={onChange}
        style={{ direction: `${dirRtl}` }}
      />
      <ICSearch
        className={`absolute top-16px ${rightTL}-20px fill-current`}
        onClick={onClick}
        cssClass="header-input__search"
      />
    </div>
  );
};
