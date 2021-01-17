import { Modal, ButtonAction } from 'components';
import { useDesign, useUi } from 'hooks';

export const ModalCrop = () => {
  const { uiState } = useUi();
  const { designState, setImage } = useDesign();
  if (designState.pureImage.value)
    return (
      <Modal open={uiState.modal.open}>
        <div className="flex flex-col">
          <div className="relative w-full bg-gray-700">
            <img
              src={URL.createObjectURL(designState.pureImage.value)}
              className="w-full h-557px object-cover object-center overflow-hidden"
            />
          </div>
          <div className="flex items-center w-full h-85px pl-35px bg-gray-800">
            <ButtonAction
              text="ذخیره تغییرات"
              className="  bg-primary-600"
              onClick={() => setImage(designState.pureImage.value)}
            />
          </div>
        </div>
      </Modal>
    );
  else return null;
};
