import { Text, DropDown } from 'components';
import { useDesign, useDirection } from 'hooks';

export const EffectDrop = () => {
  const { designState, setSetting } = useDesign();
  const { settings } = designState.current;
  const { textAlignRtl } = useDirection();

  return (
    <div className="w-full">
      <Text
        className={`  mt-30px mb-15px text-14px text-white_shade-100 ${textAlignRtl}`}
      >
        افکت تعویض اسلایدرها
      </Text>
      <DropDown
        className="w-full"
        options={[
          { id: 'fade', title: 'محو شونده' },
          { id: 'simple', title: 'ساده' },
        ]}
        onSelect={(effect) => setSetting({ effect })}
        selected={settings && settings.effect ? settings.effect : 'fade'}
      />
    </div>
  );
};
