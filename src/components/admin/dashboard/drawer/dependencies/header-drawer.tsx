//import { Drop } from 'components';
import { FC } from 'react';
import { DropDown } from 'components';
import { useDesign } from 'hooks';

interface IDrawerHeader {
  setting?: boolean;
  text?: string;
}
export const HeaderDrawer: FC<IDrawerHeader> = ({
  setting = false,
  text = 'تنظیمات قالب',
}) => {
  const { onPageKey, designState } = useDesign();

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
          selected={designState.pageKey}
          onSelect={(payload) => onPageKey(payload)}
          options={[
            { id: 'main', title: 'صفحه اصلی سایت' },
            { id: 'products', title: 'صفحه  محصول' },
            { id: 'archive', title: 'صفحه  آرشیو محصولات' },
            { id: 'news', title: 'صفحه خبر وبلاگ' },
            { id: 'news-archive', title: 'صفحه آرشیو اخبار وبلاگ ' },
            { id: 'questions', title: 'صفحه  سوالات متداول  ' },
            { id: 'contact-us', title: 'صفحه   تماس با ما ' },
            { id: 'about-us', title: 'صفحه   درباره ما ' },
          ]}
        />
      )}
    </div>
  );
};
