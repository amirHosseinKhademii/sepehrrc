import { useDesign } from 'hooks';
import { Text, ButtonDrawer, Input, CheckBox } from 'components';
export const LogoUploader = ({ number = 'one' }) => {
  const { setPureImage, designState } = useDesign();
  const { pureImage } = designState;

  return (
    <div className="w-full  mb-30px ">
      <Text className=" mb-14px text-14px text-white_shade-100 text-right">
        لوگو
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
