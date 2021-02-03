import { ButtonDrawer } from 'components';

export const MenuEditGroup = ({ designState }) => {
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
        text="ویرایش منوی سایت "
        className="justify-center mb-15px cursor-pointer"
      />
      {showCategory && (
        <ButtonDrawer
          withPush
          onPush="https://mountainshop.mysepehr.com/products.aspx"
          text="ویرایش دسته بندی محصولات "
          className="justify-center mb-15px cursor-pointer"
        />
      )}
      {showSocial && (
        <ButtonDrawer
          withPush
          onPush="https://mountainshop.mysepehr.com/basketwatch.aspx"
          text="ویرایش شبکه های اجتماعی "
          className="justify-center mb-15px cursor-pointer"
        />
      )}
    </div>
  );
};
