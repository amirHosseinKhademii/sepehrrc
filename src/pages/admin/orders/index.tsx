import React, { useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from '../../../utils';

const data1 = [
  {
    id:0,
    name:'item1'
  },
  {
    id:0,
    name:'item2'
  },
  {
    id:0,
    name:'item3'
  },
];
const data2 = [
  {
    id:0,
    name:'item4'
  },
  {
    id:0,
    name:'item5'
  },
  {
    id:0,
    name:'item6'
  },
];

const Orders = () => {
  const [dataOne, setDataOne] = useState(data1);
  const [dataTwo, setDataTwo] = useState(data2);

  const handleChild = (index, arr) => (
    arr.filter((item, i) => i === index)[0]
  );

  return (
    <div className='grid grid-cols-12 mt-10'>
      <div className='col-span-6 flex justify-center items-center bg-green-500'>
        <Container groupName='1' onDrop={e =>setDataOne(applyDrag(dataOne, e))} getChildPayload={index => handleChild(index, dataOne)}>
          {dataOne.map((item) => (
            <Draggable key={item.id}>
              {item.name}
            </Draggable>
          ))}
        </Container>
      </div>
      <div className='col-span-6 flex justify-center items-center bg-blue-500'>
        <Container groupName='1' onDrop={e =>setDataTwo(applyDrag(dataTwo, e))} getChildPayload={index => handleChild(index, dataTwo)}>
          {dataTwo.map((item) => (
            <Draggable key={item.id}>
              {item.name}
            </Draggable>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Orders;