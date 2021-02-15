import { ICWhatsapp, ICTwitter, ICInstagram, ICTelegram } from 'icons';
import Link from 'next/link';
import { GeneralLink } from 'components';
import { useDirection } from 'hooks';
export const Social = () => {
  const { flexDirection } = useDirection();
  return (
    <div
      className={`header-social flex ${flexDirection} justify-center items-center `}
    >
      <Link href="./" passHref>
        <GeneralLink cssClass="header-social__telegram-link">
          <ICTelegram className="mx-10px fill-current" />
        </GeneralLink>
      </Link>

      <Link href="./" passHref>
        <GeneralLink cssClass="header-social__instagram-link">
          <ICInstagram className="mx-10px fill-current" />
        </GeneralLink>
      </Link>
      <Link href="./" passHref>
        <GeneralLink cssClass="header-social__twitter-link">
          <ICTwitter className="mx-10px fill-current" />
        </GeneralLink>
      </Link>

      <Link href="./" passHref>
        <GeneralLink cssClass="header-social__whatsapp-link">
          <ICWhatsapp className="mr-10px  fill-current" />
        </GeneralLink>
      </Link>
    </div>
  );
};
