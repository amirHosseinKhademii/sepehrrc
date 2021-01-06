import { Fragment } from 'react';
import { useClass, useUi } from 'hooks';
import { DrawerFix } from './DrawerFix';
import { DrawerDynamic } from './DrawerDynamic';

export const Drawer = () => {
  const { uiState } = useUi();
  const { toggle } = useClass();

  const DrawerMenu = () => (
    <div
      className={toggle(
        'w-216px h-216px pt-21px pb-35px fixed right-0 top-0 mr-68px bg-gray_shade-800 z-50 shadow-custom-1',
        'hidden',
        !uiState.drawer.menu
      )}
    >
      <div className="flex flex-col items-end pr-29px">
        <button className="text-gray_shade-300 pb-20px">مشاهده وب سایت</button>
        <button className="text-gray_shade-300 pb-20px">بنل مدیریت سایت</button>
        <button className="text-gray_shade-300 pb-20px">
          درخواست بشتیبانی
        </button>
        <button className="text-gray_shade-300"> گزارش مشکل</button>
      </div>
    </div>
  );

  return (
    <Fragment>
      <DrawerFix />
      <DrawerDynamic />
      <DrawerMenu />
    </Fragment>
  );
};
