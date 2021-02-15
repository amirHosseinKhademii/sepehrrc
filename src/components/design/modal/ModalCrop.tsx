import { useEffect, useRef, useState } from 'react';
import { Modal, ButtonAction, Range } from 'components';
import { ICRedo, ICRotateHorizontal, ICRotateVertical } from 'icons';
import { useClass, useDesign, useUi, useDirection } from 'hooks';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

const ModalCrop = () => {
  const [isLoading, setisLoading] = useState(false);
  const [operations, setOperations] = useState({
    zoom: 0,
    rotate: 0,
  });
  const { designState, setImage } = useDesign();
  const { uiState, toggleSettingState } = useUi();
  const { toggle } = useClass();
  const cropperRef = useRef(null);
  const pageItem = designState.pageItems.find((item) => item.type === 'slider');
  const { number } = uiState.setting;
  const { marginRtl, paddingLtr } = useDirection();

  const handleSubmit = async () => {
    setisLoading(true);

    if (designState.pureImage.isBackground) {
      setImage({
        key: 'backgroundImage',
        payload: designState.pureImage.value,
      });
    } else {
      setImage({ key: 'value', payload: designState.pureImage.value });
      toggleSettingState({ type: 'dropZone', open: false });
    }
  };

  const ModalImage = ({ src }) => (
    <div className="relative w-full bg-gray-700">
      <img
        src={src}
        className="w-full h-557px object-cover object-center overflow-hidden"
        id="cropper"
        ref={cropperRef}
        style={{ maxWidth: '100%' }}
      />
    </div>
  );

  const ModalFooter = () => (
    <div
      className={`flex items-center w-full h-85px ${paddingLtr}-35px opacity-70 rounded-b`}
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
        onClick={() => handleSubmit()}
      >
        {isLoading ? 'در حال بارگزاری' : 'ذخیره تغییرات'}
      </ButtonAction>
      <div className="flex text-24px  text-white mx-10px">
        <ICRotateHorizontal className="fill-current mx-20px cursor-pointer" />
        <ICRotateVertical className="fill-current cursor-pointer" />
        <ICRedo className="fill-current mx-20px cursor-pointer" />
      </div>
      <Range
        title="چرخش تصویر"
        className={`w-370px ${marginRtl}-20px`}
        onChange={(value) => {}}
      />
      <Range
        title="زوم تصویر"
        unit="%"
        className={`w-370px ${marginRtl}-20px`}
        value={operations.zoom}
        onChange={(value) => {
          setOperations((prev) => ({ ...prev, zoom: parseInt(value) }));
        }}
      />
    </div>
  );

  useEffect(() => {
    setisLoading(false);
    const cropper = new Cropper(cropperRef.current, {
      initialAspectRatio: 16 / 9,
      crop(event) {},
      cropend: () => {
        // console.log(cropper.getCroppedCanvas().toDataURL());
      },
    });
  }, []);

  if (uiState.modal.editImage) {
    return (
      <Modal
        open={uiState.modal.open}
        style={{
          zIndex: 200,
          left: '20%',
          right: '20%',
          top: '15%',
        }}
      >
        <div className="flex flex-col">
          <ModalImage
            src={pageItem.images[number] ? pageItem.images[number].value : ''}
          />
          <ModalFooter />
        </div>
      </Modal>
    );
  } else if (designState.pureImage.value) {
    return (
      <Modal
        open={uiState.modal.open}
        style={{
          zIndex: 200,
          left: '20%',
          right: '20%',
          top: '15%',
        }}
      >
        <div className="flex flex-col">
          <ModalImage src={URL.createObjectURL(designState.pureImage.value)} />
          <ModalFooter />
        </div>
      </Modal>
    );
  } else return null;
};

export default ModalCrop;
