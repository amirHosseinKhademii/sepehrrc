import { Text, DropDown, Input } from 'components';
import { useDesign } from 'hooks';

export const DropDownGroup = () => {
  const { setSetting, designState } = useDesign();

  // const ShowDrop = () => (
  //   <div className="w-full col-span-2">
  //     <Text className="  mt-30px text-14px text-white_shade-100 text-right">
  //       نمایش بر اساس
  //     </Text>
  //     <DropDown
  //       className="w-full h-54px mt-15px"
  //       options={[
  //         { id: 'random', title: ' تصادفی' },
  //         { id: 'simple', title: 'ساده' },
  //       ]}
  //       onSelect={(show) => setSetting({ show })}
  //       selected={
  //         designState.current.settings && designState.current.settings.show
  //       }
  //     />
  //   </div>
  // );

  // const TotalInput = () => (
  //   <div className="w-full col-span-1">
  //     <Input
  //       label="تعداد کل"
  //       variant="input"
  //       className=""
  //       withNumber
  //       onBlur={(e) => setSetting({ total: e.target.value })}
  //       placeholder={
  //         designState.current.settings && designState.current.settings.total
  //           ? designState.current.settings.total
  //           : ''
  //       }
  //     />
  //   </div>
  // );

  const ColDrop = () => (
    <div className="w-full col-span-2">
      <Text className="mt-30px text-14px text-white_shade-100 text-right">
        تعداد ستون
      </Text>
      <DropDown
        className="w-full h-54px mt-15px"
        options={[
          { id: '4', title: '4' },
          { id: '6', title: '6' },
        ]}
        onSelect={(col) => setSetting({ col })}
        selected={
          designState.current.settings && designState.current.settings.col
            ? designState.current.settings.col
            : '4'
        }
      />
    </div>
  );

  return (
    <div className="w-full grid grid-cols-2 mb-25px">
      <ColDrop />
    </div>
  );
};
