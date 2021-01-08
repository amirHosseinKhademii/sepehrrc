import { Fragment } from 'react';
import { DrawerLayout } from 'components/admin/layouts';
import { useDesign } from 'hooks';
import {
  ButtonDrawer,
  Text,
  Input,
  StyleBoxBanner,
  HeaderDrawer,
  ButtonGroupDrawer,
} from 'components';

export const BannerDashboard = () => {
  const { designState, setProps, setImage } = useDesign();

  const UploadButtonGroup = () => {
    const ButtonBox = ({ label, number }) => {
      return (
        <Fragment>
          <Text className="mt-30px mb-14px text-14px text-white_shade-100 text-right">
            {label}
          </Text>
          <ButtonDrawer
            withUpload
            text="انتخاب تصویر"
            onUpload={(file) => setImage(file, number)}
          />
          <ButtonDrawer withLink link="Http:localhost" className="mt-14px" />
        </Fragment>
      );
    };

    if (designState.current.settings.style === 'first')
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" />
          <ButtonBox label="تصویر 3" number="three" />
        </Fragment>
      );
    else if (designState.current.settings.style === 'second')
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" />
          <ButtonBox label="تصویر 3" number="three" />
          <ButtonBox label="تصویر 4" number="four" />
          <ButtonBox label="تصویر 5" number="five" />
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
          <ButtonBox label="تصویر 6" number="six" />
        </Fragment>
      );
    else if (designState.current.settings.style === 'forth')
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" />
          <ButtonBox label="تصویر 3" number="three" />
          <ButtonBox label="تصویر 4" number="four" />
        </Fragment>
      );
    else if (designState.current.settings.style === 'fifth')
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" />
        </Fragment>
      );
    else if (designState.current.settings.style === 'sixth')
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" />
          <ButtonBox label="تصویر 3" number="three" />
        </Fragment>
      );
    else
      return (
        <Fragment>
          <ButtonBox label="تصویر 1" number="one" />
          <ButtonBox label="تصویر 2" number="two" />
          <ButtonBox label="تصویر 3" number="three" />
        </Fragment>
      );
  };

  const StyleParts = () => (
    <div className="flex flex-col items-end pt-30px px-20px">
      <Input
        className=" mb-30px"
        label="عنوان بخش"
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
