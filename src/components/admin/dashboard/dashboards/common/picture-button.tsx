import { FC } from 'react';
import { useDesign } from 'hooks';
import { ICPlus } from 'icons';

export const PictureButton: FC<{
  withAdd?: boolean;
  picture?: any;
  number?: any;
}> = ({ withAdd, picture, number }) => {
  const { setSetting, setPureImage } = useDesign();
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
          setSetting({ imageSetting: true, number, isBackground: false })
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
