import { Text, DropDown } from 'components';
import { useDesign } from 'hooks';

export const GridDrops = () => {
  const { setSetting, designState } = useDesign();

  const RowDrop = () => (
    <div className="w-full col-span-1">
      <Text className=" text-14px text-white_shade-100 text-right">
        تعداد سطر
      </Text>
      <DropDown
        className="w-full h-54px mt-15px"
        options={[
          { id: '12', title: ' 12' },
          { id: '1', title: '1' },
        ]}
        onSelect={(row) => setSetting({ row })}
        selected={
          designState.current.settings && designState.current.settings.row
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
    <div className="w-full grid grid-cols-2 grid-rows-1 gap-x-30px mt-30px">
      <ColDrop />
      <RowDrop />
    </div>
  );
};
