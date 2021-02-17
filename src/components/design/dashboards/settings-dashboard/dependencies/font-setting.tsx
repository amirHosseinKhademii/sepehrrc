import { DropDown } from 'components';
import { Fragment } from 'react';
import { useDirection } from 'hooks';
export const FontSetting = ({ designState, onPageSetting }) => {
  const { textAlignRtl, language } = useDirection();

  return (
    <Fragment>
      <div className="flex flex-col px-20px pt-30px">
        <p className={`${textAlignRtl} text-white_shade-100 pt-15px text-14px`}>
          {language.DChooseTitlesFont}
        </p>
        <div className="felx flex-col mt-20px">
          <DropDown
            options={[
              { id: 'yekanbakh', title: `${language.DYekanBakh}` },
              { id: 'iransans', title: `${language.DIransans}` },
            ]}
            height="54px"
            onSelect={(value) => onPageSetting({ key: 'titleFont', value })}
            selected={
              designState.pageSettings && designState.pageSettings.titleFont
            }
          />
        </div>
      </div>
      <div className="flex flex-col px-20px pt-30px">
        <p
          className={`${textAlignRtl}  text-white_shade-100 pt-15px text-14px`}
        >
          {language.DChooseTextsFont}
        </p>
        <div className="felx flex-col mt-20px">
          <DropDown
            options={[
              { id: 'yekanbakh', title: `${language.DYekanBakh}` },
              { id: 'iransans', title: `${language.DIransans}` },
            ]}
            height="54px"
            onSelect={(value) => onPageSetting({ key: 'textFont', value })}
            selected={
              designState.pageSettings && designState.pageSettings.textFont
            }
          />
        </div>
      </div>
      <div className="flex flex-col px-20px pt-30px">
        <p
          className={`${textAlignRtl}  text-white_shade-100 pt-15px text-14px`}
        >
          {language.DChooseTheme}
        </p>
        <div className="felx flex-col mt-20px">
          <DropDown
            options={[
              { id: 'default', title: `${language.DDefaultTheme}` },
              { id: 'simple', title: `${language.DSimpleTheme}` },
            ]}
            height="54px"
            onSelect={(value) => onPageSetting({ key: 'theme', value })}
            selected={
              designState.pageSettings && designState.pageSettings.theme
            }
          />
        </div>
      </div>
    </Fragment>
  );
};
