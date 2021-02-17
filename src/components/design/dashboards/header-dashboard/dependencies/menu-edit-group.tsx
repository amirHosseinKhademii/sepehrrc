import { ButtonDrawer } from 'components';
import { useDirection } from 'hooks';
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
    <div className="w-full flex flex-col mt-30px mb-10px">
      <ButtonDrawer
        withPush
        onPush="https://mountainshop.mysepehr.com/admin"
        text={language.HDEditWebsiteMenu}
        className="justify-center mb-15px cursor-pointer"
      />
      {showCategory && (
        <ButtonDrawer
          withPush
          onPush="https://mountainshop.mysepehr.com/products.aspx"
          text={language.HDEditProductsCategory}
          className="justify-center mb-15px cursor-pointer"
        />
      )}
      {showSocial && (
        <ButtonDrawer
          withPush
          onPush="https://mountainshop.mysepehr.com/basketwatch.aspx"
          text={language.HDEditSocailMedias}
          className="justify-center mb-15px cursor-pointer"
        />
      )}
    </div>
  );
};
