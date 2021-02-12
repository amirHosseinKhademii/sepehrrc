import { useDesign, useUi } from 'hooks';
import {
  HeaderFirst,
  HeaderSecond,
  HeaderThird,
  HeaderFourth,
  HeaderFifth,
  HeaderSixth,
  HeaderSeventh,
  HeaderEighth,
  GeneralLayout,
} from 'components';

export const HeaderContainer = () => {
  const { uiState } = useUi();
  const { designState } = useDesign();
  const item = designState.pageItems.find((item) => item.uuid === 'HEADER');

  const Headers = ({ item }) => {
    if (
      !item.settings ||
      !item.settings.style ||
      item.settings.style === 'first'
    )
      return <HeaderFirst item={item} />;
    else if (item.settings.style === 'second')
      return <HeaderSecond item={item} />;
    else if (item.settings.style === 'third')
      return <HeaderThird item={item} />;
    else if (item.settings.style === 'fourth')
      return <HeaderFourth item={item} />;
    else if (item.settings.style === 'fifth')
      return <HeaderFifth item={item} />;
    else if (item.settings.style === 'sixth')
      return <HeaderSixth item={item} />;
    else if (item.settings.style === 'seventh')
      return <HeaderSeventh item={item} />;
    else if (item.settings.style === 'eighth')
      return <HeaderEighth item={item} />;
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
