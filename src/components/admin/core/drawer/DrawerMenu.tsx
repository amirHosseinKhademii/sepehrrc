import { useContext } from 'react';
import { UIContext } from 'providers/ui-provider';

export const DrawerMenu = () => {
  const { uiState } = useContext(UIContext);

  return (
    <div
      className={`w-216px h-216px pt-21px pb-35px absolute right-0 top-0 mr-68px bg-gray_shade-800 z-50 ${
        uiState.drawer.menu ? 'block' : 'hidden'
      }`}
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
};
