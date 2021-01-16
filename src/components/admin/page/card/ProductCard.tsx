export const ProductCard = ({ item }) => {
  return (
    <div
      style={{ width: '309px' }}
      className="flex flex-col items-center bg-white border-2 border-gray-100 shadow-lg rounded-xl"
    >
      <img
        src={item.cover}
        className="mt-10"
        style={{ height: '189px', width: '189px' }}
      />
      <span className="text-lg mt-7">{item.name}</span>
      <div className="flex flex-row-reverse items-center mt-5">
        <span className="text-lg font-bold">{item.price}</span>
        <span className="text-sm font-bold mr-1 font-iransans">تومان</span>
      </div>
      <button
        style={{ height: '51px', width: '135px' }}
        className="focus:outline-none mt-9 rounded-full border-2 border-red-500 text-red-500 text-sm"
      >
        افزون به سبد خرید
      </button>
    </div>
  );
};
