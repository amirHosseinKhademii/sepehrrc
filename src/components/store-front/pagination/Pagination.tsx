import { FC } from 'react';
import { ICEllipsisH } from 'icons';
import { useDesign } from 'hooks';
const Pagination: FC = () => {
  const { designState } = useDesign();
  const { pageSettings } = designState;

  const PageBox = ({ number, active = false }) => {
    return (
      <div
        className={`w-50px h-50px flex justify-center items-center mx-5px shadow-custom-1 rounded-7px cursor-pointer ${
          active ? ' text-white' : ' text-black'
        }`}
        style={{ backgroundColor: `${active ? pageSettings.primary : '#fff'}` }}
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

export default Pagination;
