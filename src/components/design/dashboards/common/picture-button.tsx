import { FC } from 'react';
import { useDesign, useUi } from 'hooks';
import Dropzone, { useDropzone } from 'react-dropzone';
import { ICPlus, ICTimesCircle } from 'icons';

export const PictureButton: FC<IPictureButton> = ({
  withAdd,
  picture,
  number,
}) => {
  const { setPureImage, deleteImage } = useDesign();
  const { toggleSettingState } = useUi();

  if (withAdd)
    return (
      <Dropzone
        multiple
        maxFiles={8}
        noDrag
        onDrop={(acceptedFiles) =>
          setPureImage({
            value: acceptedFiles[0],
            onUpload: false,
            number: number !== undefined ? number : undefined,
            isBackground: false,
          })
        }
      >
        {({ getRootProps, getInputProps, isDragAccept }) => (
          <div
            {...getRootProps()}
            className={`w-full h-60px flex justify-center items-center rounded ${
              isDragAccept ? 'bg-primary-700' : 'bg-gray_shade-800'
            } cursor-pointer focus:outline-none`}
          >
            <input {...getInputProps()} />
            <ICPlus fill="#fff" />
          </div>
        )}
      </Dropzone>
    );
  else if (picture)
    return (
      <div className="relative cover">
        <img
          onClick={() =>
            toggleSettingState({ type: 'picture', number, open: true })
          }
          className=" w-full h-60px rounded cursor-pointer"
          src={picture}
        />
        <ICTimesCircle
          onClick={() => deleteImage(number)}
          className="delIcon absolute top-1 right-1 cursor-pointer opacity-0"
          fill="#ed1c24"
        />
      </div>
    );
  else
    return (
      <div className="h-60px flex rounded bg-gray_shade-800 opacity-30"></div>
    );
};
