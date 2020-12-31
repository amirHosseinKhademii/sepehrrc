import { ButtonIcon } from 'components';
import { ICEditAlt, ICPlus, ICSetting, ICMenu } from 'icons';

export const BaseDrawer = () => {
  return (
    <div className="w-68px h-full absolute right-0 top-0 bg-clr_gray_shade-800  flex flex-col pt-30px pb-20px px-10px items-center">
      <ButtonIcon className="flex flex-col items-center">
        <ICMenu className="mb-45px" />
      </ButtonIcon>
      <ButtonIcon className="flex flex-col items-center">
        <ICEditAlt className=" mb-10px" />
        <span className=" text-14px text-clr_gray_shade-300 font-light mb-10px">
          بخش ها
        </span>
      </ButtonIcon>
      <ButtonIcon className="flex flex-col items-center">
        <ICPlus className="mt-7px" />
        <span className=" text-14px text-clr_gray_shade-300 font-light my-10px">
          افزودن
        </span>
      </ButtonIcon>
      <ButtonIcon className="flex flex-col items-center">
        <ICSetting className="mt-7px" />
        <span className=" text-14px text-clr_gray_shade-300 font-light my-10px">
          تنظیمات
        </span>
      </ButtonIcon>
    </div>
  );
};
