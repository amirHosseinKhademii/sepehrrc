import { useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { useContext } from 'react';
import { UIContext } from 'providers/ui-provider';
import { DndContext, dndTypes } from 'providers/dnd-provider';
import { applyDrag, generateItems } from '../../../utils';

const data1 = [
  {
    id: 1,
    name: 'item1',
    type: 'button',
    className: 'bg-yellow-400',
  },
  {
    id: 2,
    name: 'item2',
    type: 'input',
    className: '',
    placeholder: 'test',
  },
  //   {
  //     id: 6,
  //     name: 'item3',
  //     type: 'input',
  //     className: 'bg-yellow-400',
  //   },
];
const data2 = [
  // {
  //   id: 1,
  //   name: 'item1',
  //   type: 'button',
  //   className: 'bg-yellow-400',
  // },
  //   {
  //     id: 4,
  //     name: 'item5',
  //   },
  //   {
  //     id: 5,
  //     name: 'item6',
  //   },
];

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
