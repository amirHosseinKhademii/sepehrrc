import { FC, Fragment } from 'react';

export const FooterTel: FC<IFooterTel> = ({
  className,
  layout,
  toggle,
  flexDirection,
  isDark,
}) => {
  const telNumber = '3434545-021';
  return (
    <Fragment>
      <div
        className={`flex ${flexDirection} justify-center items-center mr-23px `}
      >
        <span
          className={toggle(
            `font-iransans font-light text-14px ${
              isDark ? 'text-gray_shade-100' : 'text-gray_shade-800'
            }`,
            className,
            layout,
            ''
          )}
        >{`تلفن : ${telNumber}`}</span>
      </div>
    </Fragment>
  );
};
