import { FC } from 'react';
import { ICEllipsisH } from 'icons';
import { useClass } from 'hooks';
const Pagination: FC<IPagination> = ({
  layout = true,
  className,
  designState,
}) => {
  const { pageSettings } = designState;
  const { toggle } = useClass();
  const PageBox = ({ number, active = false }) => {
    let activeColor = null;
    if (layout) {
      if (active) {
        activeColor = pageSettings.primary;
      } else {
        activeColor = '#fff';
      }
    } else {
      if (active) {
        activeColor = '#2e323d';
      } else {
        activeColor = '#fff';
      }
    }

    return (
      <div
        className={toggle(
          `w-50px h-50px flex justify-center items-center mx-5px cursor-pointer ${
            active ? ' text-white' : ' text-black'
          }`,
          className,
          layout
        )}
        style={{ backgroundColor: `${activeColor}` }}
      >
        <span>{number} </span>
      </div>
    );
  };

  return (
    <div className="flex z-10">
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
