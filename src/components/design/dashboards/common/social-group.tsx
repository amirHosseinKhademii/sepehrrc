import { CheckBox, Text } from 'components';
import { ICInstagram, ICTelegram, ICWhatsapp } from 'icons';

const SocialGroup = ({ settings, setSetting }) => {
  return (
    <div className="flex flex-col w-full mb-30px">
      <div
        className="w-full bg-gray_shade-800 h-37px rounded flex items-center justify-between cursor-pointer"
        onClick={() => setSetting({ telegram: !settings.telegram })}
      >
        {settings.telegram ? (
          <CheckBox className="" secondary checked />
        ) : (
          <div className="bg-gray_shade-900 h-18px w-18px rounded ml-7px" />
        )}
        <div className="flex items-center pr-7px">
          <Text className="text-gray_shade-300 mr-7px text-14px">تلگرام</Text>
          <ICTelegram fill="#9ba3b5" />
        </div>
      </div>
      <div
        className="w-full bg-gray_shade-800 h-37px rounded flex items-center justify-between cursor-pointer my-10px"
        onClick={() => setSetting({ instagram: !settings.instagram })}
      >
        {settings.instagram ? (
          <CheckBox className="" secondary checked />
        ) : (
          <div className="bg-gray_shade-900 h-18px w-18px rounded ml-7px" />
        )}
        <div className="flex items-center pr-7px">
          <Text className="text-gray_shade-300 mr-7px text-14px">
            اینستاگرام
          </Text>
          <ICInstagram fill="#9ba3b5" />
        </div>
      </div>
      <div
        className="w-full bg-gray_shade-800 h-37px rounded flex items-center justify-between cursor-pointer"
        onClick={() => setSetting({ watsapp: !settings.watsapp })}
      >
        {settings.watsapp ? (
          <CheckBox className="" secondary checked />
        ) : (
          <div className="bg-gray_shade-900 h-18px w-18px rounded ml-7px" />
        )}
        <div className="flex items-center pr-7px">
          <Text className="text-gray_shade-300 mr-7px text-14px">واتس اپ</Text>
          <ICWhatsapp fill="#9ba3b5" />
        </div>
      </div>
    </div>
  );
};

export default SocialGroup;
