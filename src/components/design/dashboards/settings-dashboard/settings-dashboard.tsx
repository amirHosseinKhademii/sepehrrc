import { Button, DropDown, DrawerLayout } from 'components';
import { ButtonGroupDrawer, HeaderDrawer } from '../common';
import { useDesign } from 'hooks';

export const SettingsDashboard = () => {
  const { onPageSetting, designState } = useDesign();

  const ColorsButtons = () => (
    <div className="flex flex-col px-20px pt-30px">
      <p className="text-right text-white_shade-100 pt-15px">رنگ ها</p>
      <div className="flex justify-between mt-20px">
        <div className="flex flex-col items-center">
          <Button
            className="h-50px mr-10px text-14px w-130px "
            style={{ backgroundColor: designState.pageSettings.secondary }}
            withLabel
            htmlFor="secondary"
          >
            {designState.pageSettings.secondary}
          </Button>
          <input
            type="color"
            id="secondary"
            className="hidden"
            value={designState.pageSettings.secondary}
            onChange={(e) =>
              onPageSetting({ key: 'secondary', value: e.target.value })
            }
          />
          <p className="text-gray_shade-300 pt-8px text-14px">رنگ دوم</p>
        </div>
        <div className="flex flex-col items-center">
          <Button
            className="h-50px mr-10px text-14px w-130px "
            style={{ backgroundColor: designState.pageSettings.primary }}
            withLabel
            htmlFor="primary"
          >
            {designState.pageSettings.primary}
          </Button>
          <input
            type="color"
            id="primary"
            className="hidden"
            value={designState.pageSettings.primary}
            onChange={(e) =>
              onPageSetting({ key: 'primary', value: e.target.value })
            }
          />
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
            options={[
              { id: 'yekanbakh', title: 'یکان بخ' },
              { id: 'iransans', title: 'ایران سنس' },
            ]}
            height="54px"
            onSelect={(value) => onPageSetting({ key: 'titleFont', value })}
            selected={
              designState.pageSettings && designState.pageSettings.titleFont
            }
          />
        </div>
      </div>
      <div className="flex flex-col px-20px pt-30px">
        <p className="text-right  text-white_shade-100 pt-15px text-14px">
          انتخاب فونت نوشته ها
        </p>
        <div className="felx flex-col mt-20px">
          <DropDown
            options={[
              { id: 'yekanbakh', title: 'یکان بخ' },
              { id: 'iransans', title: 'ایران سنس' },
            ]}
            height="54px"
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
