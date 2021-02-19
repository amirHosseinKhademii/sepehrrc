import { useClass, useDesign, useDirection } from 'hooks';
import { Input, CheckBox, Switch, Label } from 'components';
import { FC } from 'react';
import { ButtonImage } from './button-image';

export const GenericUploader: FC<IGenericUploader> = ({
  label,
  number = 'one',
  withNewTab,
  withLink,
  className,
  isBackground,
  withSwitch,
}) => {
  const { textAlignRtl } = useDirection();
  const { join } = useClass();
  const {
    setPureImage,
    designState,
    setImage,
    setSetting,
    deleteImage,
  } = useDesign();
  const { current } = designState;
  const { settings } = current;
  const currentImage =
    current.images && current.images.find((item) => item.number == number);
  const showCondition = isBackground ? settings.backgroundImage : currentImage;

  return (
    <div className={join('w-full', className)}>
      {label && <Label className="mb-14px">{label}</Label>}
      {withSwitch && (
        <Switch
          className=""
          label="توصیر زمینه"
          onClick={() =>
            setSetting({ backgroundImage: !settings.backgroundImage })
          }
          checked={settings.backgroundImage}
        />
      )}
      {withSwitch ? (
        showCondition && (
          <ButtonImage
            setPureImage={setPureImage}
            isBackground={isBackground}
            number={number}
            settings={settings}
            setSetting={setSetting}
            showCondition={showCondition}
            deleteImage={deleteImage}
            currentImage={currentImage}
            className="mt-30px"
          />
        )
      ) : (
        <ButtonImage
          setPureImage={setPureImage}
          isBackground={isBackground}
          number={number}
          settings={settings}
          setSetting={setSetting}
          showCondition={showCondition}
          deleteImage={deleteImage}
          currentImage={currentImage}
          className=""
        />
      )}

      {withLink && showCondition && (
        <Input
          withLink
          variant="inputIcon"
          className="mt-15px"
          placeholder={
            currentImage && currentImage.link ? currentImage.link : ''
          }
          onBlur={(event) => {
            setImage({ key: 'link', payload: event.target.value });
          }}
          disabled={!currentImage || currentImage.value === ''}
        />
      )}
      {withNewTab && showCondition && (
        <CheckBox
          className="mt-15px"
          label="باز کردن صفحه در تب جدید "
          onClick={() => {
            setImage({
              key: 'newTab',
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
