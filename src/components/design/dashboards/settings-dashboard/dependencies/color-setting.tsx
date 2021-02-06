import { Button, ColorPicker } from 'components';

export const ColorSetting = ({
  color,
  setColor,
  onPageSetting,
  designState,
}) => {
  return (
    <div className="flex flex-col px-20px pt-30px">
      <p className="text-right text-white_shade-100 pt-15px">رنگ ها</p>
      {color.open ? (
        <div className="px-10px">
          <ColorPicker
            value={designState.pageSettings[color.type]}
            onChange={(value) => {
              onPageSetting({ key: [color.type], value: value.hex });
              setColor({ type: '', open: false });
            }}
            label={color.type === 'secondary' ? 'رنگ دوم' : 'رنگ اصلی'}
          />
        </div>
      ) : (
        <div className="flex justify-between mt-20px">
          <div className="flex flex-col items-center">
            <Button
              className="h-50px mr-10px text-14px w-130px "
              style={{ backgroundColor: designState.pageSettings.secondary }}
              onClick={() => setColor({ type: 'secondary', open: true })}
            >
              {designState.pageSettings.secondary}
            </Button>
            <p className="text-gray_shade-300 pt-8px text-14px">رنگ دوم</p>
          </div>
          <div className="flex flex-col items-center">
            <Button
              className="h-50px mr-10px text-14px w-130px "
              style={{ backgroundColor: designState.pageSettings.primary }}
              onClick={() => setColor({ type: 'primary', open: true })}
            >
              {designState.pageSettings.primary}
            </Button>
            <p className="text-gray_shade-300 pt-8px text-14px">رنگ اصلی</p>
          </div>
        </div>
      )}
    </div>
  );
};