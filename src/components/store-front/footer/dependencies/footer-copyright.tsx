import { FC, Fragment } from 'react';
import { ICSepehr } from 'icons';

export const FooterCopyRight: FC<IFooterCopyRight> = ({
  className,
  layout,
  toggle,
  flexDirection,
  isDark,
  text,
}) => {
  return (
    <Fragment>
      <div
        className={`footer-copy-right flex ${flexDirection} justify-center items-center`}
      >
        <span
          className={`footer-copy-right__span font-light text-14px ${
            isDark ? 'text-gray_shade-200' : 'text-gray_shade-800'
          } ml-5px`}
        >
          {text
            ? text
            : '©کلیه حقوق مادی و معنوی این سایت محفوظ و متعلق به رایانش ابری سپهر است. 1399'}
        </span>
      </div>
    </Fragment>
  );
};
