import { Drop } from 'components';
import { FC } from 'react';

interface IDrawerHeader {
  setting?: boolean;
  text?: string;
}
export const HeaderDrawer: FC<IDrawerHeader> = ({
  setting = false,
  text = 'تنظیمات قالب',
}) => {
  return (
    <div className="flex items-center border-b border-gray_shade-800 px-20px pb-16px justify-between">
      <button className="focus:outline-none rounded-full bg-gray_shade-800 px-2 mr-20px text-white_shade-100">
        ؟
      </button>
      {setting ? (
        <p className="text-right text-white_shade-100 pt-10px pb-14px ">
          {text}
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
