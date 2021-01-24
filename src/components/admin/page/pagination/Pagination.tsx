import { FC } from 'react';
import { ICEllipsisH } from 'icons';

export const Pagination: FC = () => {
  const PageBox = ({ number, active = false }) => {
    return (
      <div
        className={`w-50px h-50px flex justify-center items-center mx-5px shadow-custom-1 rounded-7px cursor-pointer ${
          active ? 'bg-red-500 text-white' : 'bg-white text-black'
        }`}
      >
        <span className="font-iransans">{number} </span>
      </div>
    );
  };

  return (
    <div className="flex">
      <PageBox number={1} />
      <PageBox number={2} />
      <PageBox number={3} active />
      <ICEllipsisH
        height="50px"
        width="50px"
        className="text-gray-600 fill-current"
      />
      <PageBox number={15} />
    </div>
  );
};
