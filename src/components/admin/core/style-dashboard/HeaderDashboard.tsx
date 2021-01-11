import { FC, Fragment } from 'react';
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
import { Button } from '../button';

export const HeaderDashboard = () => {
  const { designState, setProps, setPureImage } = useDesign();
  const { join } = useClass();

  const DashboardButton = ({ className, onClick, children }) => {
    return (
      <div
        className={join(
          'focus:outline-none w-full h-58px bg-gray_shade-800 rounded flex items-center justify-between px-16px',
          className
        )}
        onClick={onClick}
      >
        {children}
      </div>
    );
  };

  const PageButtonGroup = () => {
    return (
      <div className="flex flex-col px-20px py-30px">
        <ButtonDrawer
          textCenter
          text="ویرایش منوی سایت "
          className="justify-center mb-15px"
        />
        <ButtonDrawer
          textCenter
          text="ویرایش منوی محصولات "
          className="justify-center mb-15px"
        />
        <ButtonDrawer
          textCenter
          text="ویرایش شبکه های اجتماعی "
          className="justify-center"
        />
      </div>
    );
  };
  const ButtonBox: FC<IBannerDashboard> = ({ label, number, className }) => {
    return (
      <div className={join('w-full px-20px pb-30px ', className)}>
        <Text className=" mb-14px text-14px text-white_shade-100 text-right">
          {label}
        </Text>
        <ButtonDrawer
          withUpload
          text="انتخاب لوگو"
          onUpload={(file) => setPureImage(file, number)}
        />
        <ButtonDrawer withLink link="Http:localhost" className="mt-14px" />
        <CheckBox className="mt-15px" label="باز کردن صفحه در تب جدید " />
      </div>
    );
  };

  const InputBox = ({
    label,
    placeholder,
    className,
  }: {
    className?: string;
    placeholder: string;
    label: string;
  }) => {
    return (
      <div className={join('w-full px-20px pb-30px ', className)}>
        <Text className=" mb-14px text-14px text-white_shade-100 text-right">
          {label}
        </Text>
        <Input placeholder={placeholder} variant="input" />
      </div>
    );
  };

  const StyleParts = () => (
    <div className="flex flex-col items-end pt-30px px-20px">
      <StyleBoxHeader />
      {/* <UploadButtonGroup /> */}
    </div>
  );

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات هدر" />
      <StyleParts />
      <PageButtonGroup />
      <ButtonBox label="لوگو" />
      <InputBox label="شماره تلفن" placeholder="0519876543" />
      <InputBox label="دکمه هدر" placeholder="محصولات فروشگاه" />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};
