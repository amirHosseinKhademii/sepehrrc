import { Container, Draggable } from 'react-smooth-dnd';
import { useDnd, useUi } from 'hooks';

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
      >
        {dndState.page
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((item, index) => {
            return (
              <Draggable key={index}>
                <div>{item.title}</div>
              </Draggable>
            );
          })}
      </Container>
    </div>
  );
};
