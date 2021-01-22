import { ICPlus } from 'icons';
import { FC } from 'react';
import { Text } from 'components';

export const ImageButtons = () => {
  const PictureButton: FC<{
    withPicture?: boolean;
    withAdd?: boolean;
    picture?: any;
  }> = ({ withPicture, withAdd, picture }) => {
    if (withAdd)
      return (
        <div className="w-full h-full flex justify-center items-center rounded bg-gray_shade-800 cursor-pointer ">
          <ICPlus fill="#fff" />
        </div>
      );
    else if (withPicture)
      return <img className="w-60px h-60px rounded  " src={picture} />;
    else
      return (
        <div className="w-full h-full rounded bg-gray_shade-800 opacity-30"></div>
      );
  };

  return (
    <div className="w-full felx flex-col mt-26px ">
      <Text className=" mb-6px text-14px text-white_shade-100 text-right">
        تصاویر لوگو ها
      </Text>
      <div className="w-full h-130px grid grid-cols-4 grid-rows-2 gap-10px">
        <PictureButton />
        <PictureButton />
        <PictureButton />
        <PictureButton withAdd />
        <PictureButton />
        <PictureButton />
        <PictureButton />
        <PictureButton />
      </div>
    </div>
  );
};
