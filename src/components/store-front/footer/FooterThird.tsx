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

const FooterThird: FC<IFooter> = ({ item, layout = true, designState }) => {
  const { uiState } = useUi();
  const { container } = uiState;
  const { join, toggle } = useClass();
  const { flexDirection, marginRtl, marginLtr } = useDirection();
  const isDark = designState.pageItems.settings?.backgroundColor || false;

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
        <div className={`footer__social-tel-box w-6/12 flex flex-col mt-50px `}>
          <FooterNavbar
            direction="horizental"
            layout={layout}
            toggle={toggle}
            className="font-light text-16px mb-40px"
          />
          <div className={`flex ${flexDirection}`}>
            <FooterSocialMedia
              layout={layout}
              toggle={toggle}
              className={`h-40px w-40px rounded-full  ${
                isDark ? 'bg-gray_shade-800' : 'bg-gray_shade-50'
              }`}
              isDark={isDark}
              marginRtl={marginRtl}
              marginLtr={marginLtr}
            />
            <FooterTel
              layout={layout}
              toggle={toggle}
              flexDirection={flexDirection}
              className={`font-bold text-16px ${marginRtl}-23px`}
              cssClass={`${marginRtl}-23px`}
              isDark={isDark}
            />
          </div>
        </div>
        <div
          className={`footer__copy-right-box w-6/12 flex ${flexDirection}  justify-end mt-50px   `}
        >
          <FooterDownloadButton title="download on the" market="cafebazar" />
        </div>
      </div>
      <div
        style={{ borderTopWidth: '1px' }}
        className="footer__nav-bottom border-white_shade-400"
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
