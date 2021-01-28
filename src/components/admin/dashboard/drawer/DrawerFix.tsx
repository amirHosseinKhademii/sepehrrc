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
import { useClass, useUi, useDesign } from 'hooks';
import { Fragment } from 'react';

export const DrawerFix = () => {
  const { toggle } = useClass();
  const {
    uiState,
    toggleAddDrawer,
    toggleMenu,
    toggleSectionsDrawer,
    toggleSettingsDrawer,
  } = useUi();
  const { designState, setSetting } = useDesign();

  const handleClickBackButton = () => {
    toggleSectionsDrawer();
    if (designState.current.type === 'slider')
      setSetting({ imageSetting: false });
  };

  const BackButton = () => (
    <ButtonIcon
      className="flex justify-center items-center h-82px w-68px py-17px"
      onClick={() => handleClickBackButton()}
    >
      <ICArrowRight />
    </ButtonIcon>
  );

  const MenuButton = () => (
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
  );

  const SectionButton = () => (
    <ButtonIcon
      className={toggle(
        'flex flex-col items-center h-81px w-68px py-17px',
        ' bg-gray_shade-900',
        uiState.drawer.sections
      )}
      onClick={() => toggleSectionsDrawer()}
    >
      <ICEditAlt
        className={toggle(
          'fill-current',
          'text-white',
          uiState.drawer.sections,
          'text-gray_shade-300'
        )}
      />
      <span
        className={toggle(
          'text-14px font-light',
          'text-white',
          uiState.drawer.sections,
          'text-gray_shade-300'
        )}
      >
        بخش ها
      </span>
    </ButtonIcon>
  );

  const AddButton = () => (
    <ButtonIcon
      className={toggle(
        'flex flex-col items-center h-81px w-68px py-17px',
        ' bg-gray_shade-900',
        uiState.drawer.add
      )}
      onClick={() => toggleAddDrawer()}
    >
      <ICPlus
        className={toggle(
          'fill-current',
          'text-white',
          uiState.drawer.add,
          'text-gray_shade-300'
        )}
      />
      <span
        className={toggle(
          'text-14px font-light',
          'text-white',
          uiState.drawer.add,
          'text-gray_shade-300'
        )}
      >
        افزودن
      </span>
    </ButtonIcon>
  );

  const SettingButton = () => (
    <ButtonIcon
      className={toggle(
        'flex flex-col items-center h-81px w-68px py-17px',
        ' bg-gray_shade-900',
        uiState.drawer.settings
      )}
      onClick={() => toggleSettingsDrawer()}
    >
      <ICSetting
        className={toggle(
          'fill-current',
          'text-white',
          uiState.drawer.settings,
          'text-gray_shade-300'
        )}
      />
      <span
        className={toggle(
          'text-14px font-light',
          'text-white',
          uiState.drawer.settings,
          'text-gray_shade-300'
        )}
      >
        تنظیمات
      </span>
    </ButtonIcon>
  );

  const LogoButton = () => (
    <ButtonIcon className="flex flex-col items-center absolute bottom-0 focus:outline-none">
      <ICLogo className="h-36px w-36px " />
      <span className="uppercase text-gray_shade-300 mt-10px mb-20px ml-auto mr-auto w-36px text-sm font-lato ">
        sepehr v2.1
      </span>
    </ButtonIcon>
  );

  return (
    <div className="w-68px h-full fixed right-0 top-0 bg-gray_shade-800 flex flex-col items-center z-50">
      {uiState.drawer.style ? (
        <BackButton />
      ) : (
        <Fragment>
          <MenuButton />
          <SectionButton />
          <AddButton />
          <SettingButton />
        </Fragment>
      )}
      <LogoButton />
    </div>
  );
};
