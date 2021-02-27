import { Fragment } from 'react';
import { useDesign, useDirection } from 'hooks';
import { Input, CheckBox, Text } from 'components';

export const InputBox = () => {
  const { designState, setImage } = useDesign();
  const { language } = useDirection();
  const { current } = designState;
  const { number } = designState.current.settings;
  const currentImage =
    current.images && current.images.find((item) => item.number == number);

  return (
    <Fragment>
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
            payload: !currentImage || !currentImage.newTab ? true : false,
          });
        }}
        checked={currentImage && currentImage.newTab}
      />
    </Fragment>
  );
};
