import { Text } from 'components';
import { useDesign } from 'hooks';

export const BackgroundColor = () => {
  const { setSetting, designState } = useDesign();

  return (
    <div className="w-full flex items-center justify-between mt-32px">
      <div className="flex items-center">
        <input
          type="color"
          onChange={(e) => setSetting({ 'background-color': e.target.value })}
          value={designState.current.settings['background-color'] || '#000'}
          className="w-30px h-30px rounded"
        />
        <Text className=" text-white_shade-100 ml-10px">
          {designState.current.settings['background-color'] || '#D3D546'}
        </Text>
      </div>
      <Text className=" text-white_shade-100">رنگ زمینه</Text>
    </div>
  );
};
