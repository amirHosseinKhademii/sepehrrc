export const InlineMenuItem = ({ title, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`text-16px font-bold 
         focus:text-gray_shade-900 text-gray_shade-500
       mx-10px pb-1 cursor-pointer transition delay-75 duration-300 ease-in-out border-b-2 border-transparent hover:text-gray_shade-900 hover:border-green-500 focus:border-green-500`}
    >
      {title}
    </span>
  );
};
