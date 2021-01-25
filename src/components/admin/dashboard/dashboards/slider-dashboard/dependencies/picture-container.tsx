import { useDesign } from 'hooks';
import { Text } from 'components';
import { PictureButton } from './picture-button';

export const PictureContainer = () => {
  const { designState } = useDesign();
  let imagesData = designState.current.images;
  const imagesDataLength = imagesData.length;
  const need = 8 - imagesDataLength;
  const arr = Array.from(Array(need).keys());
  const newArr = [...imagesData, ...arr];
  return (
    <div className="w-full felx flex-col  ">
      <Text className=" mb-6px text-14px text-white_shade-100 text-right">
        تصاویر اسلایدر
      </Text>
      <div
        dir="rtl"
        className="w-full h-130px grid grid-cols-4 grid-rows-2 gap-10px"
      >
        {newArr.map((item, index) => {
          return (
            <PictureButton
              key={index}
              withAdd={index === imagesDataLength ? true : false}
              picture={item.value}
              number={index}
            />
          );
        })}
      </div>
    </div>
  );
};
