import { Fragment } from 'react';
import { CheckBox, Text, Switch } from 'components';
import { ICInstagram, ICTelegram, ICWhatsapp, ICForwardLink } from 'icons';
import { GeneralLink } from '../../../../store-front/common';
import { useDirection } from 'hooks';

const SocialGroup = ({ settings, setSetting }) => {
  const { flexDirection, marginRtl } = useDirection();
  const SocialCheck = () => (
    <div className="flex flex-col w-full mt-14px">
      <div
        className="w-full bg-gray_shade-800 h-37px rounded flex items-center justify-between cursor-pointer"
        onClick={() =>
          setSetting({
            telegram:
              settings.telegram === undefined ? false : !settings.telegram,
          })
        }
      >
        {settings.telegram !== undefined ? (
          settings.telegram == false ? (
            <div className="bg-gray_shade-900 h-18px w-18px rounded ml-7px" />
          ) : (
            <CheckBox className="" secondary checked />
          )
        ) : (
          <CheckBox className="" secondary checked />
        )}
        <div className="flex items-center pr-7px">
          <Text className="text-gray_shade-300 mr-7px text-14px">تلگرام</Text>
          <ICTelegram fill="#9ba3b5" />
        </div>
      </div>
      <div
        className="w-full bg-gray_shade-800 h-37px rounded flex items-center justify-between cursor-pointer my-10px"
        onClick={() =>
          setSetting({
            instagram:
              settings.instagram === undefined ? false : !settings.instagram,
          })
        }
      >
        {settings.instagram !== undefined ? (
          settings.instagram == false ? (
            <div className="bg-gray_shade-900 h-18px w-18px rounded ml-7px" />
          ) : (
            <CheckBox className="" secondary checked />
          )
        ) : (
          <CheckBox className="" secondary checked />
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
        onClick={() =>
          setSetting({
            whatsapp:
              settings.whatsapp === undefined ? false : !settings.whatsapp,
          })
        }
      >
        {settings.whatsapp !== undefined ? (
          settings.whatsapp == false ? (
            <div className="bg-gray_shade-900 h-18px w-18px rounded ml-7px" />
          ) : (
            <CheckBox className="" secondary checked />
          )
        ) : (
          <CheckBox className="" secondary checked />
        )}
        <div className="flex items-center pr-7px">
          <Text className="text-gray_shade-300 mr-7px text-14px">واتس اپ</Text>
          <ICWhatsapp fill="#9ba3b5" />
        </div>
      </div>
      <GeneralLink href="#">
        <div className={`flex ${flexDirection} items-center mt-10px`}>
          <p className="m-0 mt-1 text-14px font-light text-gray_shade-300">
            برای ویرایش به{' '}
            <span className="font-medium text-gray_shade-50">تنظیمات</span>{' '}
            مراجعه کنید
          </p>
          <ICForwardLink
            fill="#9ba3b5"
            className={`${marginRtl}-4px text-12px`}
          />
        </div>
      </GeneralLink>
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
