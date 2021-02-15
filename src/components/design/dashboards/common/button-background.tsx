import { ICMultiply } from 'icons';
import { Fragment } from 'react';

export const ButtonBackground = ({
  setPureImage,
  number,
  isBackground,
  settings,
  setSetting,
}) => {
  return (
    <Fragment>
      {settings.backgroundImage !== true && settings.backgroundImage !== '' ? (
        <div className="w-full h-54px bg-gray_shade-800 rounded flex items-center justify-between ">
          <ICMultiply
            fill="#9ba3b5"
            className="w-15px h-15px ml-20px cursor-pointer"
            onClick={() => setSetting({ backgroundImage: '' })}
          />
          <label
            className="text-gray_shade-400 text-14px pl-10px"
            htmlFor="upload"
          >
            حذف عکس
          </label>
          <img
            className="w-54px h-54px rounded-r"
            src={settings?.backgroundImage}
          />
        </div>
      ) : (
        <div className="w-full h-54px bg-gray_shade-800 rounded flex items-center justify-between ">
          <label
            className="text-gray_shade-600 text-14px pl-10px cursor-pointer"
            htmlFor="upload"
          >
            برای قرار دادن تصویر کلیک کنید
          </label>
          <input
            className="hidden"
            type="file"
            id="upload"
            onChange={(e) =>
              setPureImage({ value: e.target.files[0], number, isBackground })
            }
          />
          <div className="w-54px h-54px border-l bg-gray_shade-700 border-gray_shade-900 rounded-r" />
        </div>
      )}
    </Fragment>
  );
};
