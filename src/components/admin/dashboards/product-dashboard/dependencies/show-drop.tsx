import { Text, DropDown } from 'components';
import { useDesign } from 'hooks';

export const ShowDrop = () => {
  const { setSetting, designState } = useDesign();

  return (
    <div className="w-full  gap-30px">
      <div className="w-full">
        <Text className="mt-30px mb-15px text-14px text-white_shade-100 text-right">
          نمایش بر اساس
        </Text>
        <DropDown
          className="w-full h-54px"
          options={[
            { id: 'all', title: 'همه' },
            { id: 'newests', title: '   جدیدترین محصولات' },
            { id: 'bestSellers', title: 'پرفروش ترین ها' },
          ]}
          defaultValue="bestSellers"
          onSelect={(showby) => setSetting({ showby })}
          selected={
            designState.current.settings && designState.current.settings.showby
              ? designState.current.settings.showby
              : 'all'
          }
        />
      </div>
    </div>
  );
};
