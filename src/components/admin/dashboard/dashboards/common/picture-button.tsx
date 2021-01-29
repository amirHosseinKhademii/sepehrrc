import { FC } from 'react';
import { useDesign, useUi } from 'hooks';
import { ICPlus } from 'icons';

export const PictureButton: FC<IPictureButton> = ({
  withAdd,
  picture,
  number,
}) => {
  const { setSetting, setPureImage } = useDesign();
  const { toggleSettingState } = useUi();

  if (withAdd)
    return (
      <div
        onClick={() =>
          setPureImage({ onUpload: true, number, isBackground: false })
        }
        className="w-full h-60px flex justify-center items-center rounded bg-gray_shade-800 cursor-pointer "
      >
        <ICPlus fill="#fff" />
      </div>
    );
  else if (picture)
    return (
      <img
        onClick={() =>
          toggleSettingState({ type: 'picture', number, open: true })
        }
        className="w-full h-60px rounded cursor-pointer"
        src={picture}
      />
    );
  else
    return (
      <div className="h-60px flex rounded bg-gray_shade-800 opacity-30"></div>
    );
};
