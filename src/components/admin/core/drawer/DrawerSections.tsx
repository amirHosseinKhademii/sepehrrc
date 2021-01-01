import { DropDown, ButtonDrawer } from 'components';
import { FC } from 'react';

interface IDrawer {
  children?: any;
}
export const DrawerSections: FC<IDrawer> = () => {
  return (
    <div className=" w-310px h-full absolute top-0 right-0 mr-68px bg-gray_shade-900  pt-16px">
      <div className="flex items-center border-b border-gray_shade-800 pb-10px px-20px">
        <button className="rounded-full bg-gray_shade-800 px-2 mr-20px text-white_shade-100">
          ؟
        </button>
        <DropDown>
          <option className="text-14px">صفحه اصلی سایت</option>
        </DropDown>
      </div>
      <div className="flex flex-col items-center px-20px pt-30px">
        <ButtonDrawer withSetting text="هدر - استایل ۱" className="mb-25px" />
        <ButtonDrawer
          withSetting
          withDelete
          text="هدر - استایل ۱"
          className="mb-25px"
        />
        <ButtonDrawer
          withSetting
          withDelete
          text="هدر - استایل ۱"
          className="mb-25px"
        />
        <ButtonDrawer
          withSetting
          withDelete
          text="هدر - استایل ۱"
          className="mb-25px"
        />
        <ButtonDrawer
          withSetting
          withDelete
          text="هدر - استایل ۱"
          className="mb-25px"
        />
        <ButtonDrawer
          withSetting
          withDelete
          text="هدر - استایل ۱"
          className="mb-25px"
        />
        <ButtonDrawer
          withSetting
          withDelete
          text="هدر - استایل ۱"
          className="mb-25px"
        />
        <ButtonDrawer withSetting text="هدر - استایل ۱" />
      </div>
    </div>
  );
};
