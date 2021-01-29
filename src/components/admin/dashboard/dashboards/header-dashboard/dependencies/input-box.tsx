import { useDesign } from 'hooks';
import { Text, Input } from 'components';

export const InputBox = ({ label, placeholder, type }) => {
  const { designState, setProps } = useDesign();
  const currentStyle = designState.current.settings.style;

  if (
    type === 'tel' &&
    currentStyle !== 'first' &&
    currentStyle !== 'second' &&
    currentStyle
  ) {
    return (
      <div className="w-full  mb-30px ">
        <Text className=" mb-14px text-14px text-white_shade-100 text-right">
          {label}
        </Text>

        <Input
          placeholder={placeholder}
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
      <div className="w-full  mb-90px ">
        <Text className=" mb-14px text-14px text-white_shade-100 text-right">
          {label}
        </Text>

        <Input
          maxLength={30}
          placeholder={placeholder}
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
