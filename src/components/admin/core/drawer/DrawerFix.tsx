import { ButtonIcon } from 'components';
import {
  ICEditAlt,
  ICPlus,
  ICSetting,
  ICMenu,
  ICMultiply,
  ICLogo,
  ICArrowRight,
} from 'icons';
import { useUi } from 'hooks';
import { Fragment } from 'react';

export const DrawerFix = () => {
  const {
    uiState,
    toggleAddDrawer,
    toggleMenu,
    toggleSectionsDrawer,
    toggleSettingsDrawer,
  } = useUi();

  return (
    <div className="w-68px h-full fixed right-0 top-0 bg-gray_shade-800 flex flex-col items-center z-50">
      {uiState.drawer.style ? (
        <ButtonIcon
          className="flex justify-center items-center h-82px w-68px py-17px"
          onClick={() => toggleSectionsDrawer(true)}
        >
          <ICArrowRight />
        </ButtonIcon>
      ) : (
        <Fragment>
          <ButtonIcon
            className="flex justify-center items-center h-82px w-68px py-17px"
            onClick={() => toggleMenu()}
          >
            {uiState.drawer.menu ? (
              <ICMultiply fill="white" />
            ) : (
              <ICMenu fill="white" />
            )}
          </ButtonIcon>
          <ButtonIcon
            className={`flex flex-col items-center h-81px w-68px py-17px ${
              uiState.drawer.sections && ' bg-gray_shade-900'
            }`}
            onClick={() => toggleSectionsDrawer(true)}
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
            className={`flex flex-col items-center h-81px w-68px py-17px ${
              uiState.drawer.add && ' bg-gray_shade-900'
            }`}
            onClick={() => toggleAddDrawer(true)}
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
            className={`flex flex-col items-center h-81px w-68px py-17px ${
              uiState.drawer.settings && ' bg-gray_shade-900'
            }`}
            onClick={() => toggleSettingsDrawer(true)}
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
        </Fragment>
      )}
      <ButtonIcon className="flex flex-col items-center absolute bottom-0 focus:outline-none">
        <ICLogo className="h-36px w-36px " />
        <span className="uppercase text-gray_shade-300 mt-10px mb-20px ml-auto mr-auto w-36px text-sm ">
          sepehr v2.1
        </span>
      </ButtonIcon>
    </div>
  );
};
