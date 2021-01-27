import { Brand } from 'components';
import { SwiperSlide } from 'swiper/react';

export const BrandContainer = ({ item }) => {
  const data = [
    {
      id: 0,
      name: 'test',
    },
    {
      id: 1,
      name: 'test1',
    },
    {
      id: 2,
      name: 'test2',
    },
    {
      id: 3,
      name: 'test3',
    },
    {
      id: 4,
      name: 'test4',
    },
    {
      id: 5,
      name: 'test5',
    },
    {
      id: 6,
      name: 'test6',
    },
    {
      id: 7,
      name: 'test7',
    },
  ];

  const handleChild = () => {
    const arr = [];
    data.map((item, index) => {
      arr.push(
        <SwiperSlide key={index} className="flex bg-blue-500">
          {item.name}
        </SwiperSlide>
      );
    });
    return arr;
  };

  return (
    <div className={`container mx-auto py-25px`}>
      <Brand child={handleChild()} />
    </div>
  );
};
