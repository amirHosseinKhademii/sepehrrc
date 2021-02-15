import { FC } from 'react';
import { useClass, useUi, useDirection } from 'hooks';
import {
  FooterLayout,
  FooterSocialMedia,
  FooterTel,
  FooterCopyRight,
  FooterPower,
  FooterNavbar,
} from './dependencies';

const FooterSecond: FC<IFooter> = ({ item, layout = true, designState }) => {
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
      id="footerSecond"
      cssClass="footer--second"
    >
      <div
        className={`footer__row footer__row--2 flex ${flexDirection} w-full h-140px container mx-auto ${container.padding}  `}
      >
        <div
          className={`footer__social-tel-box w-6/12 flex ${flexDirection} items-center `}
        >
          <FooterNavbar
            direction="horizental"
            layout={layout}
            toggle={toggle}
            className="font-light text-16px"
          />
        </div>
        <div
          className={`footer__copy-right-box w-6/12 flex ${flexDirection} items-center justify-end  `}
        >
          <FooterTel
            layout={layout}
            toggle={toggle}
            flexDirection={flexDirection}
            className={`font-bold text-16px ${marginLtr}-23px`}
            cssClass={`${marginLtr}-23px`}
            isDark={isDark}
          />
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
        </div>
      </div>
      <div
        style={{ borderTopWidth: '1px' }}
        className="footer__nav-bottom border-white_shade-400"
      >
        <div
          className={`footer__nav-bottom--container flex ${flexDirection} w-full h-72px container mx-auto ${container.padding} border-t-1 `}
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

export default FooterSecond;
