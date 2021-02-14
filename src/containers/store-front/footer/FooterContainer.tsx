import dynamic from 'next/dynamic';
import { useDesign, useUi } from 'hooks';
import { GeneralLayout } from 'components';

const FooterFirst = dynamic(
  () => import('components/store-front/footer/FooterFirst')
);
const FooterSecond = dynamic(
  () => import('components/store-front/footer/FooterSecond')
);
const FooterThird = dynamic(
  () => import('components/store-front/footer/FooterThird')
);
const FooterFourth = dynamic(
  () => import('components/store-front/footer/FooterFourth')
);

const FooterContainer = () => {
  const { uiState } = useUi();
  const { designState } = useDesign();
  const { theme } = designState.pageSettings;
  const layout = theme === 'default' ? true : false;
  const item = designState.pageItems.find((item) => item.uuid === 'FOOTER');

  const Footers = ({ item, designState, layout }) => {
    switch (item.settings.style) {
      case 'first':
        return (
          <FooterFirst item={item} layout={false} designState={designState} />
        );
      case 'second':
        return (
          <FooterSecond item={item} layout={layout} designState={designState} />
        );
      case 'third':
        return (
          <FooterThird item={item} layout={layout} designState={designState} />
        );
      case 'fourth':
        return (
          <FooterFourth item={item} layout={layout} designState={designState} />
        );
      default:
        return (
          <FooterFirst item={item} layout={layout} designState={designState} />
        );
    }
  };

  return (
    <GeneralLayout
      active={
        uiState.drawer.type === 'style' &&
        designState.current.type == 'footer' &&
        'FOOTER' == designState.current.uuid
          ? true
          : false
      }
      item={item}
    >
      <div className="absolute bottom-0 w-full">
        <Footers item={item} layout={layout} designState={designState} />
      </div>
    </GeneralLayout>
  );
};

export default FooterContainer;
