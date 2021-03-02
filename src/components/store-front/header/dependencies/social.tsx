import { ICWhatsapp, ICTwitter, ICInstagram, ICTelegram } from 'icons';
import { GeneralLink } from 'components';
import { useDirection } from 'hooks';
export const Social = ({ item }) => {
  const { settings } = item;
  const { flexDirection, marginRtl } = useDirection();
  const checkedInstagram =
    settings.instagram == undefined ? true : settings.instagram;
  const checkedTwitter =
    settings.twitter == undefined ? true : settings.twitter;
  const checkedTelegram =
    settings.telegram == undefined ? true : settings.telegram;
  const checkedWhatsapp =
    settings.whatsapp == undefined ? true : settings.whatsapp;
  return (
    <div
      className={`sep-header-social flex ${flexDirection} justify-center items-center `}
    >
      {checkedTelegram && (
        <GeneralLink cssClass="sep-header-social__telegram-link" href="./">
          <ICTelegram
            className="mx-10px fill-current"
            cssClass="sep-header-social__telegram-ic"
          />
        </GeneralLink>
      )}
      {checkedInstagram && (
        <GeneralLink cssClass="sep-header-social__instagram-link" href="./">
          <ICInstagram
            className="mx-10px fill-current"
            cssClass="sep-header-social__instagram-ic"
          />
        </GeneralLink>
      )}
      {checkedTwitter && (
        <GeneralLink cssClass="sep-header-social__twitter-link" href="./">
          <ICTwitter
            className="mx-10px fill-current"
            cssClass="sep-header-social__twitter-ic"
          />
        </GeneralLink>
      )}
      {checkedWhatsapp && (
        <GeneralLink cssClass="sep-header-social__whatsapp-link" href="./">
          <ICWhatsapp
            className={`${marginRtl}-10px  fill-current`}
            cssClass="sep-header-social__whatsapp-ic"
          />
        </GeneralLink>
      )}{' '}
    </div>
  );
};
