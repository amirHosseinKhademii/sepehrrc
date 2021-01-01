import { DropDown } from 'components';

export const HeaderDrawer = () => {
  return (
    <div className="flex items-center border-b border-gray_shade-800 pb-10px px-20px">
      <button className="rounded-full bg-gray_shade-800 px-2 mr-20px text-white_shade-100">
        ؟
      </button>
      <DropDown>
        <option className="text-14px">صفحه اصلی سایت</option>
      </DropDown>
    </div>
  );
};
