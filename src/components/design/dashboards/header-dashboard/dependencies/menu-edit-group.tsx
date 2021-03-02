import { ButtonDrawer } from 'components';
import { useDirection } from 'hooks';
import { ICSettingMenu } from 'icons';
export const MenuEditGroup = ({ designState }) => {
  const { language } = useDirection();
  const { settings } = designState.current;

  const showCategory =
    settings?.style &&
    (settings.style === 'third' || settings.style === 'fourth');
  const showSocial =
    settings?.style &&
    (settings.style === 'fourth' ||
      settings.style === 'sixth' ||
      settings.style === 'eighth');

  return (
    <div className="w-full flex flex-col mt-10px mb-10px">
      <ButtonDrawer
        withPush
        withIcon
        onPush="https://mountainshop.mysepehr.com/admin"
        text={language.HDEditWebsiteMenu}
        className="justify-center mb-10px cursor-pointer"
        children={<ICSettingMenu fill="#9ba3b5" className="text-18px" />}
      />
      {showCategory && (
        <ButtonDrawer
          withPush
          withIcon
          onPush="https://mountainshop.mysepehr.com/products.aspx"
          text={language.HDEditProductsCategory}
          className="justify-center mb-10px cursor-pointer"
          children={<ICSettingMenu fill="#9ba3b5" className="text-18px" />}
        />
      )}
      {showSocial && (
        <ButtonDrawer
          withPush
          withIcon
          onPush="https://mountainshop.mysepehr.com/basketwatch.aspx"
          text={language.HDEditSocailMedias}
          className="justify-center mb-10px cursor-pointer"
          children={<ICSettingMenu fill="#9ba3b5" className="text-18px" />}
        />
      )}
    </div>
  );
};
