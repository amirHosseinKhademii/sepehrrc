import { ButtonIcon } from 'components';
import { ICSetting } from 'icons';
import { FC, memo } from 'react';

export const SettingButton: FC<IDrawerFix> = memo(
  ({ toggle, drawer, toggleDrawer }) => (
    <ButtonIcon
      className={toggle(
        'flex flex-col items-center h-81px w-68px py-17px',
        ' bg-gray_shade-900',
        drawer.open && drawer.type === 'settings'
      )}
      onClick={() =>
        toggleDrawer({
          type: 'settings',
          open: drawer.type === 'settings' ? false : true,
        })
      }
    >
      <ICSetting
        className={toggle(
          'fill-current',
          'text-white',
          drawer.open && drawer.type === 'settings',
          'text-gray_shade-300'
        )}
      />
      <span
        className={toggle(
          'text-14px font-light',
          'text-white',
          drawer.open && drawer.type === 'settings',
          'text-gray_shade-300'
        )}
      >
        تنظیمات
      </span>
    </ButtonIcon>
  )
);
