import { CheckBox, Text, Switch } from 'components';
import { ICInstagram, ICTelegram, ICWhatsapp } from 'icons';
import { Fragment } from 'react';

const SocialGroup = ({ settings, setSetting }) => {
  const SocialCheck = () => (
    <div className="flex flex-col w-full mt-14px">
      <div
        className="w-full bg-gray_shade-800 h-37px rounded flex items-center justify-between cursor-pointer"
        onClick={() => setSetting({ socialegram: !settings.socialegram })}
      >
        {settings.socialegram ? (
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
        onClick={() => setSetting({ whatsapp: !settings.whatsapp })}
      >
        {settings.whatsapp ? (
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

  return (
    <Fragment>
      <Switch
        label=" شبکه های اجتماعی"
        onClick={() =>
          setSetting({
            social: settings.social === undefined ? false : !settings.social,
          })
        }
        checked={settings.social === undefined ? true : settings.social}
        className="mt-30px"
      />
      {settings.social === undefined ? (
        <SocialCheck />
      ) : (
        settings.social && <SocialCheck />
      )}
    </Fragment>
  );
};

export { SocialGroup };
