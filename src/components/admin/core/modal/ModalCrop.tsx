import { Modal, ButtonAction } from 'components';
import { useState, useCallback } from 'react';
import { useDesign, useUi } from 'hooks';
import { url } from 'inspector';
import Cropper from 'react-easy-crop';
import GetCroppedImg from './GetCroppedImg';

export const ModalCrop = () => {
  const { uiState } = useUi();
  const { designState, setImage } = useDesign();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    console.log(croppedArea);
    console.log(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      // const croppedImage = await GetCroppedImg(
      //   URL.createObjectURL(designState.pureImage.value),
      //   croppedAreaPixels,
      //   rotation
      // );
      // console.log('donee', { croppedImage });
      // setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  if (designState.pureImage.value)
    return (
      <Modal open={uiState.modal.open}>
        <div className="flex flex-col">
          <div className="relative w-full h-96 bg-gray-700">
            <Cropper
              image={URL.createObjectURL(designState.pureImage.value)}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
            {/* <img
              src={URL.createObjectURL(designState.pureImage.value)}
              className="w-full h-557px object-cover object-center overflow-hidden"
            /> */}
          </div>
          <div className="flex items-center w-full h-85px pl-35px bg-gray-800">
            <button onClick={() => showCroppedImage()}>Show Result</button>
            <ButtonAction
              text="ذخیره تغییرات"
              className="  bg-primary-600"
              onClick={() => setImage(croppedImage)}
            />
          </div>
        </div>
      </Modal>
    );
  else return null;
};
