import { ICWhatsapp, ICTwitter, ICInstagram, ICTelegram } from 'icons';
import { GeneralLink } from 'components';
import { useDirection } from 'hooks';
export const Social = () => {
  const { flexDirection, marginRtl } = useDirection();
  return (
    <div
      className={`sep-header-social flex ${flexDirection} justify-center items-center `}
    >
      <GeneralLink cssClass="sep-header-social__telegram-link" href="./">
        <ICTelegram
          className="mx-10px fill-current"
          cssClass="sep-header-social__telegram-ic"
        />
      </GeneralLink>

      <GeneralLink cssClass="sep-header-social__instagram-link" href="./">
        <ICInstagram
          className="mx-10px fill-current"
          cssClass="sep-header-social__instagram-ic"
        />
      </GeneralLink>
      <GeneralLink cssClass="sep-header-social__twitter-link" href="./">
        <ICTwitter
          className="mx-10px fill-current"
          cssClass="sep-header-social__twitter-ic"
        />
      </GeneralLink>

      <GeneralLink cssClass="sep-header-social__whatsapp-link" href="./">
        <ICWhatsapp
          className={`${marginRtl}-10px  fill-current`}
          cssClass="sep-header-social__whatsapp-ic"
        />
      </GeneralLink>
    </div>
  );
};
