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
  const { dirRtl, rightTL, language } = useDirection();
  return (
    <div className="relative ">
      <GeneralInput
        className={className}
        cssClass="sep-header-input"
        layout={layout}
        placeholder={`${language.HSearch}`}
        onChange={onChange}
        style={{ direction: `${dirRtl}` }}
      />
      <ICSearch
        className={`absolute top-16px ${rightTL}-20px fill-current`}
        onClick={onClick}
        cssClass="sep-header-input__search"
      />
    </div>
  );
};
