import { Fragment, memo, useState } from 'react';
import dynamic from 'next/dynamic';
import { Container, smoothDnD } from 'react-smooth-dnd';
import { useDesign } from 'hooks';
import HeaderContainer from './header/HeaderContainer';
import FooterContainer from './footer/FooterContainer';
import SliderContainer from './slider/SliderContainer';

const ProductContainer = dynamic(() => import('./product/ProductContainer'));
const BrandContainer = dynamic(() => import('./brand/BrandContainer'));
// const SliderContainer = dynamic(() => import('./slider/SliderContainer'));
const BannerContainer = dynamic(() => import('./banner/BannerContainer'));
const BlogContainer = dynamic(() => import('./blog/BlogContainer'));
export const StoreFrontDesignContainer = memo(() => {
  const [drop, setDrop] = useState({});
  const { onHorizontalDrop, setChildPayload, designState } = useDesign();

  return (
    <Fragment>
      <HeaderContainer />
      <div className=" w-full h-auto flex-grow relative pb-28 bg-gray_tint-16">
        <Container
          groupName="ADMIN_DESIGN"
          dragClass="bg-red-600"
          onDrop={onHorizontalDrop(drop)}
          getChildPayload={(index) => setChildPayload(index, designState.page)}
          onDragEnd={(e) => (e !== null ? setDrop(e) : {})}
          style={{
            width: '100%',
            minHeight: '60vh',
          }}
          dropPlaceholder={{
            animationDuration: 250,
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
              {item.type == 'blog' && <BlogContainer item={item} />}
              {item.type == 'product-group' && (
                <div className="text-center py-121px text-lg">گروه محصولات</div>
              )}
            </Fragment>
          ))}
        </Container>
      </div>
      <FooterContainer />
    </Fragment>
  );
});
