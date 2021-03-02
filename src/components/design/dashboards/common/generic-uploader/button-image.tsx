import { ICMultiply, ICImagePlaceholder } from 'icons';
import { v4 as uuid } from 'uuid';

export const ButtonImage = ({
  setPureImage,
  number,
  isBackground,
  settings,
  setSetting,
  className,
  showCondition,
  deleteImage,
  currentImage,
  withSwitch,
}) => {
  const show = () => {
    if (withSwitch && isBackground) {
      return (
        typeof settings.backgroundImage === 'string' &&
        settings.backgroundImage !== ''
      );
    } else if (withSwitch && !isBackground) {
      currentImage.value;
    } else return showCondition;
  };

  const randomId = uuid();

  const ButtonUpload = () => (
    <div
      className={`w-full h-54px bg-gray_shade-800 rounded flex items-center justify-between `}
    >
      <label
        className="text-gray_shade-600 text-14px pl-25px cursor-pointer"
        htmlFor={randomId}
      >
        برای قرار دادن تصویر کلیک کنید
      </label>
      <input
        className="hidden"
        type="file"
        id={randomId}
        onChange={(e) =>
          setPureImage({ value: e.target.files[0], number, isBackground })
        }
      />
      <div className="w-54px h-54px flex justify-center items-center border-l bg-gray_shade-700 border-gray_shade-900 rounded-r">
        <ICImagePlaceholder fill="#9ba3b5" className="text-18px" />
      </div>
    </div>
  );

  const ButtonRemove = () => (
    <div
      className={`w-full h-54px bg-gray_shade-800 rounded flex items-center justify-between pl-20px `}
    >
      <div
        className="w-full flex items-center justify-between cursor-pointer"
        onClick={() =>
          isBackground
            ? setSetting({ backgroundImage: '' })
            : deleteImage(number)
        }
      >
        <ICMultiply fill="#9ba3b5" className="w-15px h-15px cursor-pointer" />
        <label
          className="text-gray_shade-400 text-14px pr-30px cursor-pointer"
          htmlFor="upload"
        >
          حذف عکس
        </label>
      </div>

      <img
        className="w-54px h-54px rounded-r"
        src={isBackground ? settings?.backgroundImage : currentImage?.value}
      />
    </div>
  );

  return (
    <div className={`w-full ${className}`}>
      {show() ? <ButtonRemove /> : <ButtonUpload />}
    </div>
  );
};
