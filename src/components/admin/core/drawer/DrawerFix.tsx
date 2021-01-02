import { useContext } from 'react';
import { ButtonIcon } from 'components';
import { ICEditAlt, ICPlus, ICSetting, ICMenu, ICMultiply } from 'icons';
import { uiTypes, UIContext } from 'providers/ui-provider';

export const DrawerFix = () => {
  const { uiState, uiDispatch } = useContext(UIContext);

  const toggleMenu = () => {
    uiDispatch({ type: uiTypes.DRAWER_MENU });
  };

  const toggleSections = () => {
    uiDispatch({ type: uiTypes.DRAWER_SECTIONS, payload: true });
  };

  const toggleAdd = () => {
    uiDispatch({ type: uiTypes.DRAWER_ADD, payload: true });
  };

  const toggleSettings = () => {
    uiDispatch({ type: uiTypes.DRAWER_SETTINGS, payload: true });
  };

  return (
    <div className="w-68px h-full absolute right-0 top-0 bg-gray_shade-800 flex flex-col items-center">
      <ButtonIcon
        className="flex justify-center items-center h-82px w-68px py-17px"
        onClick={toggleMenu}
      >
        {uiState.drawer.menu ? <ICMultiply /> : <ICMenu />}
      </ButtonIcon>
      <ButtonIcon
        className="flex flex-col items-center h-81px w-68px py-17px focus:bg-gray_shade-900 "
        onClick={toggleSections}
      >
        <ICEditAlt />
        <span className="text-14px text-gray_shade-300 font-light">بخش ها</span>
      </ButtonIcon>
      <ButtonIcon
        className="flex flex-col items-center h-81px w-68px py-17px focus:bg-gray_shade-900 "
        onClick={toggleAdd}
      >
        <ICPlus />
        <span className=" text-14px text-gray_shade-300 font-light ">
          افزودن
        </span>
      </ButtonIcon>
      <ButtonIcon
        className="flex flex-col items-center h-81px w-68px py-17px focus:bg-gray_shade-900 "
        onClick={toggleSettings}
      >
        <ICSetting />
        <span className=" text-14px text-gray_shade-300 font-light ">
          تنظیمات
        </span>
      </ButtonIcon>
    </div>
  );
};
