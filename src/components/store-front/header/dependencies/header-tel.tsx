import { FC } from 'react';
import { ICPhoneVolume } from 'icons';
import { useDirection } from 'hooks';
export const HeaderTel: FC<IHeaderTel> = ({
  className,
  layout,
  cssAlt,
  item,
  toggle,
}) => {
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  return (
    <a
      href={`tel:+98${item.settings?.tel ? item.settings.tel : '0910000000'}`}
      className={toggle(
        ` flex ${flexDirection} items-center justify-end  h-full font-iransans`,
        className,
        layout,
        ''
      )}
    >
      <span>{item.settings?.tel ? item.settings.tel : '0910000000'}</span>

      <ICPhoneVolume
        height="20px"
        width="20px"
        className={`${marginRtl}-10px fill-current text-20px`}
      />
    </a>
  );
};
