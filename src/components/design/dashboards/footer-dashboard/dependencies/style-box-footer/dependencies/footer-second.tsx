import { useClass } from 'hooks';
import { FC, memo } from 'react';

const FooterSecond: FC<IStyleBox> = memo(
  ({ className, onClick, active = false }) => {
    const { join } = useClass();
    return (
      <div
        className={join('w-full mx-auto cursor-pointer', className)}
        onClick={onClick}
      >
        <div className=" felx flex-col w-full ">
          <div
            className={`w-full ${
              active ? 'bg-primary-800' : 'bg-gray_shade-900'
            }  grid grid-cols-9 px-10px`}
          >
            <div className="grid grid-cols-2 col-span-2 py-7px ">
              <div
                className={`${
                  active ? 'bg-primary-600' : 'bg-gray_shade-600'
                } rounded-sm w-16px h-16px`}
              />
              <div
                className={`${
                  active ? 'bg-primary-600' : 'bg-gray_shade-600'
                } rounded-sm w-16px h-16px`}
              />
            </div>
            <div className=" col-span-4 grid grid-cols-2 gap-x-10px mx-15px ">
              <div className="col-span-1 flex flex-col my-5px">
                <div
                  className={`${
                    active ? 'bg-primary-600' : 'bg-gray_shade-600'
                  } rounded-sm w-full py-2px`}
                />
                <div
                  className={`${
                    active ? 'bg-primary-600' : 'bg-gray_shade-600'
                  } rounded-sm w-full py-2px my-4px`}
                />
                <div
                  className={`${
                    active ? 'bg-primary-600' : 'bg-gray_shade-600'
                  } rounded-sm w-full py-2px`}
                />
              </div>
              <div className="col-span-1 flex flex-col my-5px">
                <div
                  className={`${
                    active ? 'bg-primary-600' : 'bg-gray_shade-600'
                  } rounded-sm w-full py-2px`}
                />
                <div
                  className={`${
                    active ? 'bg-primary-600' : 'bg-gray_shade-600'
                  } rounded-sm w-full py-2px my-4px`}
                />
                <div
                  className={`${
                    active ? 'bg-primary-600' : 'bg-gray_shade-600'
                  } rounded-sm w-full py-2px`}
                />
              </div>
            </div>
            <div className="col-span-3 flex flex-col">
              <div
                className={`${
                  active ? 'bg-primary-600' : 'bg-gray_shade-600'
                }  w-full py-2px my-7px rounded`}
              />

              <div className="grid grid-cols-2 gap-x-5px">
                <div className="mt-1px">
                  <div
                    className={`${
                      active ? 'bg-primary-600' : 'bg-gray_shade-600'
                    } rounded-sm w-full py-2px`}
                  />
                </div>
                <div className="grid grid-cols-3">
                  <div
                    className={`${
                      active ? 'bg-primary-600' : 'bg-gray_shade-600'
                    } rounded-full w-6px h-6px `}
                  />
                  <div
                    className={`${
                      active ? 'bg-primary-600' : 'bg-gray_shade-600'
                    } rounded-full w-6px h-6px `}
                  />
                  <div
                    className={`${
                      active ? 'bg-primary-600' : 'bg-gray_shade-600'
                    } rounded-full w-6px h-6px `}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full h-16px grid grid-cols-6 px-10px ${
              active ? 'bg-primary-600' : 'bg-gray_shade-600'
            }`}
          >
            <div className="col-span-1">
              <div
                className={`w-full py-2px my-5px rounded ${
                  active ? 'bg-primary-800' : 'bg-gray_shade-900'
                }`}
              />
            </div>
            <div className="col-span-3" />
            <div className="col-span-2">
              <div
                className={`w-full py-2px my-5px rounded ${
                  active ? 'bg-primary-800' : 'bg-gray_shade-900'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
export default FooterSecond;
