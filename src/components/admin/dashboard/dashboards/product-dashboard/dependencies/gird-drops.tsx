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
          { id: '1', title: ' 1' },
          { id: '2', title: '2' },
          { id: '3', title: ' 3' },
          { id: '4', title: '4' },
        ]}
        onSelect={(rows) => setSetting({ rows })}
        selected={
          designState.current.settings && designState.current.settings.rows
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
          { id: '2', title: '2' },
          { id: '3', title: '3' },
          { id: '4', title: ' 4' },
          { id: '6', title: '6' },
          { id: '12', title: ' 12' },
        ]}
        onSelect={(cols) => setSetting({ cols })}
        selected={
          designState.current.settings && designState.current.settings.cols
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
