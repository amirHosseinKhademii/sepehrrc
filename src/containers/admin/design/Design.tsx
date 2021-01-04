import { Fragment } from 'react';
import { Container } from 'react-smooth-dnd';
import { CardContainer } from 'containers';
import { useDnd, useUi } from 'hooks';
import { Slider } from 'components';

export const Design = () => {
  const { uiState } = useUi();
  const { onDrop, setChildPayload, dndState } = useDnd();

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
        onDrop={onDrop}
        getChildPayload={(index) => setChildPayload(index, dndState.page)}
        style={{ height: '100vh' }}
      >
        {dndState.page
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((item, index) => {
            return (
              <Fragment key={index}>
                {item.type == 'products' && (
                  <CardContainer
                    items={item.items}
                    title="جدیدترین محصولات ماه"
                  />
                )}
                {item.type == 'slider' && <Slider />}
              </Fragment>
            );
          })}
      </Container>
    </div>
  );
};
