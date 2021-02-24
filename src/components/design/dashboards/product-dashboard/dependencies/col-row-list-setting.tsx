import { Text, DropDown, ButtonGroup } from 'components';
import { useDesign, useDirection } from 'hooks';
import { SettingButton } from '../../common/setting-button';

export const ColRowListSetting = () => {
  const { setSetting, designState } = useDesign();
  const { textAlignRtl, language } = useDirection();
  const { settings } = designState.current;

  const RowDrop = () => (
    <div className="w-full col-span-1">
      <ButtonGroup label="تعداد سطر" groupClass="grid grid-cols-3" className="">
        <SettingButton
          child="4 سطر"
          active={settings && settings.rows && settings.rows == '4'}
          className="rounded-l font-bold"
          onClick={() => setSetting({ rows: '4' })}
        />
        <SettingButton
          child="3 سطر"
          active={settings && settings.rows && settings.rows == '3'}
          className="border-r border-l border-gray_shade-900 font-bold"
          onClick={() => setSetting({ rows: '3' })}
        />
        <SettingButton
          child="2 سطر"
          active={
            (settings && settings.rows && settings.rows == '2') ||
            !settings.rows
          }
          className="rounded-r font-bold"
          onClick={() => setSetting({ rows: '2' })}
        />
      </ButtonGroup>
      {/* <Text
        className={`mb-15px text-14px text-white_shade-100 ${textAlignRtl}`}
      >
        {language.PDRowNumbers}
      </Text>
      <DropDown
        className="w-full h-54px"
        options={[
          { id: '1', title: ' 1' },
          { id: '2', title: '2' },
          { id: '3', title: '3' },
          { id: '4', title: '4' },
        ]}
        onSelect={(rows) => setSetting({ rows })}
        selected={
          designState.current.settings && designState.current.settings.rows
            ? designState.current.settings.rows
            : '1'
        }
        defaultValue="1"
      /> */}
    </div>
  );

  const ColDrop = () => (
    <div className="w-full col-span-1">
      <ButtonGroup
        label="نمایش به صورت"
        groupClass="grid grid-cols-3"
        className="mt-30px"
      >
        <SettingButton
          child="5 ستون"
          active={settings && settings.cols && settings.cols == '5'}
          className="rounded-l font-bold"
          onClick={() => setSetting({ cols: '5' })}
        />
        <SettingButton
          child="4 ستون"
          active={settings && settings.cols && settings.cols == '4'}
          className="border-r border-l border-gray_shade-900 font-bold"
          onClick={() => setSetting({ cols: '4' })}
        />
        <SettingButton
          child="3 ستون"
          active={
            (settings && settings.cols && settings.cols == '3') ||
            !settings.cols
          }
          className="rounded-r font-bold"
          onClick={() => setSetting({ cols: '3' })}
        />
      </ButtonGroup>
      {/* <Text
        className={`mb-15px text-14px text-white_shade-100 ${textAlignRtl}`}
      >
        {language.PDColumnNumbers}
      </Text>
      <DropDown
        className="w-full h-54px"
        options={[
          { id: '3', title: '3' },
          { id: '4', title: ' 4' },
        ]}
        onSelect={(cols) => setSetting({ cols })}
        selected={
          designState.current.settings && designState.current.settings.cols
            ? designState.current.settings.cols
            : '4'
        }
      /> */}
    </div>
  );

  return (
    <div className="w-full grid grid-cols-1 grid-rows-1 gap-x-30px ">
      <RowDrop />
      <ColDrop />
    </div>
  );
};
