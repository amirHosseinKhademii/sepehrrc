import { ICWhatsapp, ICTwitter, ICInstagram, ICTelegram } from 'icons';
import { GeneralLink } from 'components';
import { useDirection } from 'hooks';
export const Social = () => {
  const { flexDirection, marginRtl } = useDirection();
  return (
    <div
      className={`header-social flex ${flexDirection} justify-center items-center `}
    >
      <GeneralLink cssClass="header-social__telegram-link" href="./">
        <ICTelegram className="mx-10px fill-current" />
      </GeneralLink>

      <GeneralLink cssClass="header-social__instagram-link" href="./">
        <ICInstagram className="mx-10px fill-current" />
      </GeneralLink>
      <GeneralLink cssClass="header-social__twitter-link" href="./">
        <ICTwitter className="mx-10px fill-current" />
      </GeneralLink>

      <GeneralLink cssClass="header-social__whatsapp-link" href="./">
        <ICWhatsapp className={`${marginRtl}-10px  fill-current`} />
      </GeneralLink>
    </div>
  );
};
