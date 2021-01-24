import { DrawerLayout } from 'components/admin/layouts';
import { HeaderDrawer } from '.';
import { ButtonGroupDrawer, Button, DropDown } from 'components';
import { useDesign } from 'hooks';

export const SettingsDashboard = () => {
  const { onPageSetting, designState } = useDesign();

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
          <DropDown
            options={[{ id: 'yekan', title: 'یکان یخ' }]}
            className="h-58px"
            onSelect={(value) => onPageSetting({ key: 'titleFont', value })}
            selected={
              designState.pageSettings && designState.pageSettings.titleFont
            }
          />
        </div>
      </div>
      <div className="flex flex-col px-20px pt-30px">
        <p className="text-right text-white_shade-100 pt-15px text-14px">
          انتخاب فونت نوشته ها
        </p>
        <div className="felx flex-col mt-20px">
          <DropDown
            options={[{ id: 'yekan', title: 'یکان یخ' }]}
            className="h-58px"
            onSelect={(value) => onPageSetting({ key: 'textFont', value })}
            selected={
              designState.pageSettings && designState.pageSettings.textFont
            }
          />
        </div>
      </div>
    </>
  );
  return (
    <DrawerLayout>
      <HeaderDrawer setting />
      <ColorsButtons />
      <FontDropDowns />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};
