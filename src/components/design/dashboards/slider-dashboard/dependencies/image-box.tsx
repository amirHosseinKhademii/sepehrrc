import { Fragment } from 'react';
import { useDesign, useUi } from 'hooks';
import { Text } from 'components';
import { ICEditSettings, ICCropAlt } from 'icons';
import { DndUploadBox } from '../../common/';
import Dropzone, { useDropzone } from 'react-dropzone';

export const ImageBox = () => {
  const { designState, setPureImage } = useDesign();
  const { toggleModal, uiState } = useUi();
  const { images } = designState.current;
  const { number } = uiState.setting;

  return (
    <Fragment>
      {designState.pureImage.onUpload ? (
        <DndUploadBox
          number={number}
          placeholder={{
            text: 'تصاویر اسلایدر را اینجا آپلود کنید',
            width: 1326,
            height: 442,
          }}
        />
      ) : (
        <>
          <img
            className="w-full h-90px rounded"
            src={images[number] ? images[number].value : ''}
          />
          <div className="w-full flex justify-between  mt-9px">
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
                  className={`flex items-center mr-auto focus:outline-none`}
                >
                  <input {...getInputProps()} />
                  <Text
                    className="text-14px text-gray_shade-300 pr-12px cursor-pointer"
                    // onClick={() => setPureImage({ onUpload: true, number })}
                  >
                    ویرایش تصویر
                  </Text>
                  <ICEditSettings fill="#fff" />
                </div>
              )}
            </Dropzone>
            <div className="flex items-center ">
              <Text
                className="text-14px text-gray_shade-300 pr-12px cursor-pointer"
                onClick={() =>
                  toggleModal({ open: true, editImage: true, type: 'image' })
                }
              >
                برش تصویر
              </Text>
              <ICCropAlt fill="#fff" />
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};
