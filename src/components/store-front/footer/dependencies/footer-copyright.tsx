import { FC, Fragment } from 'react';
import { ICSepehr } from 'icons';

export const FooterCopyRight: FC<IFooterCopyRight> = ({
  className,
  layout,
  toggle,
  flexDirection,
  isDark,
}) => {
  return (
    <Fragment>
      <div className={`flex ${flexDirection} justify-center items-center`}>
        <span
          className={`font-iransans font-light text-14px ${
            isDark ? 'text-gray_shade-200' : 'text-gray_shade-800'
          } ml-5px`}
        >
          قدرت گرفته از
        </span>
        <ICSepehr className="text-xl" />
        <span
          className={toggle(
            `font-iransans font-light text-14px ${
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
