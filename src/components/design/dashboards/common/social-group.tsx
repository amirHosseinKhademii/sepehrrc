import { CheckBox, Text, Switch } from 'components';
import { ICInstagram, ICTelegram, ICWhatsapp, ICTwitter } from 'icons';
import { Fragment } from 'react';
import { useDirection } from 'hooks';

const SocialGroup = ({ settings, setSetting }) => {
  const { language } = useDirection();
  const checkedInstagram =
    settings.instagram == undefined ? true : settings.instagram;
  const checkedTwitter =
    settings.twitter == undefined ? true : settings.twitter;
  const checkedTelegram =
    settings.telegram == undefined ? true : settings.telegram;
  const checkedWhatsapp =
    settings.whatsapp == undefined ? true : settings.whatsapp;
  const SocialCheck = () => (
    <div className="flex flex-col w-full mt-14px">
      <div
        className="w-full bg-gray_shade-800 h-37px rounded flex items-center justify-between cursor-pointer"
        onClick={() =>
          setSetting({
            telegram:
              settings.telegram == undefined ? false : !settings.telegram,
          })
        }
      >
        {checkedTelegram ? (
          <CheckBox className="" secondary checked />
        ) : (
          <div className="bg-gray_shade-900 h-18px w-18px rounded ml-7px" />
        )}
        <div className="flex items-center pr-7px">
          <Text className="text-gray_shade-300 mr-7px text-14px">
            {language.HDTelegram}
          </Text>
          <ICTelegram fill="#9ba3b5" />
        </div>
      </div>
      <div
        className="w-full bg-gray_shade-800 h-37px rounded flex items-center justify-between cursor-pointer my-10px"
        onClick={() =>
          setSetting({
            instagram:
              settings.instagram == undefined ? false : !settings.instagram,
          })
        }
      >
        {checkedInstagram ? (
          <CheckBox className="" secondary checked />
        ) : (
          <div className="bg-gray_shade-900 h-18px w-18px rounded ml-7px" />
        )}
        <div className="flex items-center pr-7px">
          <Text className="text-gray_shade-300 mr-7px text-14px">
            {language.HDInstagram}{' '}
          </Text>
          <ICInstagram fill="#9ba3b5" />
        </div>
      </div>
      <div
        className="w-full bg-gray_shade-800 h-37px rounded flex items-center justify-between cursor-pointer mb-10px"
        onClick={() =>
          setSetting({
            whatsapp:
              settings.whatsapp == undefined ? false : !settings.whatsapp,
          })
        }
      >
        {checkedWhatsapp ? (
          <CheckBox className="" secondary checked />
        ) : (
          <div className="bg-gray_shade-900 h-18px w-18px rounded ml-7px" />
        )}
        <div className="flex items-center pr-7px">
          <Text className="text-gray_shade-300 mr-7px text-14px">
            {language.HDWhatsapp}
          </Text>
          <ICWhatsapp fill="#9ba3b5" />
        </div>
      </div>
      <div
        className="w-full bg-gray_shade-800 h-37px rounded flex items-center justify-between cursor-pointer"
        onClick={() =>
          setSetting({
            twitter: settings.twitter == undefined ? false : !settings.twitter,
          })
        }
      >
        {checkedTwitter ? (
          <CheckBox className="" secondary checked />
        ) : (
          <div className="bg-gray_shade-900 h-18px w-18px rounded ml-7px" />
        )}
        <div className="flex items-center pr-7px">
          <Text className="text-gray_shade-300 mr-7px text-14px">
            {language.HDTwitter}
          </Text>
          <ICTwitter fill="#9ba3b5" />
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
