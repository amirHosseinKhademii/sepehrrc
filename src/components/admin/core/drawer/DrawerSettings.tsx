import { ButtonGroupDrawer, HeaderDrawer } from 'components';
import { FC } from 'react';
import { Button } from 'components';
import { DropDown } from '../drop-down';

interface IDrawer {
  children?: any;
}
export const DrawerSettings: FC<IDrawer> = () => {
  const ColorsButtons = () => (
    <div className="flex flex-col px-20px pt-30px">
      <p className="text-right text-white_shade-100 pt-15px">رنگ ها</p>
      <div className="flex justify-between mt-20px">
        <div className="flex flex-col items-center">
          <Button className="h-50px bg-alert-900 mr-10px text-14px w-130px ">
            #de4437
          </Button>
          <p className="text-gray_shade-300 pt-8px text-14px">رنگ دوم</p>
        </div>
        <div className="flex flex-col items-center">
          <Button className="h-50px bg-alert-300 text-14px w-130px">
            #de4437
          </Button>
          <p className="text-gray_shade-300 pt-8px text-14px">رنگ اصلی</p>
        </div>
      </div>
    </div>
  );

  const FontDropDowns = () => (
    <>
      <div className="flex flex-col px-20px pt-30px">
        <p className="text-right text-white_shade-100 pt-15px text-14px">
          انتخاب فونت تیتر ها
        </p>
        <div className="felx flex-col mt-20px">
          <DropDown className="h-54px">
            <option>یکان بخ</option>
          </DropDown>
        </div>
      </div>
      <div className="flex flex-col px-20px pt-30px">
        <p className="text-right text-white_shade-100 pt-15px text-14px">
          انتخاب فونت نوشته ها
        </p>
        <div className="felx flex-col mt-20px">
          <DropDown className="h-54px">
            <option>یکان بخ</option>
          </DropDown>
        </div>
      </div>
    </>
  );

  return (
    <div className=" w-310px h-full absolute top-0 right-0 mr-68px bg-gray_shade-900  pt-13px z-50">
      <HeaderDrawer setting />
      <ColorsButtons />
      <FontDropDowns />
      <ButtonGroupDrawer />
    </div>
  );
};
