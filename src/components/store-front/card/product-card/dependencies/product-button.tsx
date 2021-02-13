import { FC } from 'react';

export const ProductButton: FC<IProductButton> = ({
  text,
  layout = true,
  onClick,
  designState,
  toggle,
  className,
  cssAlt,
}) => {
  const { pageSettings } = designState;

  return (
    <button
      className={toggle(
        ` product-button flex h-50px  mt-30px  px-15px items-center  border-2  text-14px font-iransans  focus:outline-none `,
        className,
        layout,
        cssAlt
      )}
      onClick={onClick}
    >
      {text}
      <style jsx>
        {`
          .product-button {
            color:${` ${layout ? pageSettings.primary : '#51596a'}`};
            border-color: ${`${layout ? pageSettings.primary : '#ced2da'} `};
         
                 `}
      </style>
    </button>
  );
};
