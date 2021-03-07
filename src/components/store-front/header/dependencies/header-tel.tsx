import { FC } from 'react';
import { ICPhoneVolume } from 'icons';
import { useDirection } from 'hooks';
import { GeneralLink } from 'components';
export const HeaderTel: FC<IHeaderTel> = ({
  className,
  layout,
  cssAlt,
  item,
  toggle,
}) => {
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  return (
    <GeneralLink
      href={`tel:+98${item.settings?.tel ? item.settings.tel : '021-23456789'}`}
      className={className}
      cssClass={`sep-header-tel flex ${flexDirection} items-center justify-end  h-full `}
      layout={layout}
    >
      <span className="sep-header-tel__number">
        {item.settings?.tel ? item.settings.tel : '021-23456789'}
      </span>

      <ICPhoneVolume
        height="20px"
        width="20px"
        className={`${marginRtl}-10px fill-current text-20px`}
        cssClass="sep-header-tel__phone-ic"
      />
    </GeneralLink>
  );
};
