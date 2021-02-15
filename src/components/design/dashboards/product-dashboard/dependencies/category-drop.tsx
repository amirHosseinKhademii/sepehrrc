import { Text, DropDown } from 'components';
import { useDesign, useDirection } from 'hooks';

export const CategoryDrop = () => {
  const { setSetting, designState } = useDesign();
  const { textAlignRtl } = useDirection();

  return (
    <div className="w-full ">
      <div className="w-full ">
        <Text
          className={`mt-30px mb-15px text-14px text-white_shade-100 ${textAlignRtl}`}
        >
          دسته بندی محصولات
        </Text>
        <DropDown
          className="w-full h-54px"
          options={[
            { id: 'all', title: ' همه دسته ها' },
            { id: 'bags', title: 'کیف ' },
            { id: 'clothes', title: 'پوشاک' },
            { id: 'digital', title: 'دیجیتال' },
          ]}
          onSelect={(category) => setSetting({ category })}
          selected={
            designState.current.settings &&
            designState.current.settings.category
              ? designState.current.settings.category
              : 'all'
          }
        />
      </div>
    </div>
  );
};
