import { useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { useContext } from 'react';
import { UIContext } from 'providers/ui-provider';
import { DndContext, dndTypes } from 'providers/dnd-provider';
import { applyDrag, generateItems } from '../../../utils';

export const Design = () => {
  const { uiState } = useContext(UIContext);
  const { dndState, dndDispatch } = useContext(DndContext);

  let designWidth = 'designWidth';
  if (uiState.drawer.sections || uiState.drawer.add) {
    designWidth = 'designWidthSection';
  } else if (uiState.drawer.menu) {
    designWidth = 'designWidthMenu';
  }

  // const [data, setData] = useState(data2);
  const childPayload = (index, arr) => arr.filter((item, i) => i === index)[0];

  return (
    <div className={`${designWidth}`}>
      <Container
        groupName="1"
        dragClass="bg-red-600"
        onDrop={(dropResult) =>
          dndDispatch({ type: dndTypes.ON_DRAG, payload: dropResult })
        }
        getChildPayload={(index) => childPayload(index, dndState.page)}
      >
        {dndState.page.map((item, index) => {
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
