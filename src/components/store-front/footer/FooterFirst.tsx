import { FC } from 'react';
import { useClass, useUi, useDirection } from 'hooks';
import {
  FooterLayout,
  FooterSocialMedia,
  FooterTel,
  FooterCopyRight,
} from './dependencies';

const FooterFirst: FC<IFooter> = ({ item, layout = false, designState }) => {
  const { uiState } = useUi();
  const { container } = uiState;
  const { join, toggle } = useClass();
  const { flexDirection, marginRtl, marginLtr } = useDirection();
  const isDark = designState.pageItems.settings?.backgroundColor || false;

  return (
    <FooterLayout layout={layout} toggle={toggle} isDark={isDark}>
      <div
        className={`flex ${flexDirection} w-full h-106px container mx-auto ${container.padding}  `}
      >
        <div className={`w-3/12 flex ${flexDirection} items-center `}>
          <FooterSocialMedia
            layout={layout}
            toggle={toggle}
            className={`h-40px w-40px rounded-full  ${
              isDark ? 'bg-gray_shade-800' : 'bg-gray_shade-50'
            }`}
            isDark={isDark}
          />
          <FooterTel
            layout={layout}
            toggle={toggle}
            flexDirection={flexDirection}
            className="font-iransans font-bold text-16px"
            isDark={isDark}
          />
        </div>
        <div
          className={`w-9/12 flex ${flexDirection} items-center justify-end  `}
        >
          <FooterCopyRight
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
