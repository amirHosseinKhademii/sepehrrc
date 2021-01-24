import { FC } from 'react';
import Dropzone from 'react-dropzone';
import { useDesign } from 'hooks';

interface IDropZone {
  number?: number;
}

export const DndUploadBox: FC<IDropZone> = ({ number }) => {
  const { designState, setPureImage } = useDesign();
  return (
    <Dropzone
      onDrop={(acceptedFiles) =>
        setPureImage({
          value: acceptedFiles[0],
          onUpload: false,
          number: number !== undefined ? number : undefined,
        })
      }
    >
      {({ getRootProps, getInputProps }) => (
        <div
          className="h-90px w-full flex flex-col justify-center items-center bg-gray_shade-800 border-2 border-gray_shade-600 border-dashed cursor-pointer focus:outline-none"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <span className="text-14px text-gray_shade-200 font-iransans font-light">
            تصاویر اسلایدر را اینجا آپلود کنید
          </span>
          <span className="text-14px text-gray_shade-200 font-iransans font-light pt-3">
            ( سایز مناسب عکس 1326 در 442 پیکسل )
          </span>
        </div>
      )}
    </Dropzone>
  );
};
