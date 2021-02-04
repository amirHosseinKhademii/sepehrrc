import { DropDown } from 'components';

export const FontSetting = ({ designState, onPageSetting }) => {
  return (
    <>
      <div className="flex flex-col px-20px pt-30px">
        <p className="text-right text-white_shade-100 pt-15px text-14px">
          انتخاب فونت تیتر ها
        </p>
        <div className="felx flex-col mt-20px">
          <DropDown
            options={[
              { id: 'yekanbakh', title: 'یکان بخ' },
              { id: 'iransans', title: 'ایران سنس' },
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
        <p className="text-right  text-white_shade-100 pt-15px text-14px">
          انتخاب فونت نوشته ها
        </p>
        <div className="felx flex-col mt-20px">
          <DropDown
            options={[
              { id: 'yekanbakh', title: 'یکان بخ' },
              { id: 'iransans', title: 'ایران سنس' },
            ]}
            height="54px"
            onSelect={(value) => onPageSetting({ key: 'textFont', value })}
            selected={
              designState.pageSettings && designState.pageSettings.textFont
            }
          />
        </div>
      </div>
    </>
  );
};
