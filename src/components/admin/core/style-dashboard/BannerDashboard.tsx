import { FC, Fragment } from 'react';
import { DrawerLayout } from 'components/admin/layouts';
import { useClass, useDesign } from 'hooks';
import {
  Text,
  Input,
  CheckBox,
  ButtonDrawer,
  StyleBoxBanner,
  HeaderDrawer,
  ButtonGroupDrawer,
} from 'components';

export const BannerDashboard = () => {
  const { join } = useClass();
  const { designState, setProps, setPureImage } = useDesign();

  const UploadButtonGroup = () => {
    const ButtonBox: FC<IBannerDashboard> = ({ label, number, className }) => {
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
            placeholder={designState.pureImage.link}
            variant="inputIcon"
            className="mt-14px"
            fontFamily="font-lato"
            onBlur={(e) => setPureImage({ link: e.target.value })}
          />
          <CheckBox
            className="mt-15px"
            label="باز کردن صفحه در تب جدید "
            //onChange={(e) => console.log(e.target.checked)}
            // onChange={(e) => setPureImage({ newTab: e.target.checked })}
            //checked={designState.pureImage.newTab}
          />
        </div>
      );
    };

    if (designState.current.settings.style === 'first')
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" />
          <ButtonBox label="تصویر 3" number="three" className="mb-122px" />
        </Fragment>
      );
    else if (designState.current.settings.style === 'second')
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" />
          <ButtonBox label="تصویر 3" number="three" />
          <ButtonBox label="تصویر 4" number="four" />
          <ButtonBox label="تصویر 5" number="five" className="mb-122px" />
        </Fragment>
      );
    else if (designState.current.settings.style === 'third')
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" />
          <ButtonBox label="تصویر 3" number="three" />
          <ButtonBox label="تصویر 4" number="four" />
          <ButtonBox label="تصویر 5" number="five" />
          <ButtonBox label="تصویر 6" number="six" className="mb-122px" />
        </Fragment>
      );
    else if (designState.current.settings.style === 'forth')
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" />
          <ButtonBox label="تصویر 3" number="three" />
          <ButtonBox label="تصویر 4" number="four" className="mb-122px" />
        </Fragment>
      );
    else if (designState.current.settings.style === 'fifth')
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" className="mb-122px" />
        </Fragment>
      );
    else if (designState.current.settings.style === 'sixth')
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" />
          <ButtonBox label="تصویر 3" number="three" className="mb-122px" />
        </Fragment>
      );
    else
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" />
          <ButtonBox label="تصویر 3" number="three" className="mb-122px" />
        </Fragment>
      );
  };

  const StyleParts = () => (
    <div className="flex flex-col items-end pt-30px px-20px">
      <Input
        className="mb-30px"
        label="عنوان بخش"
        variant="input"
        onBlur={(e) => setProps({ key: 'title', value: e.target.value })}
        placeholder={designState.current.title}
      />
      <StyleBoxBanner />
      <UploadButtonGroup />
    </div>
  );

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات بنر تبلیغاتی" />
      <StyleParts />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};
