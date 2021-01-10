//import { Drop } from 'components';
import { FC } from 'react';
import { DropDown } from 'components';

interface IDrawerHeader {
  setting?: boolean;
  text?: string;
}
export const HeaderDrawer: FC<IDrawerHeader> = ({
  setting = false,
  text = 'تنظیمات قالب',
}) => {
  return (
    <div className="flex items-center border-b border-gray_shade-800 px-20px pb-17px justify-between">
      <button className="focus:outline-none rounded-full bg-gray_shade-800 px-2 mr-20px text-white_shade-100">
        ؟
      </button>
      {setting ? (
        <p className="text-right text-white_shade-100 pt-10px pb-14px ">
          {text}
        </p>
      ) : (
        <DropDown
          className="h-50px"
          defaultValue="صفحه اصلی سایت"
          options={[
            { id: 'main-page', title: 'صفحه اصلی سایت' },
            { id: 'main-page', title: 'صفحه  محصول' },
            { id: 'main-page', title: 'صفحه  آرشیو محصولات' },
            { id: 'main-page', title: 'صفحه خبر وبلاگ' },
            { id: 'main-page', title: 'صفحه آرشیو اخبار وبلاگ ' },
            { id: 'main-page', title: 'صفحه  سوالات متداول  ' },
            { id: 'main-page', title: 'صفحه   تماس با ما ' },
            { id: 'main-page', title: 'صفحه   درباره ما ' },
          ]}
        />
      )}
    </div>
  );
};
