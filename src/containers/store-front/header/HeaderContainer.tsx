import dynamic from 'next/dynamic';
import { useDesign, useUi } from 'hooks';
import { GeneralLayout } from 'components';

const HeaderFirst = dynamic(
  () => import('components/store-front/header/HeaderFirst')
);
const HeaderSecond = dynamic(
  () => import('components/store-front/header/HeaderSecond')
);
const HeaderThird = dynamic(
  () => import('components/store-front/header/HeaderThird')
);
const HeaderFourth = dynamic(
  () => import('components/store-front/header/HeaderFourth')
);
const HeaderFifth = dynamic(
  () => import('components/store-front/header/HeaderFifth')
);
const HeaderSixth = dynamic(
  () => import('components/store-front/header/HeaderSixth')
);
const HeaderSeventh = dynamic(
  () => import('components/store-front/header/HeaderSeventh')
);
const HeaderEighth = dynamic(
  () => import('components/store-front/header/HeaderEighth')
);

const HeaderContainer = () => {
  const { uiState } = useUi();
  const { designState } = useDesign();
  const item = designState.pageItems.find((item) => item.uuid === 'HEADER');

  const Headers = ({ item }) => {
    switch (item.settings.style) {
      case 'first':
        return <HeaderFirst item={item} />;
      case 'second':
        return <HeaderSecond item={item} />;
      case 'third':
        return <HeaderThird item={item} />;
      case 'fourth':
        return <HeaderFourth item={item} />;
      case 'fifth':
        return <HeaderFifth item={item} />;
      case 'sixth':
        return <HeaderSixth item={item} />;
      case 'seventh':
        return <HeaderSeventh item={item} />;
      case 'eighth':
        return <HeaderEighth item={item} />;
      default:
        return <HeaderFirst item={item} />;
    }
  };

  return (
    <GeneralLayout
      active={
        uiState.drawer.type === 'style' &&
        designState.current.type == 'header' &&
        'HEADER' == designState.current.uuid
          ? true
          : false
      }
      item={item}
    >
      <Headers item={item} />
    </GeneralLayout>
  );
};

export default HeaderContainer;
