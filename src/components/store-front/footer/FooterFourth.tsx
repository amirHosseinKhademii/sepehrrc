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
  FooterSection,
} from './dependencies';

const FooterFourth: FC<IFooter> = ({ item, layout = true, designState }) => {
  const { uiState } = useUi();
  const { container } = uiState;
  const { join, toggle } = useClass();
  const {
    flexDirection,
    marginRtl,
    marginLtr,
    dirRtl,
    language,
    paddingRtl,
  } = useDirection();
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
        className={`footer__row footer__row--3 flex ${flexDirection} w-full h-344px container mx-auto ${container.padding}   `}
      >
        <div className={`footer__col-1 w-3/12 flex flex-col mt-45px mb-30px `}>
          <FooterSection
            layout={layout}
            toggle={toggle}
            isDark={isDark}
            withDescription
            withTel
            withSocial
            title={language.FAboutShop}
            dir={dirRtl}
            className="text-24px font-medium mb-22px"
            marginRtl={marginRtl}
            marginLtr={marginLtr}
            settings={settings}
          />
        </div>
        <div
          className={`footer__col-2 w-3/12 flex ${flexDirection}  mt-45px mb-30px ${paddingRtl}-80px   `}
        >
          <FooterSection
            layout={layout}
            toggle={toggle}
            isDark={isDark}
            withNavbar
            title={language.FQuickAccess}
            dir={dirRtl}
            className="text-24px font-medium mb-22px"
            marginRtl={marginRtl}
            marginLtr={marginLtr}
            settings={settings}
          />
        </div>
        <div
          className={`footer__col-2 w-3/12 flex ${flexDirection}  mt-45px mb-30px ${paddingRtl}-80px  `}
        >
          <FooterSection
            layout={layout}
            toggle={toggle}
            isDark={isDark}
            withNavbar
            title={language.FCustomerServices}
            dir={dirRtl}
            className="text-24px font-medium mb-22px"
            marginRtl={marginRtl}
            marginLtr={marginLtr}
            settings={settings}
          />
        </div>
        <div
          className={`footer__col-2 w-3/12 flex ${flexDirection}  mt-45px mb-30px ${paddingRtl}-80px   `}
        >
          <FooterSection
            layout={layout}
            toggle={toggle}
            isDark={isDark}
            withCertificate
            title={language.FTrustSymbol}
            dir={dirRtl}
            className={`text-24px font-medium mb-22px `}
            marginRtl={marginRtl}
            marginLtr={marginLtr}
            settings={settings}
          />
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

export default FooterFourth;
