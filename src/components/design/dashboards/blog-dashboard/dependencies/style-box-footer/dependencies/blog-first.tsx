import { useClass } from 'hooks';
import { FC, memo } from 'react';

const BlogFirst: FC<IStyleBox> = memo(({ className, onClick, active }) => {
  const { join } = useClass();
  return (
    <div
      className={join('w-full mx-auto cursor-pointer', className)}
      onClick={onClick}
    >
      <div className=" felx flex-col w-full">
        <div
          className={`w-full h-20px grid grid-cols-6 px-10px ${
            active ? 'bg-primary-800' : 'bg-gray_shade-900'
          }`}
        >
          <div className="grid grid-cols-3 col-span-1 py-7px ">
            <div
              className={`w-6px h-6px rounded-full ${
                active ? 'bg-primary-600' : 'bg-gray_shade-600'
              }`}
            />
            <div
              className={`w-6px h-6px rounded-full ${
                active ? 'bg-primary-600' : 'bg-gray_shade-600'
              }`}
            />
            <div
              className={`w-6px h-6px rounded-full ${
                active ? 'bg-primary-600' : 'bg-gray_shade-600'
              }`}
            />
          </div>
          <div className=" ">
            <div
              className={`py-3px rounded w-full my-7px ${
                active ? 'bg-primary-600' : 'bg-gray_shade-600'
              }`}
            />
          </div>
          <div className="col-span-2" />
          <div className="col-span-2 grid grid-cols-5 gap-x-2px">
            <div
              className={`py-3px rounded w-full my-7px ${
                active ? 'bg-primary-600' : 'bg-gray_shade-600'
              }`}
            />
            <div
              className={`py-3px rounded w-full my-7px ${
                active ? 'bg-primary-600' : 'bg-gray_shade-600'
              }`}
            />
            <div
              className={`py-3px rounded w-full my-7px ${
                active ? 'bg-primary-600' : 'bg-gray_shade-600'
              }`}
            />
            <div
              className={`py-3px rounded w-full my-7px ${
                active ? 'bg-primary-600' : 'bg-gray_shade-600'
              }`}
            />
            <div
              className={`py-3px rounded w-full my-7px ${
                active ? 'bg-primary-600' : 'bg-gray_shade-600'
              }`}
            />
          </div>
        </div>
        <div
          className={`w-full h-20px grid grid-cols-6  px-10px  ${
            active ? 'bg-primary-600' : 'bg-gray_shade-600'
          }`}
        >
          <div className="col-span-1">
            <div
              className={`py-3px rounded w-full my-7px ${
                active ? 'bg-primary-800' : 'bg-gray_shade-900'
              }`}
            />
          </div>
          <div className="col-span-3" />
          <div className="col-span-2">
            <div
              className={`py-3px rounded w-full my-7px ${
                active ? 'bg-primary-800' : 'bg-gray_shade-900'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
export default BlogFirst;
