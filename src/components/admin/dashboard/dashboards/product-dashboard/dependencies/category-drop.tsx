import { Text, DropDown } from 'components';
import { useDesign } from 'hooks';

export const CategoryDrop = () => {
  const { setSetting, designState } = useDesign();

  return (
    <div className="w-full ">
      <div className="w-full ">
        <Text className="  mt-30px text-14px text-white_shade-100 text-right">
          دسته بندی محصولات
        </Text>
        <DropDown
          className="w-full h-54px mt-15px"
          options={[
            { id: 'all', title: ' همه دسته ها' },
            { id: 'simple', title: 'کیف و کفش' },
            { id: 'simple', title: 'پوشاک' },
            { id: 'simple', title: 'دیجیتال' },
          ]}
          onSelect={(category) => setSetting({ category })}
          selected={
            designState.current.settings &&
            designState.current.settings.category
          }
        />
      </div>
    </div>
  );
};
