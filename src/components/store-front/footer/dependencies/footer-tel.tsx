import { FC, Fragment } from 'react';

export const FooterTel: FC<IFooterTel> = ({
  className,
  layout,
  toggle,
  flexDirection,
  isDark,
  marginRtl,
  cssClass,
}) => {
  const telNumber = '3434545-021';
  return (
    <Fragment>
      <div
        className={`footer-tel flex ${flexDirection} justify-center items-center `}
      >
        <span
          className={toggle(
            `footer-tel__span font-light text-14px ${
              isDark ? 'text-gray_shade-100' : 'text-gray_shade-800'
            }`,
            className,
            layout,
            cssClass
          )}
        >{`تلفن : ${telNumber}`}</span>
      </div>
    </Fragment>
  );
};
