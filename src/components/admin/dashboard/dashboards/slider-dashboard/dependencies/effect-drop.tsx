import { Text, DropDown } from 'components';
import { useDesign } from 'hooks';

export const EffectDrop = () => {
  const { designState, setSetting } = useDesign();
  const { settings } = designState.current;
  return (
    <div className="w-full">
      <Text className="  mt-30px mb-15px text-14px text-white_shade-100 text-right">
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
