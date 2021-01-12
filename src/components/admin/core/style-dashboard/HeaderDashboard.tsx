import { FC, Fragment, useState, useEffect } from 'react';
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
  const { designState, setProps, setPureImage } = useDesign();
  const [status, setStatus] = useState({ hasButton: false, hasTel: false });

  useEffect(() => {
    if (
      designState.current.settings.style !== 'first' &&
      designState.current.settings.style !== 'second' &&
      designState.current.settings.style !== 'fourth'
    ) {
      setStatus({ ...status, hasTel: true });
    } else {
      setStatus({ ...status, hasTel: false });
    }
    if (
      designState.current.settings.style !== 'second' &&
      designState.current.settings.style !== 'seventh'
    ) {
      setStatus({ ...status, hasButton: true });
    } else {
      setStatus({ ...status, hasButton: false });
    }
  }, [designState]);

  const { join } = useClass();

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
      <div className={join('w-full px-20px pb-30px ', className)}>
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
    <div className="flex flex-col items-end pt-30px px-20px">
      <StyleBoxHeader />
    </div>
  );

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات هدر" />
      <StyleParts />
      <PageButtonGroup />
      <ButtonBox label="لوگو" number="1" />
      {status.hasTel && (
        <InputBox label="شماره تلفن" type="tel" placeholder="0519876543" />
      )}
      {status.hasButton && (
        <InputBox
          label="دکمه هدر"
          type="button"
          placeholder="محصولات فروشگاه"
        />
      )}
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};
