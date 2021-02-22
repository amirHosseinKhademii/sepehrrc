import { useDesign, useUi, useDirection } from 'hooks';
import { Text } from 'components';
import { PictureButton } from './picture-button';

export const PictureContainer = ({ title, count = 8, marginTop = '0' }) => {
  const { textAlignRtl } = useDirection();
  const { designState, setPureImage } = useDesign();
  const { toggleSettingState } = useUi();
  let newArr = [];
  let arr = [];
  let imagesData = designState.current.images;
  const imagesDataLength = imagesData.length;
  let need = 8 - imagesDataLength;
  if (imagesDataLength > 8) {
    arr = Array.from(Array(1).keys());
  } else if (imagesDataLength === count) {
    arr = [];
  } else {
    arr = Array.from(Array(need).keys());
  }
  newArr = [...imagesData, ...arr];

  const handleOnDragEnter = () => {
    toggleSettingState({ type: 'dropZone', open: true });
    setPureImage({ number: imagesDataLength, isBackground: false });
  };

  return (
    <div
      className={`mt-${marginTop} w-full felx flex-col`}
      onDragEnter={() => handleOnDragEnter()}
    >
      <Text
        className={` mb-10px text-14px text-white_shade-100 ${textAlignRtl}`}
      >
        {title}
      </Text>
      <div dir="rtl" className={`w-full h-auto grid grid-cols-4 gap-10px`}>
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
