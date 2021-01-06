import { Fragment, useState } from 'react';
import { Container } from 'react-smooth-dnd';
import { useDesign, useUi } from 'hooks';
import { CardContainer } from './CardContainer';

import { Slider } from 'components';

export const DesignContainer = () => {
  const { uiState } = useUi();
  const [drop, setDrop] = useState({});
  const { onHorizontalDrop, setChildPayload, designState } = useDesign();

  let designWidth = 'designWidth';
  if (uiState.drawer.sections || uiState.drawer.add) {
    designWidth = 'designWidthSection';
  } else if (uiState.drawer.menu) {
    designWidth = 'designWidthMenu';
  }

  return (
    <div className={`${designWidth}`}>
      <Container
        groupName="ADMIN_DESIGN"
        dragClass="bg-red-600"
        onDrop={onHorizontalDrop(drop)}
        getChildPayload={(index) => setChildPayload(index, designState.page)}
        onDragEnd={(e) => setDrop(e)}
        style={{ height: '90vh' }}
      >
        {designState.page.map((item, index) => (
          <Fragment key={index}>
            {item.type == 'products' && (
              <CardContainer items={item.items} title="جدیدترین محصولات ما" />
            )}
            {item.type == 'slider' && <Slider />}
            {item.type == 'banner' && (
              <div className="text-center p-10 rounded bg-red-400 text-white text-lg flex items-center justify-center w-1/4 mx-auto my-20">
                {item.title}
              </div>
            )}
          </Fragment>
        ))}
      </Container>
    </div>
  );
};
