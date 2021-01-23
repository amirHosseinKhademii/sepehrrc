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
import { MenuEditGroup } from './dependencies';
import { ProductPrice } from 'components/admin/page/product/dependencies';

export const HeaderDashboard = () => {
  const { join } = useClass();
  const { designState, setProps, setPureImage } = useDesign();
  const { pureImage } = designState;

  const BaseSetttings = () => {
    return (
      <>
        <MenuEditGroup />
        <StyleParts />
      </>
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
          withLink
          variant="inputIcon"
          className="mt-15px"
          placeholder={pureImage.number == number ? pureImage.link : ''}
          onBlur={(event) => {
            setPureImage({ number, link: event.target.value });
          }}
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
    const currentStyle = designState.current.settings.style;

    if (
      type === 'tel' &&
      currentStyle !== 'first' &&
      currentStyle !== 'second' &&
      currentStyle !== 'fourth' &&
      currentStyle
    ) {
      return (
        <div className={join('w-full  mb-30px ', className)}>
          <Text className=" mb-14px text-14px text-white_shade-100 text-right">
            {label}
          </Text>

          <Input
            placeholder="910000000"
            maxLength={15}
            variant="input"
            withNumber
            onBlur={(event) =>
              setProps({ key: 'telNumber', value: event.target.value })
            }
          />
        </div>
      );
    } else if (
      type === 'button' &&
      currentStyle !== 'second' &&
      currentStyle !== 'seventh'
    ) {
      return (
        <div className={join('w-full  mb-30px ', className)}>
          <Text className=" mb-14px text-14px text-white_shade-100 text-right">
            {label}
          </Text>

          <Input
            maxLength={30}
            placeholder="وروود یا عضویت"
            variant="input"
            onBlur={(event) =>
              setProps({ key: 'buttonText', value: event.target.value })
            }
          />
        </div>
      );
    } else {
      return null;
    }
  };

  const StyleParts = () => (
    <div className="w-full flex flex-col items-end pt-30px px-20px">
      <StyleBoxHeader />
      <ButtonBox label="لوگو" number="one" />
      <InputBox label="شماره تلفن" type="tel" placeholder="0519876543" />
      <InputBox label="دکمه هدر" type="button" placeholder="محصولات فروشگاه" />
    </div>
  );

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات هدر" />
      <BaseSetttings />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};
