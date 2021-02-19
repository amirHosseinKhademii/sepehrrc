import { Text, Label } from 'components';

export const ColSelect = ({ settings, setSetting }) => {
  return (
    <div className="w-full flex flex-col items-end">
      <Label className="mt-30px">نمایش به صورت</Label>
      <div className="w-full rounded h-54px mt-14px mb-30px bg-gray_shade-800 flex items-center justify-between">
        <div
          className={` w-1/3  flex items-center justify-center h-full rounded-l cursor-pointer ${
            settings.cols == '5' && 'bg-primary-800'
          }`}
          onClick={() => setSetting({ cols: '5' })}
        >
          <Text
            className={`text-14px ${
              settings.cols == '5'
                ? 'text-white_shade-100'
                : 'text-gray_shade-300'
            }`}
          >
            پنج ستون
          </Text>
        </div>
        <div
          className={` w-1/3  flex items-center justify-center h-full  cursor-pointer border-r border-l border-gray_shade-900  ${
            settings.cols == '4' && 'bg-primary-800'
          }`}
          onClick={() => setSetting({ cols: '4' })}
        >
          <Text
            className={`text-14px ${
              settings.cols == '4'
                ? 'text-white_shade-100'
                : 'text-gray_shade-300'
            }`}
          >
            چهار ستون
          </Text>
        </div>
        <div
          className={` w-1/3  flex items-center justify-center h-full rounded-r cursor-pointer  ${
            settings.cols == '3' && 'bg-primary-800'
          }`}
          onClick={() => setSetting({ cols: '3' })}
        >
          <Text
            className={`text-14px ${
              settings.cols == '3'
                ? 'text-white_shade-100'
                : 'text-gray_shade-300'
            }`}
          >
            سه ستون
          </Text>
        </div>
      </div>
    </div>
  );
};
