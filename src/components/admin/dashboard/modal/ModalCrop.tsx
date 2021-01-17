import { useEffect, useRef, useState } from 'react';
import { Modal, ButtonAction } from 'components';
import { useClass, useDesign, useUi } from 'hooks';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

export const ModalCrop = () => {
  const cropperRef = useRef(null);
  const { uiState } = useUi();
  const { toggle } = useClass();
  const { designState, setImage } = useDesign();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(false);
    const cropper = new Cropper(cropperRef.current, {
      initialAspectRatio: 16 / 9,
      crop(event) {},
      cropend: () => {
        console.log(cropper.getCroppedCanvas().toDataURL());
      },
    });
  }, []);

  if (designState.pureImage.value)
    return (
      <Modal open={uiState.modal.open}>
        <div className="flex flex-col">
          <div className="relative w-full bg-gray-700">
            <img
              src={URL.createObjectURL(designState.pureImage.value)}
              className="w-full h-557px object-cover object-center overflow-hidden"
              id="cropper"
              ref={cropperRef}
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div className="flex items-center w-full h-85px pl-35px bg-gray-800">
            <ButtonAction
              className={toggle(
                '',
                'opacity-30 bg-gray-500',
                isLoading,
                'bg-primary-600'
              )}
              disabled={isLoading}
              onClick={() => {
                setisLoading(true);
                setImage(designState.pureImage.value);
              }}
            >
              {isLoading ? 'در حال بارگزاری' : 'ذخیره تغییرات'}
            </ButtonAction>
          </div>
        </div>
      </Modal>
    );
  else return null;
};
