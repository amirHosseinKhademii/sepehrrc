import { Text, DropDown, Input } from 'components';
import { useDesign } from 'hooks';

export const DropDownGroup = () => {
  const { setSetting, designState } = useDesign();

  const ShowDrop = () => (
    <div className="w-full col-span-2">
      <Text className="  mt-30px text-14px text-white_shade-100 text-right">
        نمایش بر اساس
      </Text>
      <DropDown
        className="w-full h-54px mt-15px"
        options={[
          { id: 'random', title: ' تصادفی' },
          { id: 'simple', title: 'ساده' },
        ]}
        onSelect={(show) => setSetting({ show })}
        selected={
          designState.current.settings && designState.current.settings.show
        }
      />
    </div>
  );

  const TotalInput = () => (
    <div className="w-full col-span-1">
      <Input
        label="تعداد کل"
        variant="input"
        className=""
        withNumber
        onBlur={(e) => setSetting({ total: e.target.value })}
        placeholder={
          designState.current.settings && designState.current.settings.total
            ? designState.current.settings.total
            : ''
        }
      />
    </div>
  );

  const ColDrop = () => (
    <div className="w-full col-span-1">
      <Text className=" text-14px text-white_shade-100 text-right">
        تعداد ستون
      </Text>
      <DropDown
        className="w-full h-54px mt-15px"
        options={[
          { id: '12', title: ' 12' },
          { id: '1', title: '1' },
        ]}
        onSelect={(col) => setSetting({ col })}
        selected={
          designState.current.settings && designState.current.settings.col
        }
      />
    </div>
  );

  return (
    <div className="w-full grid grid-cols-2 grid-rows-2 gap-30px">
      <ShowDrop />
      <ColDrop />
      <TotalInput />
    </div>
  );
};
