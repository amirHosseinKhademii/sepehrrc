import { ICWhatsapp, ICTwitter, ICInstagram, ICTelegram } from 'icons';
import Link from 'next/link';

export const Social = () => {
  return (
    <>
      <Link href="./">
        <a>
          <ICTelegram className="mx-10px fill-current" />
        </a>
      </Link>

      <Link href="./">
        <a>
          <ICInstagram className="mx-10px fill-current" />
        </a>
      </Link>
      <Link href="./">
        <a>
          <ICTwitter className="mx-10px fill-current" />
        </a>
      </Link>

      <Link href="./">
        <a>
          <ICWhatsapp className="mr-10px  fill-current" />
        </a>
      </Link>
    </>
  );
};
