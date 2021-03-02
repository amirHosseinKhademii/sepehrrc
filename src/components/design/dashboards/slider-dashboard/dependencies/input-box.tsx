import { Fragment } from 'react';
import { useDesign, useDirection, useUi } from 'hooks';
import { Input, CheckBox, Text } from 'components';

export const InputBox = () => {
  const { designState, setImageSetting } = useDesign();
  const { uiState } = useUi();
  const { language } = useDirection();
  const { current } = designState;
  const { number } = uiState.setting;
  const currentImage =
    current.images && current.images.find((item) => item.number == number);

  return (
    <Fragment>
      <Input
        label={language.SDImageTitle}
        className="mt-25px"
        variant="input"
        onBlur={(e) =>
          setImageSetting({ key: 'title', value: e.target.value, number })
        }
        placeholder={
          currentImage && currentImage.title
            ? currentImage.title
            : `${language.SDWriteTitleHere}`
        }
      />
      <Input
        label={language.SDImageExplainations}
        className="mt-25px"
        variant="textArea"
        onBlur={(e) =>
          setImageSetting({ value: e.target.value, key: 'description', number })
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
        onBlur={(e) =>
          setImageSetting({ key: 'link', value: e.target.value, number })
        }
      />
      <CheckBox
        label={language.SDOpenNewTab}
        className="mt-15px"
        onClick={() => {
          setImageSetting({
            key: 'newTab',
            value: !currentImage || !currentImage.newTab ? true : false,
            number,
          });
        }}
        checked={currentImage && currentImage.newTab}
      />
    </Fragment>
  );
};
