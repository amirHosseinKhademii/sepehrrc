import { FC, Fragment } from 'react';
import { FooterTel, FooterSocialMedia, FooterNavbar } from './index';
const enamad = '/assets/images/enamad.png';
const sazmandehi = '/assets/images/sazmandehi.png';
import { ICSepehr } from 'icons';

export const FooterSection: FC<IFooterSection> = ({
  className,
  layout,
  toggle,
  flexDirection,
  isDark,
  title,
  withDescription,
  withTel,
  withSocial,
  withNavbar,
  withCertificate,
  dir,
  marginRtl,
  marginLtr,
  settings,
}) => {
  const description =
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است';

  return (
    <div dir={dir} className="flex flex-col">
      <span
        className={toggle(
          `font-light text-14px ${
            isDark ? 'text-gray_shade-100' : 'text-gray_shade-800'
          } mb-29px`,
          className,
          layout,
          ''
        )}
      >
        {title}
      </span>
      {withDescription ? (
        <span
          className={`font-light text-14px ${
            isDark ? 'text-gray_shade-200' : 'text-gray_shade-800'
          }`}
        >
          {settings?.about ? settings.about : description}
        </span>
      ) : null}
      {withTel ? (
        <FooterTel
          layout={layout}
          toggle={toggle}
          flexDirection={flexDirection}
          className={`w-full font-bold text-16px mt-30px `}
          cssClass={`w-full mt-30px`}
          isDark={isDark}
          settings={settings}
        />
      ) : null}
      {withSocial ? (
        <div className={`flex flexDirection items-center mt-40px`}>
          <span
            className={`font-light text-14px ${
              isDark ? 'text-gray_shade-200' : 'text-gray_shade-800'
            } ${marginLtr}-18px ${!settings?.social ? 'hidden' : ''}`}
          >
            ما را در شبکه های اجتماعی دنبال کنید:
          </span>
          <FooterSocialMedia
            layout={layout}
            toggle={toggle}
            className={`h-40px w-40px rounded-full  ${
              isDark ? 'bg-gray_shade-800' : 'bg-gray_shade-50'
            }`}
            isDark={isDark}
            marginRtl={marginRtl}
            marginLtr={marginLtr}
            settings={settings}
          />
        </div>
      ) : null}
      {withNavbar ? (
        <FooterNavbar
          layout={layout}
          toggle={toggle}
          direction="vertical"
          className="text-16px"
          isDark={isDark}
        />
      ) : null}
      {withCertificate ? (
        <div
          className={`flex justify-center bg-white rounded ${
            !settings?.trust ? 'hidden' : ''
          } ${isDark ? 'p-22px' : ''}`}
        >
          <img src={enamad} />
          <img src={sazmandehi} />
        </div>
      ) : null}
    </div>
  );
};
