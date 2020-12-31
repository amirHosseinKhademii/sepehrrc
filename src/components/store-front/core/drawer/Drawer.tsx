import { Fragment } from 'react';
import { DrawerMenu } from './DrawerMenu';
import { FixDrawer } from './FixDrawer';

export const Drawer = () => {
  return (
    <Fragment>
      <FixDrawer />
      <DrawerMenu />
    </Fragment>
  );
};
