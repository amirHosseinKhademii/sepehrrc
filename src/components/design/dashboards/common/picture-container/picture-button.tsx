import { FC } from 'react';
import { useDesign, useUi, useDirection } from 'hooks';
import Dropzone from 'react-dropzone';
import { ICPlus, ICMultiply } from 'icons';

export const PictureButton: FC<IPictureButton> = ({
  withAdd,
  picture,
  number,
}) => {
  const { setPureImage, deleteImage } = useDesign();
  const { toggleSettingState, toggleModal } = useUi();
  const { rightTL } = useDirection();

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
      <div className="cover relative rounded ">
        <img
          onClick={() =>
            toggleSettingState({ type: 'picture', number, open: true })
          }
          className="coverImage w-full h-60px rounded border-primary-700 cursor-pointer"
          src={picture}
        />
        <div
          className={`delIcon h-14px w-14px flex justify-center items-center absolute -top-1 -${rightTL}-1 bg-alert-300 rounded-full cursor-pointer opacity-0`}
        >
          <ICMultiply
            onClick={() =>
              toggleModal({
                open: true,
                type: 'confirm',
                target: 'image',
                number,
              })
            }
            fill="white"
            width="10px"
            height="10px"
          />
        </div>
      </div>
    );
  else
    return (
      <div className="h-60px flex rounded bg-gray_shade-800 opacity-30"></div>
    );
};
