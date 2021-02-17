import { Text, DropDown } from 'components';
import { useDesign, useDirection } from 'hooks';

export const CategoryDrop = () => {
  const { setSetting, designState } = useDesign();
  const { textAlignRtl, language } = useDirection();

  return (
    <div className="w-full ">
      <div className="w-full ">
        <Text
          className={`mt-30px mb-15px text-14px text-white_shade-100 ${textAlignRtl}`}
        >
          {language.PDProductCategories}
        </Text>
        <DropDown
          className="w-full h-54px"
          options={[
            { id: 'all', title: `${language.PDAllCategories}` },
            { id: 'bags', title: `${language.PDBag}` },
            { id: 'clothes', title: `${language.PDClothes}` },
            { id: 'digital', title: `${language.PDDigital}` },
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
