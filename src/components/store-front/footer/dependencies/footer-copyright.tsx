import { FC, Fragment } from 'react';
import { useDirection } from 'hooks';

export const FooterCopyRight: FC<IFooterCopyRight> = ({
  className,
  layout,
  toggle,
  flexDirection,
  isDark,
  text,
}) => {
  const { language, marginLtr } = useDirection();
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
          {text ? text : language.FCopyrightText}
        </span>
      </div>
    </Fragment>
  );
};
