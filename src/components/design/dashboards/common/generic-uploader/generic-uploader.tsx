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
  const { textAlignRtl, language } = useDirection();
  const { join } = useClass();
  const {
    setPureImage,
    designState,
    setImageSetting,
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
          label={language.DCBackground}
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
            withSwitch={withSwitch}
            className="mt-14px"
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
          withSwitch={withSwitch}
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
          onBlur={(e) =>
            setImageSetting({ key: 'link', value: e.target.value, number })
          }
          disabled={!currentImage || currentImage.value === ''}
        />
      )}
      {withNewTab && showCondition && (
        <CheckBox
          className="mt-15px"
          label={language.DCOpenInNewTab}
          onClick={() => {
            setImageSetting({
              key: 'newTab',
              value: !currentImage || !currentImage.newTab ? true : false,
              number,
            });
          }}
          checked={currentImage && currentImage.newTab}
          disabled={!currentImage || currentImage.value === ''}
        />
      )}
    </div>
  );
};
