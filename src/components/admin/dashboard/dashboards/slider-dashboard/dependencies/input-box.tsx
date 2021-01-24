import { Fragment } from 'react';
import { useDesign } from 'hooks';
import { Input, CheckBox } from 'components';

export const InputBox = () => {
  const { designState, setPureImage } = useDesign();
  const { pureImage } = designState;
  const selectedImageNumber = designState.current.settings.number;
  return (
    <Fragment>
      <Input
        label="عنوان تصویر"
        className="mt-25px"
        variant="input"
        onBlur={(e) => setPureImage({ title: e.target.value })}
        placeholder={
          pureImage.title ? pureImage.title : 'عنوان را اینجا بنویسید'
        }
      />
      <Input
        label="توضیحات تصویر"
        className="mt-25px"
        variant="textArea"
        onBlur={(e) => setPureImage({ description: e.target.value })}
        placeholder={
          pureImage.description
            ? pureImage.description
            : 'توضیحات را اینجا بنویسید'
        }
      />
      <label className=" text-white_shade-100 text-12px mt-25px -mb-8px">
        لینک تصویر
      </label>
      <Input
        withLink
        placeholder={pureImage.link ? pureImage.link : ''}
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
            newTab: pureImage.newTab ? false : true,
          });
        }}
        checked={pureImage.newTab}
      />
    </Fragment>
  );
};
