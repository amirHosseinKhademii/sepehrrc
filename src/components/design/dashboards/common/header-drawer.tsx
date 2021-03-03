//import { Drop } from 'components';
import { FC } from 'react';
import { DropDown } from 'components';
import { useDesign, useDirection } from 'hooks';

interface IDrawerHeader {
  setting?: boolean;
  text?: string;
}
export const HeaderDrawer: FC<IDrawerHeader> = ({ setting = false, text }) => {
  const { onPageSetting, designState } = useDesign();
  const { marginRtl, textAlignRtl, flexDirection, language } = useDirection();
  text = text ? text : language.DThemeSettings;
  return (
    <div
      className={`flex ${flexDirection} items-center border-b border-gray_shade-800 px-20px pb-17px justify-between`}
    >
      {setting ? (
        <p className={`${textAlignRtl} text-white_shade-100 pt-10px pb-14px `}>
          {text}
        </p>
      ) : (
        <DropDown
          height="50px"
          selected={designState.pageSettings && designState.pageSettings.key}
          onSelect={(value) => onPageSetting({ key: 'key', value })}
          options={[
            { id: 'main', title: language.DMainPage },
            { id: 'products', title: language.DProductPage },
            { id: 'archive', title: language.DProductArchivePage },
            { id: 'news', title: language.DBlogNewsPage },
            { id: 'news-archive', title: language.DBlogArchivePage },
            { id: 'questions', title: language.DFaqPage },
            { id: 'contact-us', title: language.DContactUS },
            { id: 'about-us', title: language.DAboutUS },
          ]}
        />
      )}
      <button
        className={`align-middle focus:outline-none rounded-full bg-gray_shade-800 px-2 ${marginRtl}-20px text-white_shade-100`}
      >
        ؟
      </button>
    </div>
  );
};
