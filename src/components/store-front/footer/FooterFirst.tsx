import { FC } from 'react';
import { useClass, useUi, useDirection } from 'hooks';
import {
  FooterLayout,
  FooterSocialMedia,
  FooterTel,
  FooterPower,
} from './dependencies';

const FooterFirst: FC<IFooter> = ({ item, layout = false, designState }) => {
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
      id="footerFirst"
      cssClass="footer--first"
    >
      <div
        className={`footer__row footer__row--1 flex ${flexDirection} w-full h-106px container mx-auto ${container.padding}  `}
      >
        <div
          className={`footer__social-tel-box w-3/12 flex ${flexDirection} items-center `}
        >
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
            marginRtl={marginRtl}
            settings={settings}
          />
        </div>
        <div
          className={`footer__copy-right-box w-9/12 flex ${flexDirection} items-center justify-end  `}
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
    </FooterLayout>
  );
};

export default FooterFirst;
