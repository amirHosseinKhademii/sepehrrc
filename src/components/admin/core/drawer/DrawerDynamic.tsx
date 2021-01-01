import { FC, Fragment, useContext } from 'react';
import { DrawerSections } from './DrawerSections';
import { UIContext } from 'providers/ui-provider';

interface IDrawer {
  children?: any;
}
export const DrawerDynamic: FC<IDrawer> = () => {
  const { uiState, uiDispatch } = useContext(UIContext);
  return <Fragment>{uiState.drawer.sections && <DrawerSections />}</Fragment>;
};
