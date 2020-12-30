import { useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from '../../../utils';
import { Button, Input } from 'components';

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
  {
    id: 1,
    name: 'item1',
    type: 'button',
    className: 'bg-yellow-400',
  },
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
  const [drawer, setDrawer] = useState<boolean>(false);
  const [dataOne, setDataOne] = useState(data1);
  const [dataTwo, setDataTwo] = useState(data2);
  const handleChild = (index, arr) => arr.filter((item, i) => i === index)[0];
  return (
    <div className="">
      <button onClick={() => setDrawer(!drawer)}>open</button>
      <div className="w-full bg-gray-400 h-64">
        <Container
          groupName="1"
          onDrop={(e) => setDataTwo(applyDrag(dataTwo, e))}
          getChildPayload={(index) => handleChild(index, dataTwo)}
          style={{ width: '100%' }}
        >
          {(dataTwo || []).map((item, index) => (
            <Draggable key={index}>
              {item.type === 'button' && <Button item={item} page />}
              {item.type === 'input' && <Input item={item} page />}
            </Draggable>
          ))}
        </Container>
      </div>
      <div
        className={`w-1/5 h-full  bg-gray-500 top-0 right-0 absolute ${
          drawer ? 'block' : 'hidden'
        }`}
      >
        <Container
          groupName="1"
          // onDrop={(e) => setDataOne(applyDrag(dataOne, e))}
          getChildPayload={(index) => handleChild(index, dataOne)}
        >
          {dataOne.map((item, index) => (
            <Draggable key={index}>
              {item.type === 'button' && <Button item={item} />}
              {item.type === 'input' && <Input item={item} />}
            </Draggable>
          ))}
        </Container>
      </div>
    </div>
  );
};
