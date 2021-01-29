import { ButtonIcon } from 'components/admin/dashboard/button';
import { ICMenu, ICMultiply } from 'icons';
import { FC, memo } from 'react';

export const MenuButton: FC<IDrawerFix> = memo(({ toggleDrawer, drawer }) => (
  <ButtonIcon
    className="flex justify-center items-center h-82px w-68px py-17px"
    onClick={() => toggleDrawer({ type: 'menu' })}
  >
    {drawer.type === 'menu' && drawer.open ? (
      <ICMultiply fill="white" />
    ) : (
      <ICMenu fill="white" />
    )}
  </ButtonIcon>
));
