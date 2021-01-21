import { Text, DropDown } from 'components';
import { Input } from 'components/admin/dashboard/input';

export const DropDownGroup = () => {
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
        //    onSelect={(effect) => setSetting({ effect })}
        //    selected={settings && settings.effect}
      />
    </div>
  );

  const TotalInput = () => (
    <div className="w-full col-span-1">
      <Input label="تعداد کل" variant="input" className="" />
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
        //    onSelect={(effect) => setSetting({ effect })}
        //    selected={settings && settings.effect}
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
