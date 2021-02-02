import { ButtonDrawer } from 'components';

export const MenuEditGroup = () => {
  return (
    <div className="w-full flex flex-col my-30px">
      <ButtonDrawer
        withPush
        onPush="https://mountainshop.mysepehr.com/admin"
        text="ویرایش منوی سایت "
        className="justify-center mb-15px"
      />
      <ButtonDrawer
        withPush
        onPush="https://mountainshop.mysepehr.com/products.aspx"
        text="ویرایش منوی محصولات "
        className="justify-center mb-15px"
      />
      <ButtonDrawer
        withPush
        onPush="https://mountainshop.mysepehr.com/basketwatch.aspx"
        text="ویرایش شبکه های اجتماعی "
        className="justify-center"
      />
    </div>
  );
};
