export const InlineMenuItem = ({ title, onClick, designState, layout }) => {
  const { pageSettings } = designState;
  return (
    <span
      onClick={onClick}
      className={`sep-product-menu--inline text-16px font-bold 
          text-gray_shade-500
       mx-10px mb-25px pb-1 cursor-pointer transition delay-75 duration-300 ease-in-out border-b-2 border-transparent hover:text-gray_shade-900`}
    >
      {title}
      <style jsx>
        {`
          .sep-product-menu--inline:hover {
            border-color: ${layout ? pageSettings.primary : 'initial'};
          }
        `}
      </style>
    </span>
  );
};
