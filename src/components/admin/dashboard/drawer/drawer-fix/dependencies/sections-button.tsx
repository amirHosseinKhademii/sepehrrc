import { ButtonIcon } from 'components';
import { ICEditAlt } from 'icons';
import { FC, memo } from 'react';

export const SectionButton: FC<IDrawerFix> = memo(
  ({ toggle, drawer, toggleDrawer }) => (
    <ButtonIcon
      className={toggle(
        'flex flex-col items-center h-81px w-68px py-17px',
        ' bg-gray_shade-900',
        drawer.type === 'sections' && drawer.open
      )}
      onClick={() =>
        toggleDrawer({
          type: 'sections',
          open: drawer.type === 'sections' ? false : true,
        })
      }
    >
      <ICEditAlt
        className={toggle(
          'fill-current',
          'text-white',
          drawer.type === 'sections' && drawer.open,
          'text-gray_shade-300'
        )}
      />
      <span
        className={toggle(
          'text-14px font-light',
          'text-white',
          drawer.type === 'sections' && drawer.open,
          'text-gray_shade-300'
        )}
      >
        بخش ها
      </span>
    </ButtonIcon>
  )
);
