import { Text, DropDown, Input, ButtonGroup } from 'components';
import { useDesign, useDirection } from 'hooks';
import { SettingButton } from '../../common/setting-button';

export const ColSliderSetting = () => {
  const { setSetting, designState } = useDesign();
  const { settings } = designState.current;
  const { textAlignRtl, language } = useDirection();

  const TotalItems = () => (
    <div className="w-full col-span-1">
      <Text
        className={`mb-15px text-14px text-white_shade-100 ${textAlignRtl}`}
      >
        {language.PDTotalNumbers}
      </Text>
      <Input
        className="w-full"
        withNumber
        onBlur={(event) => {
          setSetting({ total: event.target.value });
        }}
        placeholder={settings?.total ? settings.total : ''}
      />
    </div>
  );

  const ColDrop = () => (
    <div className="w-full col-span-2">
      <ButtonGroup
        label="نمایش به صورت"
        groupClass="grid grid-cols-3"
        className=""
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
    </div>
    // <div className="w-full col-span-2">
    //   <Text
    //     className={`mb-15px text-14px text-white_shade-100 ${textAlignRtl}`}
    //   >
    //     {language.PDColumnNumbers}
    //   </Text>
    //   <DropDown
    //     className="w-full h-54px"
    //     options={[
    //       { id: '3', title: '3' },
    //       { id: '4', title: ' 4' },
    //     ]}
    //     onSelect={(cols) => setSetting({ cols })}
    //     selected={
    //       designState.current.settings && designState.current.settings.cols
    //         ? designState.current.settings.cols
    //         : '4'
    //     }
    //   />
    // </div>
  );

  return (
    <div className="w-full grid grid-cols-2 grid-rows-1 gap-x-30px  mb-30px">
      <ColDrop />
      {/* <TotalItems /> */}
    </div>
  );
};
