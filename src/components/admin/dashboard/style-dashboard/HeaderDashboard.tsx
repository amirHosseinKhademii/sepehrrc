import { FC } from 'react';
import { DrawerLayout } from 'components/admin/layouts';
import { useClass, useDesign } from 'hooks';
import {
  Text,
  Input,
  CheckBox,
  ButtonDrawer,
  StyleBoxHeader,
  HeaderDrawer,
  ButtonGroupDrawer,
} from 'components';

export const HeaderDashboard = () => {
  const { join } = useClass();
  const { designState, setProps, setPureImage } = useDesign();

  const PageButtonGroup = () => {
    return (
      <div className="w-full flex flex-col my-30px">
        <ButtonDrawer
          withPush
          onPush="./"
          text="ویرایش منوی سایت "
          className="justify-center mb-15px"
        />
        <ButtonDrawer
          withPush
          onPush="./"
          text="ویرایش منوی محصولات "
          className="justify-center mb-15px"
        />
        <ButtonDrawer
          withPush
          onPush="./"
          text="ویرایش شبکه های اجتماعی "
          className="justify-center"
        />
      </div>
    );
  };

  const ButtonBox: FC<IBannerDashboard> = ({ label, number, className }) => {
    return (
      <div className={join('w-full  mb-30px ', className)}>
        <Text className=" mb-14px text-14px text-white_shade-100 text-right">
          {label}
        </Text>
        <ButtonDrawer
          withUpload
          text="انتخاب لوگو"
          onUpload={(value) => setPureImage({ value, number })}
        />
        <Input
          variant="inputIcon"
          className="mt-15px"
          placeholder={designState.pureImage.link}
          onBlur={(event) => setPureImage({ link: event.target.value })}
        />
        <CheckBox className="mt-15px" label="باز کردن صفحه در تب جدید " />
      </div>
    );
  };

  const InputBox = ({
    label,
    placeholder,
    className,
    type,
  }: {
    className?: string;
    placeholder: string;
    label: string;
    type: string;
  }) => {
    return (
      <div className={join('w-full  mb-30px ', className)}>
        <Text className=" mb-14px text-14px text-white_shade-100 text-right">
          {label}
        </Text>
        {type === 'tel' ? (
          <Input
            placeholder={placeholder}
            variant="input"
            onBlur={(event) => setProps({ tel: event.target.value })}
          />
        ) : (
          <Input
            placeholder={placeholder}
            variant="input"
            onBlur={(event) => setProps({ buttonText: event.target.value })}
          />
        )}
      </div>
    );
  };

  const StyleParts = () => (
    <div className="w-full flex flex-col items-end pt-30px px-20px">
      <StyleBoxHeader />
      <PageButtonGroup />
      <ButtonBox label="لوگو" number="one" />
      <InputBox label="شماره تلفن" type="tel" placeholder="0519876543" />
      <InputBox label="دکمه هدر" type="button" placeholder="محصولات فروشگاه" />
    </div>
  );

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات هدر" />
      <StyleParts />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};
