import { useContext } from 'react';
import { ButtonIcon } from 'components';
import { ICEditAlt, ICPlus, ICSetting, ICMenu, ICMultiply } from 'icons';
import { uiTypes, UIContext } from 'providers/ui-provider';

export const DrawerFix = () => {
  const { uiState, uiDispatch } = useContext(UIContext);

  const toggleMenu = () => {
    uiDispatch({ type: uiTypes.DRAWER_MENU });
    uiDispatch({ type: uiTypes.DRAWER_CLOSE });
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
    <div className="w-68px h-full fixed right-0 top-0 bg-gray_shade-800 flex flex-col items-center z-50">
      <ButtonIcon
        className="flex justify-center items-center h-82px w-68px py-17px"
        onClick={toggleMenu}
      >
        {uiState.drawer.menu ? <ICMultiply /> : <ICMenu />}
      </ButtonIcon>
      <ButtonIcon
        className="flex flex-col items-center h-81px w-68px py-17px focus:bg-gray_shade-900"
        onClick={toggleSections}
      >
        <ICEditAlt
          className={`fill-current  ${
            uiState.drawer.sections ? 'text-white' : 'text-gray_shade-300'
          }`}
        />
        <span
          className={`text-14px font-light ${
            uiState.drawer.sections ? 'text-white' : 'text-gray_shade-300'
          }`}
        >
          بخش ها
        </span>
      </ButtonIcon>
      <ButtonIcon
        className="flex flex-col items-center h-81px w-68px py-17px focus:bg-gray_shade-900 "
        onClick={toggleAdd}
      >
        <ICPlus
          className={`fill-current  ${
            uiState.drawer.add ? 'text-white' : 'text-gray_shade-300'
          }`}
        />
        <span
          className={`text-14px font-light ${
            uiState.drawer.add ? 'text-white' : 'text-gray_shade-300'
          }`}
        >
          افزودن
        </span>
      </ButtonIcon>
      <ButtonIcon
        className="flex flex-col items-center h-81px w-68px py-17px focus:bg-gray_shade-900 "
        onClick={toggleSettings}
      >
        <ICSetting
          className={`fill-current  ${
            uiState.drawer.settings ? 'text-white' : 'text-gray_shade-300'
          }`}
        />
        <span
          className={`text-14px font-light ${
            uiState.drawer.settings ? 'text-white' : 'text-gray_shade-300'
          }`}
        >
          تنظیمات
        </span>
      </ButtonIcon>
    </div>
  );
};
