import { FC } from 'react';
import { useDesign, useUi, useDirection } from 'hooks';
import Dropzone from 'react-dropzone';
import { ICPlus, ICMultiply, ICEditPen } from 'icons';

export const PictureButton: FC<IPictureButton> = ({
  withAdd,
  picture,
  number,
}) => {
  const { setPureImage } = useDesign();
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
          className="coverImage w-full h-60px rounded border-primary-700 cursor-pointer"
          src={picture}
        />
        <div
          className={`delIcon h-14px w-14px flex justify-center items-center absolute -top-1 -${rightTL}-1 bg-alert-300 rounded-full z-20 cursor-pointer opacity-0`}
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
            className="cursor-pointer"
          />
        </div>
        <div
          className={`editIconBox flex justify-center items-center absolute  inset-x-0 inset-y-0 mx-auto bg-primary-700 rounded z-10 opacity-0`}
        />
        <div className="editIcon w-full h-full flex justify-center items-center absolute inset-x-0 inset-y-0 mx-auto z-20 opacity-0">
          <ICEditPen
            onClick={() =>
              toggleSettingState({ type: 'picture', number, open: true })
            }
            fill="white"
            className="text-16px cursor-pointer"
          />
        </div>
      </div>
    );
  else
    return (
      <div className="h-60px flex rounded bg-gray_shade-800 opacity-30"></div>
    );
};
