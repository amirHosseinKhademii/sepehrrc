import { Text, DropDown, Input } from 'components';
import { useDesign } from 'hooks';

export const SliderDrops = () => {
  const { setSetting, designState } = useDesign();
  const { settings } = designState.current;

  const TotalItems = () => (
    <div className="w-full col-span-1">
      <Text className="mb-15px text-14px text-white_shade-100 text-right">
        تعداد کل
      </Text>
      <Input
        className="w-full"
        withNumber
        onBlur={(event) => {
          setSetting({ totalItems: event.target.value });
        }}
        placeholder={settings?.totalItems ? settings.totalItems : ''}
      />
    </div>
  );

  const ColDrop = () => (
    <div className="w-full col-span-1">
      <Text className="mb-15px text-14px text-white_shade-100 text-right">
        تعداد ستون
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
      />
    </div>
  );

  return (
    <div className="w-full grid grid-cols-2 grid-rows-1 gap-x-30px  mb-30px">
      <ColDrop />
      <TotalItems />
    </div>
  );
};