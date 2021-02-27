import { Text, ReactChipInput } from 'components';
import { useDesign, useDirection } from 'hooks';

const initialSuggest = [
  {
    id: 'bag',
    title: 'کیف',
  },
  {
    id: 'dress',
    title: 'لباس',
  },
  {
    id: 'digital',
    title: 'دیجیتال',
  },
];

export const CategoryDrop = () => {
  const { setSetting, designState } = useDesign();
  const { textAlignRtl, language } = useDirection();

  const categories = designState.current.settings.categories
    ? designState.current.settings.categories
    : [];

  const onSelect = (item) => {
    setSetting({ categories: [...categories, item] });
  };

  const onRemove = (item) => {
    setSetting({
      categories: categories.filter((category) => category.id !== item.id),
    });
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <Text
          className={`mt-30px mb-15px text-14px text-white_shade-100 ${textAlignRtl}`}
        >
          {language.PDProductCategories}
        </Text>
        <ReactChipInput
          chips={categories}
          onSelect={(item) => onSelect(item)}
          onRemove={(item) => onRemove(item)}
          initialSuggest={initialSuggest.filter(
            (sug) => !categories.map((item) => item.id).includes(sug.id)
          )}
        />
      </div>
    </div>
  );
};
