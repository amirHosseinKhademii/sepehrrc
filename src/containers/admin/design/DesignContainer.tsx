import { Fragment, useState } from 'react';
import { Container } from 'react-smooth-dnd';
import { useDesign } from 'hooks';
import { CardContainer } from './card';
import { Slider } from 'components';
import { BannerContainer } from './banner';

export const DesignContainer = () => {
  const [drop, setDrop] = useState({});
  const { onHorizontalDrop, setChildPayload, designState } = useDesign();

  return (
    <Container
      groupName="ADMIN_DESIGN"
      dragClass="bg-red-600"
      onDrop={onHorizontalDrop(drop)}
      getChildPayload={(index) => setChildPayload(index, designState.page)}
      onDragEnd={(e) => setDrop(e)}
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
          {item.type == 'products' && (
            <CardContainer items={item.items} title="جدیدترین محصولات ما" />
          )}
          {item.type == 'slider' && <Slider item={item} />}
          {item.type == 'banner' && <BannerContainer item={item} />}
          {item.type == 'brands' && (
            <p className="text-center text-lg my-10">برندها</p>
          )}
        </Fragment>
      ))}
    </Container>
  );
};
