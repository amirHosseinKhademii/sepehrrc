import { DropDown, Drop } from 'components';

interface IDrawerHeader {
  setting?: boolean;
}
export const HeaderDrawer = ({ setting = false }) => {
  return (
    <div className="flex items-center border-b border-gray_shade-800 px-20px pb-16px justify-between">
      <button className="focus:outline-none rounded-full bg-gray_shade-800 px-2 mr-20px text-white_shade-100">
        ؟
      </button>
      {setting ? (
        <p className="text-right text-white_shade-100 pt-10px pb-14px ">
          تنظیمات قالب
        </p>
      ) : (
        <Drop
          options={[
            'صفحه اصلی سایت',
            'صفحه آرشیو محصولات',
            'صفحه خبر وبلاگ',
            'صفحه آرشیو اخبار وبلاگ',
            'صفحه سوالات متداول',
            'صفحه تماس با ما',
            'صفحه درباره ما',
          ]}
        />
        // <DropDown className="h-50px">
        //   <option className="text-14px">صفحه اصلی سایت</option>
        // </DropDown>
      )}
    </div>
  );
};
