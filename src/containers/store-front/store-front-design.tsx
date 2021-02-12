import { Fragment, memo, useState } from 'react';
import { Container } from 'react-smooth-dnd';
import { useDesign } from 'hooks';
import {
  ProductContainer,
  BrandContainer,
  SliderContainer,
  BannerContainer,
  HeaderContainer,
  FooterContainer,
} from '.';

export const StoreFrontDesignContainer = memo(() => {
  const [drop, setDrop] = useState({});
  const { onHorizontalDrop, setChildPayload, designState } = useDesign();

  return (
    <Fragment>
      <HeaderContainer />
      <Container
        groupName="ADMIN_DESIGN"
        dragClass="bg-red-600"
        onDrop={onHorizontalDrop(drop)}
        getChildPayload={(index) => setChildPayload(index, designState.page)}
        onDragEnd={(e) => e && setDrop(e)}
        style={{
          width: '100%',
          minHeight: '60vh',
        }}
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'drop-preview',
        }}
      >
        {designState.pageItems.map((item, index) => (
          <Fragment key={index}>
            {item.type == 'products' && <ProductContainer item={item} />}
            {item.type == 'slider' && <SliderContainer item={item} />}
            {item.type == 'banner' && <BannerContainer item={item} />}
            {item.type == 'brands' && <BrandContainer item={item} />}
          </Fragment>
        ))}
      </Container>
      <FooterContainer />
    </Fragment>
  );
});
