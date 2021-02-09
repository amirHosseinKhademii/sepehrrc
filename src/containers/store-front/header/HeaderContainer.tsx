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
export const DesignHeader = () => {
  const { uiState } = useUi();
  const { designState } = useDesign();
  const item = designState.pageItems.find((item) => item.uuid === 'HEADER');
  const { theme } = designState.pageSettings;
  const layout = theme === 'default' ? false : true;
  const Headers = ({ item, layout }) => {
    if (
      !item.settings ||
      !item.settings.style ||
      item.settings.style === 'first'
    )
      return (
        <HeaderFirst
          item={item}
          layout={layout}
          uiState={uiState}
          designState={designState}
        />
      );
    else if (item.settings.style === 'second')
      return (
        <HeaderSecond
          item={item}
          layout={layout}
          uiState={uiState}
          designState={designState}
        />
      );
    else if (item.settings.style === 'third')
      return (
        <HeaderThird
          item={item}
          layout={layout}
          uiState={uiState}
          designState={designState}
        />
      );
    else if (item.settings.style === 'fourth')
      return (
        <HeaderFourth
          item={item}
          layout={layout}
          uiState={uiState}
          designState={designState}
        />
      );
    else if (item.settings.style === 'fifth')
      return (
        <HeaderFifth
          item={item}
          layout={layout}
          uiState={uiState}
          designState={designState}
        />
      );
    else if (item.settings.style === 'sixth')
      return (
        <HeaderSixth
          item={item}
          layout={layout}
          uiState={uiState}
          designState={designState}
        />
      );
    else if (item.settings.style === 'seventh')
      return (
        <HeaderSeventh
          item={item}
          layout={layout}
          uiState={uiState}
          designState={designState}
        />
      );
    else if (item.settings.style === 'eighth')
      return (
        <HeaderEighth
          item={item}
          layout={layout}
          uiState={uiState}
          designState={designState}
        />
      );
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
      <Headers item={item} layout={layout} />
    </GeneralLayout>
  );
};
