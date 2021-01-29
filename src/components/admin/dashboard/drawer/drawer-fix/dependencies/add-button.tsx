import { ButtonIcon } from 'components';
import { ICPlus } from 'icons';
import { FC, memo } from 'react';

export const AddButton: FC<IDrawerFix> = memo(
  ({ toggle, drawer, toggleDrawer }) => (
    <ButtonIcon
      className={toggle(
        'flex flex-col items-center h-81px w-68px py-17px',
        ' bg-gray_shade-900',
        drawer.open && drawer.type === 'add'
      )}
      onClick={() => toggleDrawer({ type: 'add', open: true })}
    >
      <ICPlus
        className={toggle(
          'fill-current',
          'text-white',
          drawer.open && drawer.type === 'add',
          'text-gray_shade-300'
        )}
      />
      <span
        className={toggle(
          'text-14px font-light',
          'text-white',
          drawer.open && drawer.type === 'add',
          'text-gray_shade-300'
        )}
      >
        افزودن
      </span>
    </ButtonIcon>
  )
);
