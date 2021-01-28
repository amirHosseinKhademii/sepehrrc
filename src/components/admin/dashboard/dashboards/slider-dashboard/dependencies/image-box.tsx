import { Fragment } from 'react';
import { useDesign, useUi } from 'hooks';
import { Text } from 'components';
import { ICEditSettings, ICCropAlt } from 'icons';
import { DndUploadBox } from '../../common/';

export const ImageBox = () => {
  const { designState, setPureImage } = useDesign();
  const { toggleModal } = useUi();
  const imagesData = designState.current.images;
  const { number } = designState.current.settings;
  return (
    <Fragment>
      {designState.pureImage.onUpload ? (
        <DndUploadBox
          number={number}
          placeholder={{
            text: 'تصاویر اسلایدر را اینجا آپلود کنید',
            width: 1326,
            height: 442,
          }}
        />
      ) : (
        <>
          <img
            className="w-full h-90px rounded"
            src={imagesData[number] ? imagesData[number].value : ''}
          />
          <div className="w-full flex justify-between  mt-9px">
            <div className="flex items-center mr-auto">
              <Text
                className="text-14px text-gray_shade-300 pr-12px cursor-pointer"
                onClick={() => setPureImage({ onUpload: true, number })}
              >
                ویرایش تصویر
              </Text>
              <ICEditSettings fill="#fff" />
            </div>
            <div className="flex items-center ">
              <Text
                className="text-14px text-gray_shade-300 pr-12px cursor-pointer"
                onClick={() => toggleModal({ open: true, editImage: true })}
              >
                برش تصویر
              </Text>
              <ICCropAlt fill="#fff" />
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};
