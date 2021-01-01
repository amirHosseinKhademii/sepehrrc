import { Fragment } from 'react';
import { DrawerMenu } from './DrawerMenu';
import { DrawerFix } from './DrawerFix';
import { DrawerDynamic } from './DrawerDynamic';

export const Drawer = () => {
  return (
    <Fragment>
      <DrawerFix />
      <DrawerDynamic />
      <DrawerMenu />
    </Fragment>
  );
};
