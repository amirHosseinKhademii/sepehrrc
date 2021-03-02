import { FC, Fragment } from 'react';
import { ICSepehr } from 'icons';
import { useDirection } from 'hooks';

export const FooterPower: FC<IFooterPower> = ({
  className,
  layout,
  toggle,
  flexDirection,
  isDark,
}) => {
  const { language, marginRtl, marginLtr } = useDirection();
  return (
    <Fragment>
      <div
        className={`footer-power flex ${flexDirection} justify-center items-center`}
      >
        <span
          className={`footer-power__first-span font-light text-14px ${
            isDark ? 'text-gray_shade-200' : 'text-gray_shade-800'
          } ${marginLtr}-5px`}
        >
          {language.FPoweredBy}
        </span>
        <ICSepehr className="footer-power__logo text-xl" />
        <span
          className={toggle(
            `footer-copy-right__last-span font-light text-14px ${
              isDark ? 'text-gray_shade-100' : 'text-gray_shade-900'
            } ${marginRtl}-5px`,
            className,
            layout,
            ''
          )}
        >
          {language.FSepehrCc}
        </span>
      </div>
    </Fragment>
  );
};
