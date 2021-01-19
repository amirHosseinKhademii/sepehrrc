import { useEffect, useRef, useState } from 'react';
import { Modal, ButtonAction, InputSlider } from 'components';
import { ICRedo, ICRotateHorizontal, ICRotateVertical } from 'icons';
import { useClass, useDesign, useUi } from 'hooks';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

export const ModalCrop = () => {
  const [isLoading, setisLoading] = useState(false);
  const { designState, setImage } = useDesign();
  const { uiState } = useUi();
  const { toggle } = useClass();
  const cropperRef = useRef(null);

  const ModalImage = () => (
    <div className="relative w-full bg-gray-700">
      <img
        src={URL.createObjectURL(designState.pureImage.value)}
        className="w-full h-557px object-cover object-center overflow-hidden"
        id="cropper"
        ref={cropperRef}
        style={{ maxWidth: '100%' }}
      />
    </div>
  );

  const ModalFooter = () => (
    <div
      className="flex items-center w-full h-85px pl-35px opacity-70"
      style={{ backgroundColor: '#1a191d    ' }}
    >
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
      <div className="flex text-24px  text-white mx-20px">
        <ICRotateHorizontal className="fill-current mx-20px cursor-pointer" />
        <ICRotateVertical className="fill-current cursor-pointer" />
        <ICRedo className="fill-current mx-20px cursor-pointer" />
      </div>
      <InputSlider title="چرخش تصویر" className="w-378px mr-20px" />
      <InputSlider title="زوم تصویر" unit="%" className="w-378px" />
    </div>
  );

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
          <ModalImage />
          <ModalFooter />
        </div>
      </Modal>
    );
  else return null;
};
