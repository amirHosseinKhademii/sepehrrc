import { ButtonDrawer, Text, CheckBox, Input } from 'components';
import { useClass, useDesign } from 'hooks';
import { FC } from 'react';

export const ImageUploader: FC<IBannerDashboard> = ({
  label,
  number,
  className,
}) => {
  const { join } = useClass();
  const { designState, setPureImage } = useDesign();
  const { pureImage } = designState;
  return (
    <div className={join('w-full', className)}>
      <Text className="mt-30px mb-14px text-14px text-white_shade-100 text-right">
        {label}
      </Text>
      <ButtonDrawer
        withUpload
        text="انتخاب تصویر"
        onUpload={(value) => setPureImage({ value, number })}
      />
      <Input
        withLink
        placeholder={pureImage.number == number ? pureImage.link : ''}
        variant="inputIcon"
        className="mt-14px"
        fontFamily="font-lato"
        onBlur={(e) => setPureImage({ number, link: e.target.value })}
      />
      <CheckBox
        className="mt-15px"
        label="باز کردن صفحه در تب جدید "
        onClick={() => {
          setPureImage({
            number,
            newTab: pureImage.newTab ? false : true,
          });
        }}
        checked={pureImage.number == number && pureImage.newTab}
      />
    </div>
  );
};
