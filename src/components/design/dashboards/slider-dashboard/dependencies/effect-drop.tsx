import { Text, DropDown } from 'components';
import { useDesign, useDirection } from 'hooks';

export const EffectDrop = () => {
  const { designState, setSetting } = useDesign();
  const { settings } = designState.current;
  const { textAlignRtl, language } = useDirection();

  return (
    <div className="w-full">
      <Text
        className={`  mt-30px mb-15px text-14px text-white_shade-100 ${textAlignRtl}`}
      >
        {language.SDSlidesChangeEffect}
      </Text>
      <DropDown
        className="w-full"
        options={[
          { id: 'fade', title: `${language.SDFadeEffect}` },
          { id: 'simple', title: `${language.SDSimpleEffect}` },
        ]}
        onSelect={(effect) => setSetting({ effect })}
        selected={settings && settings.effect ? settings.effect : 'fade'}
      />
    </div>
  );
};
