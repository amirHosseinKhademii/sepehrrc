import { Fragment } from 'react';
import { useUi, useDesign } from 'hooks';
import { DrawerFix } from './drawer-fix';
import { DrawerDynamic } from './drawer-dynamic';

export const Drawer = () => {
  const { uiState } = useUi();
  const { designState } = useDesign();
  const { direction } = designState.pageSettings;
  const DrawerMenu = () => (
    <div
      className={`w-216px h-216px pt-21px pb-35px fixed ${
        direction === 'rtl' ? 'right-0 mr-68px' : 'left-0 ml-68px'
      }
      } top-0  bg-gray_shade-800 z-50 shadow-custom-1`}
    >
      <div className="flex flex-col items-end pr-29px">
        <button className="text-gray_shade-300 pb-20px">مشاهده وب سایت</button>
        <button className="text-gray_shade-300 pb-20px">بنل مدیریت سایت</button>
        <button className="text-gray_shade-300 pb-20px">
          درخواست بشتیبانی
        </button>
        <button className="text-gray_shade-300 "> گزارش مشکل</button>
      </div>
    </div>
  );

  return (
    <Fragment>
      <DrawerFix />
      <DrawerDynamic />
      {uiState.drawer.open && uiState.drawer.type === 'menu' && <DrawerMenu />}
    </Fragment>
  );
};