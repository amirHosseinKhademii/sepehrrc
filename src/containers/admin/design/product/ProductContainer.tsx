import { BorderShadow, ProductSlider, ProductList, Display } from 'components';
import { useDesign, useUi } from 'hooks';

export const ProductContainer = ({ items }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { current } = designState;
  const displaySlide = current.settings?.screen == 'slider';
  return (
    <BorderShadow
      active={
        uiState.drawer.style &&
        current.type == 'products' &&
        items.uuid == current.uuid
          ? true
          : false
      }
    >
      <Display>
        {!displaySlide ? (
          <ProductList items={items} />
        ) : (
          <ProductSlider items={items} />
        )}
      </Display>
    </BorderShadow>
  );
};
