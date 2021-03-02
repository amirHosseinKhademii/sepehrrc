import { FC, Fragment } from 'react';
import { useDirection } from 'hooks';

export const FooterTel: FC<IFooterTel> = ({
  className,
  layout,
  toggle,
  flexDirection,
  isDark,
  marginRtl,
  cssClass,
  settings,
}) => {
  const defaultTelNumber = '021-33456251';
  const { language, dirLtr, textAlignRtl } = useDirection();
  return (
    <Fragment>
      <div
        className={`footer-tel flex ${flexDirection} justify-center items-center ${
          settings.tel === false ? 'hidden' : ''
        } `}
      >
        <p
          dir={dirLtr}
          className={toggle(
            `footer-tel__span font-light text-14px m-0 p-0 ${textAlignRtl} ${
              isDark ? 'text-gray_shade-100' : 'text-gray_shade-800'
            }`,
            className,
            layout,
            cssClass
          )}
        >
          <span>
            {typeof settings.tel === 'string' ? settings.tel : defaultTelNumber}
          </span>
          {` : ${language.FDTelephone}`}
        </p>
      </div>
    </Fragment>
  );
};
