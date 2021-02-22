import { useState } from 'react';
import { Text, DropDown, ReactChipInput } from 'components';
import { useDesign, useDirection } from 'hooks';

export const CategoryDrop = () => {
  const { setSetting, designState } = useDesign();
  const { textAlignRtl, language } = useDirection();
  const [chip, setChip] = useState(['کیف']);

  const addChip = (value) => {
    const chips = chip.slice();
    chips.push(value);
    setChip(chips);
  };
  const removeChip = (index) => {
    const chips = chip.slice();
    chips.splice(index, 1);
    setChip(chips);
  };

  return (
    <div className="w-full ">
      <div className="w-full ">
        <Text
          className={`mt-30px mb-15px text-14px text-white_shade-100 ${textAlignRtl}`}
        >
          {language.PDProductCategories}
        </Text>
        {/* <ReactChipInput
          chips={chip}
          onSubmit={(value) => addChip(value)}
          onRemove={(index) => removeChip(index)}
        /> */}
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
