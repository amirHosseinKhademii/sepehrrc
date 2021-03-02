import { Text } from 'components';

export const DarkSelect = ({ settings, setSetting }) => {
  return (
    <div className="w-full rounded h-54px mt-14px mb-30px bg-gray_shade-800 flex items-center justify-between">
      <div
        className={` w-1/2  flex items-center justify-center h-full border-r rounded-l border-gray_shade-900 cursor-pointer ${
          settings.dark && 'bg-primary-800'
        }`}
        onClick={() => setSetting({ dark: true })}
      >
        <Text
          className={`text-14px ${
            settings.dark ? 'text-white_shade-100' : 'text-gray_shade-300'
          }`}
        >
          تیره
        </Text>
      </div>
      <div
        className={` w-1/2  flex items-center justify-center h-full rounded-r cursor-pointer  ${
          !settings.dark && 'bg-primary-800'
        }`}
        onClick={() => setSetting({ dark: false })}
      >
        <Text
          className={`text-14px ${
            !settings.dark ? 'text-white_shade-100' : 'text-gray_shade-300'
          }`}
        >
          روشن
        </Text>
      </div>
    </div>
  );
};
