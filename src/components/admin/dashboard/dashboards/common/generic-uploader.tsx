import { useClass, useDesign } from 'hooks';
import { Text, ButtonDrawer, Input, CheckBox } from 'components';
import { FC } from 'react';

export const GenericUploader: FC<IGenericUploader> = ({
  label,
  text,
  number = 'one',
  withNewTab,
  withLink,
  className,
  isBackground,
}) => {
  const { join } = useClass();
  const { setPureImage, designState, setImage } = useDesign();
  const { current } = designState;
  const currentImage =
    current.images && current.images.find((item) => item.number == number);

  return (
    <div className={join('w-full', className)}>
      {label && (
        <Text className=" mb-14px text-14px text-white_shade-100 text-right">
          {label}
        </Text>
      )}
      <ButtonDrawer
        withUpload
        text={text}
        onUpload={(value) => setPureImage({ value, number, isBackground })}
      />
      {withLink && (
        <Input
          withLink
          variant="inputIcon"
          className="mt-15px"
          placeholder={
            currentImage && currentImage.link ? currentImage.link : ''
          }
          onBlur={(event) => {
            setImage({ type: 'link', payload: event.target.value });
          }}
          disabled={!currentImage || currentImage.value === ''}
        />
      )}
      {withNewTab && (
        <CheckBox
          className="mt-15px"
          label="باز کردن صفحه در تب جدید "
          onClick={() => {
            setImage({
              type: 'newTab',
              payload: !currentImage || !currentImage.newTab ? true : false,
            });
          }}
          checked={currentImage && currentImage.newTab}
          disabled={!currentImage || currentImage.value === ''}
        />
      )}
    </div>
  );
};
