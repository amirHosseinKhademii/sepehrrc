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
        '  productButton h-50px w-130px p-14px  focus:outline-none mt-30px rounded-50px border-2  text-14px ',
        className,
        layout,
        cssAlt
      )}
      onClick={onClick}
    >
      {text}
      <style jsx>
        {`
          .productButton {
            color:${` ${layout ? pageSettings.primary : 'initial'}`};
            border-color: ${`${layout ? pageSettings.primary : 'initial'} `};
         
                 `}
      </style>
    </button>
  );
};
