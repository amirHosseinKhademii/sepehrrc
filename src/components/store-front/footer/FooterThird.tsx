import { FC } from 'react';
import { useClass, useUi, useDirection } from 'hooks';
import {
  FooterLayout,
  FooterSocialMedia,
  FooterTel,
  FooterCopyRight,
  FooterPower,
  FooterNavbar,
  FooterDownloadButton,
} from './dependencies';
const enamad = '/assets/images/enamad.png';

const FooterThird: FC<IFooter> = ({ item, layout = true, designState }) => {
  const { uiState } = useUi();
  const { container } = uiState;
  const { join, toggle } = useClass();
  const { flexDirection, marginRtl, marginLtr } = useDirection();
  const isDark = item.settings ? item.settings.dark : false;
  const settings = item.settings;

  return (
    <FooterLayout
      layout={layout}
      toggle={toggle}
      isDark={isDark}
      id="footerThird"
      cssClass="footer--third"
    >
      <div
        className={`footer__row footer__row--3 flex ${flexDirection} w-full h-217px container mx-auto ${container.padding}   `}
      >
        <div className={`footer__col-1 w-6/12 flex flex-col mt-30px `}>
          <FooterNavbar
            direction="horizental"
            layout={layout}
            toggle={toggle}
            className="font-light text-16px"
            isDark={isDark}
          />
          <div className={`flex ${flexDirection} `}>
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
            <FooterTel
              layout={layout}
              toggle={toggle}
              flexDirection={flexDirection}
              className={`font-bold text-16px ${marginRtl}-23px`}
              cssClass={`${marginRtl}-23px`}
              isDark={isDark}
              settings={settings}
            />
          </div>
        </div>
        <div
          className={`footer__col-2 w-6/12 flex ${flexDirection}  justify-end mt-30px   `}
        >
          <img
            src={enamad}
            className={`h-116px w-107px bg-white rounded ml-19px ${
              !settings.trust ? 'hidden' : ''
            } ${isDark ? 'p-10px' : ''}`}
          />
          <div className="flex flex-col">
            <FooterDownloadButton
              market="cafebazar"
              isDark={isDark}
              settings={settings}
            />
            <FooterDownloadButton
              market="googleplay"
              isDark={isDark}
              className="mt-18px"
              settings={settings}
            />
          </div>
        </div>
      </div>
      <div
        className={`footer__nav-bottom border ${
          isDark ? 'border-gray-800' : 'border-white_shade-400'
        }`}
      >
        <div
          className={`footer__nav-bottom--container flex ${flexDirection} w-full h-112px container mx-auto ${container.padding} border-t-1 `}
        >
          <div
            className={`footer__social-tel-box w-6/12 flex ${flexDirection} items-center `}
          >
            <FooterCopyRight
              layout={layout}
              toggle={toggle}
              flexDirection={flexDirection}
              className="font-bold"
              isDark={isDark}
              text={settings.copyRight}
            />
          </div>
          <div
            className={`footer__copy-right-box w-6/12 flex ${flexDirection} items-center justify-end  `}
          >
            <FooterPower
              layout={layout}
              toggle={toggle}
              flexDirection={flexDirection}
              className="font-bold"
              isDark={isDark}
            />
          </div>
        </div>
      </div>
    </FooterLayout>
  );
};

export default FooterThird;
