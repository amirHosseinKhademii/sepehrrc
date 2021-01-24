import { Fragment } from 'react';
import { useDesign } from 'hooks';
import { Input, CheckBox, Text } from 'components';

export const InputBox = () => {
  const { designState, setPureImage } = useDesign();
  const { pureImage } = designState;
  const { number } = designState.current.settings;
  return (
    <Fragment>
      <Input
        label="عنوان تصویر"
        className="mt-25px"
        variant="input"
        onBlur={(e) => setPureImage({ title: e.target.value, number })}
        placeholder={
          pureImage.title ? pureImage.title : 'عنوان را اینجا بنویسید'
        }
      />
      <Input
        label="توضیحات تصویر"
        className="mt-25px"
        variant="textArea"
        onBlur={(e) => setPureImage({ description: e.target.value, number })}
        placeholder={
          pureImage.description
            ? pureImage.description
            : 'توضیحات را اینجا بنویسید'
        }
      />

      <Text className="mt-25px text-14px text-white_shade-100">لینک تصویر</Text>
      <Input
        withLink
        placeholder={pureImage.link ? pureImage.link : ''}
        variant="inputIcon"
        label="لینک تصویر"
        className="mt-14px"
        fontFamily="font-lato"
        onBlur={(e) => setPureImage({ link: e.target.value, number })}
      />
      <CheckBox
        label="باز کردن در تب جدید"
        className="mt-15px"
        onClick={() => {
          setPureImage({
            newTab: pureImage.newTab ? false : true,
            number,
          });
        }}
        checked={pureImage.newTab}
      />
    </Fragment>
  );
};
