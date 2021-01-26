import { Fragment } from 'react';
import { useDesign } from 'hooks';
import { Input, CheckBox, Text } from 'components';

export const InputBox = () => {
  const { designState, setPureImage, setImage } = useDesign();
  const { pureImage, current } = designState;
  const { number } = designState.current.settings;
  const currentImage =
    current.images && current.images.find((item) => item.number == number);

  return (
    <Fragment>
      <Input
        label="عنوان تصویر"
        className="mt-25px"
        variant="input"
        onBlur={(e) => setImage({ type: 'title', payload: e.target.value })}
        placeholder={
          pureImage.title ? pureImage.title : 'عنوان را اینجا بنویسید'
        }
      />
      <Input
        label="توضیحات تصویر"
        className="mt-25px"
        variant="textArea"
        onBlur={(e) =>
          setImage({ payload: e.target.value, type: 'description' })
        }
        placeholder={
          currentImage && currentImage.description
            ? currentImage.description
            : 'توضیحات را اینجا بنویسید'
        }
      />

      <Text className="mt-25px text-14px text-white_shade-100">لینک تصویر</Text>
      <Input
        withLink
        placeholder={currentImage && currentImage.link ? currentImage.link : ''}
        variant="inputIcon"
        label="لینک تصویر"
        className="mt-14px"
        fontFamily="font-lato"
        onBlur={(e) => setImage({ type: 'link', payload: e.target.value })}
      />
      <CheckBox
        label="باز کردن در تب جدید"
        className="mt-15px"
        onClick={() => {
          setImage({
            type: 'newTab',
            // payload: pureImage.newTab ? false : true,
            payload: !currentImage || !currentImage.newTab ? true : false,
          });
        }}
        checked={currentImage && currentImage.newTab}
      />
    </Fragment>
  );
};
