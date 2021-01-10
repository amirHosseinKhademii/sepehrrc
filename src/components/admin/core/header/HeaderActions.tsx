import {
  ICSearch,
  ICShoppingCart,
  ICUsersAlt,
  ICPhoneVolume,
  ICInstagram,
  ICTelegram,
  ICTwitter,
  ICWhatsapp,
} from 'icons';
import { useClass } from 'hooks';
import { HeaderButton } from './HeaderButton';
import { FC, Fragment } from 'react';
import { IHeaderActions, IShoppingCart } from './interface';
export const HeaderActions: FC<IHeaderActions> = ({
  className,
  tel,
  variation,
}) => {
  const { join } = useClass();

  const HeaderTel = ({ tel }) => {
    return (
      <div className={join('flex items-center', className)}>
        <div className="text-16px">{tel}</div>
        <ICPhoneVolume className="mx-4" />
      </div>
    );
  };

  const ShoppingCart: FC<IShoppingCart> = ({ className }) => {
    return (
      <div className={join('relative mr-4 ', className)}>
        <ICShoppingCart />
        <div className="absolute  -right-8px -top-6px  w-18px h-18px bg-red-600 text-white rounded-full">
          <span className="mr-3px">5</span>
        </div>
      </div>
    );
  };

  const FirstVariation = ({ className }) => {
    return (
      <div className={join('flex items-center', className)}>
        <ICSearch className="mx-2" />
        <ICShoppingCart className="mx-2" />
        <ICUsersAlt className="mx-2" />
      </div>
    );
  };

  const SecondVariation = ({ tel, className }) => {
    return (
      <div className={join('flex items-center', className)}>
        <HeaderTel tel={tel} />
        <ShoppingCart />
      </div>
    );
  };

  const ThirdVariation = ({ className }) => {
    return (
      <div className={join('flex items-center', className)}>
        <div className="ml-8px">ورود/عضویت در سایت</div>
        <ICSearch className="mx-4" />
        <ShoppingCart />
      </div>
    );
  };

  const FourthVariation = ({ className }) => {
    return (
      <div className={join('flex items-center', className)}>
        <ICSearch className="mx-4" />
        <ICShoppingCart className="mx-4" />
      </div>
    );
  };
  const FifthVariation = ({ className }) => {
    return (
      <div className={join('flex items-center', className)}>
        <ShoppingCart className="ml-4" />
      </div>
    );
  };

  const SocialVariation = ({ className }) => {
    return (
      <div className={join('flex items-center text-24px', className)}>
        <ICWhatsapp className="mx-4" />
        <ICTwitter className="mx-4" />
        <ICInstagram className="mx-4" />
        <ICTelegram className="mx-4" />
      </div>
    );
  };

  return (
    <Fragment>
      {variation === 'first' && <FirstVariation className={className} />}
      {variation === 'second' && (
        <SecondVariation className={className} tel={tel} />
      )}
      {variation === 'third' && <ThirdVariation className={className} />}
      {variation === 'fourth' && <FourthVariation className={className} />}
      {variation === 'fifth' && <FifthVariation className={className} />}
      {variation === 'social' && <SocialVariation className={className} />}
      {variation === 'Tel' && <HeaderTel tel={tel} />}
    </Fragment>
  );
};
