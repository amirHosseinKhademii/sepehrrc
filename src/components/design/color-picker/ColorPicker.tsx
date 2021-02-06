import { FC, Fragment } from 'react';
import { SketchPicker } from 'react-color';
import { Text } from 'components';

export const ColorPicker: FC<IColorPicker> = ({
  value,
  onChange,
  label,
  onClose,
}) => {
  return (
    <Fragment>
      <div className="w-full flex flex-col items-center text-white_shade-100 z-10  relative">
        {label && <Text className="mb-6px">{label}</Text>}
        <SketchPicker color={value} onChangeComplete={onChange} width="100%" />
      </div>
      <div className="z-0 absolute inset-0  opacity-0" onClick={onClose}></div>
    </Fragment>
  );
};
