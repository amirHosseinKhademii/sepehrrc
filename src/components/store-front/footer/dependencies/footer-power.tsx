import { FC, Fragment } from 'react';
import { ICSepehr } from 'icons';

export const FooterPower: FC<IFooterPower> = ({
  className,
  layout,
  toggle,
  flexDirection,
  isDark,
}) => {
  return (
    <Fragment>
      <div
        className={`footer-power flex ${flexDirection} justify-center items-center`}
      >
        <span
          className={`footer-power__first-span font-light text-14px ${
            isDark ? 'text-gray_shade-200' : 'text-gray_shade-800'
          } ml-5px`}
        >
          قدرت گرفته از
        </span>
        <ICSepehr className="footer-power__logo text-xl" />
        <span
          className={toggle(
            `footer-copy-right__last-span font-light text-14px ${
              isDark ? 'text-gray_shade-100' : 'text-gray_shade-900'
            } mr-5px`,
            className,
            layout,
            ''
          )}
        >
          فروشگاه ساز سپهر
        </span>
      </div>
    </Fragment>
  );
};
