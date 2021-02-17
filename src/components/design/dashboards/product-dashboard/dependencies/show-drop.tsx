import { Text, DropDown } from 'components';
import { useDesign, useDirection } from 'hooks';

export const ShowDrop = () => {
  const { setSetting, designState } = useDesign();
  const { textAlignRtl, language } = useDirection();

  return (
    <div className="w-full  gap-30px">
      <div className="w-full">
        <Text
          className={`mt-30px mb-15px text-14px text-white_shade-100 ${textAlignRtl}`}
        >
          {language.PDShowBy}
        </Text>
        <DropDown
          className="w-full h-54px"
          options={[
            { id: 'all', title: `${language.PDAll}` },
            { id: 'newests', title: `${language.PDLatestProducts}` },
            { id: 'bestSellers', title: `${language.PDBestSellers}` },
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
