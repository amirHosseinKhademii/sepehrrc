import { Text, DropDown } from 'components';
import { useDesign } from 'hooks';

export const ShowDrop = () => {
  const { setSetting, designState } = useDesign();

  return (
    <div className="w-full  gap-30px">
      <div className="w-full">
        <Text className="  mt-30px text-14px text-white_shade-100 text-right">
          نمایش بر اساس
        </Text>
        <DropDown
          className="w-full h-54px mt-15px"
          options={[
            { id: 'new', title: '   جدیدترین محصولات' },
            { id: 'simple', title: 'ساده' },
          ]}
          onSelect={(show) => setSetting({ show })}
          selected={
            designState.current.settings && designState.current.settings.show
          }
        />
      </div>
    </div>
  );
};
