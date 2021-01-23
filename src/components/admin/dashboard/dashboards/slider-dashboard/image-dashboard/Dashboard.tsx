import { Fragment } from 'react';
import { useDesign } from 'hooks';
import { Input, CheckBox, Text } from 'components';
import { ICEditSettings } from 'icons';

export const ImageSettings = () => {
  const { designState, setPureImage } = useDesign();
  const imagesData = designState.current.images;
  const { selectedNumber } = designState.current.settings;

  const ImageBox = () => (
    <Fragment>
      <img
        className="w-full h-90px rounded"
        src={imagesData[selectedNumber].value}
      />
      <div className="w-full flex justify-between  mt-9px">
        <div className="flex items-center mr-auto">
          <Text className="text-14px text-gray_shade-300 pr-12px">
            ویرایش تصویر
          </Text>
          <ICEditSettings fill="#fff" />
        </div>
        <div className="flex items-center ">
          <Text className="text-14px text-gray_shade-300 pr-12px">
            برش تصویر
          </Text>
          <ICEditSettings fill="#fff" />
        </div>
      </div>
    </Fragment>
  );

  const InputBox = () => (
    <Fragment>
      <Input
        label="عنوان تصویر"
        className="mt-25px"
        variant="input"
        onBlur={(e) => setPureImage({ title: e.target.value })}
        placeholder={
          designState.pureImage.title
            ? designState.pureImage.title
            : 'عنوان را اینجا بنویسید'
        }
      />
      <Input
        label="توضیحات تصویر"
        className="mt-25px"
        variant="textArea"
        onBlur={(e) => setPureImage({ description: e.target.value })}
        placeholder={
          designState.pureImage.description
            ? designState.pureImage.description
            : 'توضیحات را اینجا بنویسید'
        }
      />
      <label className=" text-white_shade-100 text-12px mt-25px -mb-8px">
        لینک تصویر
      </label>
      <Input
        withLink
        placeholder={
          designState.pureImage.link ? designState.pureImage.link : ''
        }
        variant="inputIcon"
        label="لینک تصویر"
        className="mt-25px"
        fontFamily="font-lato"
        onBlur={(e) => setPureImage({ link: e.target.value })}
      />
      <CheckBox
        label="باز کردن در تب جدید"
        className="mt-15px"
        onClick={() => {
          setPureImage({
            newTab: designState.pureImage.newTab ? false : true,
          });
        }}
        checked={designState.pureImage.newTab}
      />
    </Fragment>
  );

  return (
    <div className="flex flex-col items-end pt-30px px-20px">
      <ImageBox />
      <InputBox />
    </div>
  );
};
