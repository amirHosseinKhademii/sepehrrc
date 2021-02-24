import { FC, Fragment } from 'react';
import Link from 'next/link';
import { GeneralLink } from 'components';
import { ICWhatsapp, ICInstagram, ICTelegram } from 'icons';

export const FooterSocialMedia: FC<IFooterSocialMedia> = ({
  className,
  layout,
  toggle,
  isDark,
  marginLtr,
  marginRtl,
  settings,
}) => {
  console.log(settings);
  return (
    <Fragment>
      <GeneralLink
        cssClass={`footer-social__icon-box flex justify-center items-center ${marginLtr}-9px ${
          settings?.social === undefined || settings.social == true
            ? settings?.instagram === undefined || settings?.instagram == true
              ? ''
              : 'hidden'
            : 'hidden'
        }`}
        layout={layout}
        className={className}
        href="#"
      >
        <ICInstagram
          className={toggle(
            'footer-social__icon-box--instagram fill-current text-18px',
            '',
            layout,
            `${marginLtr}-18px`
          )}
          fill={isDark ? '#d3d7e1' : ''}
        />
      </GeneralLink>
      <GeneralLink
        cssClass={`footer-social__icon-box flex justify-center items-center ${
          settings?.social === undefined || settings.social == true
            ? settings?.telegram === undefined || settings?.telegram == true
              ? ''
              : 'hidden'
            : 'hidden'
        }`}
        layout={layout}
        className={className}
        href="#"
      >
        <ICTelegram
          className={toggle(
            'footer-social__icon-box--telegram fill-current text-18px',
            '',
            layout,
            ''
          )}
          fill={isDark ? '#d3d7e1' : ''}
        />
      </GeneralLink>
      <GeneralLink
        cssClass={`footer-social__icon-box flex justify-center items-center ${marginRtl}-9px ${
          settings?.social === undefined || settings.social == true
            ? settings?.whatsapp === undefined || settings?.whatsapp == true
              ? ''
              : 'hidden'
            : 'hidden'
        }`}
        layout={layout}
        className={className}
        href="#"
      >
        <ICWhatsapp
          className={toggle(
            'footer-social__icon-box--whatsapp fill-current text-18px',
            '',
            layout,
            `${marginRtl}-18px`
          )}
          fill={isDark ? '#d3d7e1' : ''}
        />
      </GeneralLink>
    </Fragment>
  );
};
