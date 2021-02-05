import { FC } from 'react';
import { SketchPicker } from 'react-color';
import { Text } from 'components';

export const ColorPicker: FC<IColorPicker> = ({ value, onChange, label }) => {
  return (
    <div className="w-full flex flex-col items-center text-white_shade-100">
      {label && <Text className="mb-6px">{label}</Text>}
      <SketchPicker color={value} onChangeComplete={onChange} width="100%" />
    </div>
  );
};
