import { Fragment } from 'react';
import { useDesign, useDirection, useUi } from 'hooks';
import { Input, CheckBox, Text } from 'components';

export const InputBox = () => {
  const { designState, setImage } = useDesign();
  const { uiState } = useUi();
  const { language } = useDirection();
  const { pureImage, current } = designState;
  const { number } = uiState.setting;
  const currentImage =
    current.images && current.images.find((item) => item.number == number);

  return (
    <Fragment>
      <Input
        label={language.SDImageTitle}
        className="mt-25px"
        variant="input"
        onBlur={(e) => setImage({ key: 'title', payload: e.target.value })}
        placeholder={
          currentImage.title
            ? currentImage.title
            : `${language.SDWriteTitleHere}`
        }
      />
      <Input
        label={language.SDImageExplainations}
        className="mt-25px"
        variant="textArea"
        onBlur={(e) =>
          setImage({ payload: e.target.value, key: 'description' })
        }
        placeholder={
          currentImage && currentImage.description
            ? currentImage.description
            : `${language.SDWriteExplanationsHere}`
        }
      />

      <Text className="mt-25px text-14px text-white_shade-100">
        {language.SDImagelink}
      </Text>
      <Input
        withLink
        placeholder={currentImage && currentImage.link ? currentImage.link : ''}
        variant="inputIcon"
        label={language.SDImagelink}
        className="mt-14px"
        fontFamily="font-lato"
        onBlur={(e) => setImage({ key: 'link', payload: e.target.value })}
      />
      <CheckBox
        label={language.SDOpenNewTab}
        className="mt-15px"
        onClick={() => {
          setImage({
            key: 'newTab',
            // payload: pureImage.newTab ? false : true,
            payload: !currentImage || !currentImage.newTab ? true : false,
          });
        }}
        checked={currentImage && currentImage.newTab}
      />
    </Fragment>
  );
};
