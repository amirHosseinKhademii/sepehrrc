import { Modal, Text, ButtonAction } from 'components';
import { useDesign, useUi, useDirection } from 'hooks';
import { ICWarning } from 'icons';
const ModalConfirm = () => {
  const { uiState, toggleModal } = useUi();
  const { deleteImage, onDeleteItem } = useDesign();
  const { marginRtl } = useDirection();

  return (
    <Modal
      style={{
        zIndex: 200,
        left: '35%',
        right: '35%',
        top: '35%',
      }}
      open={uiState.modal.open}
    >
      <div className=" w-422px h-295px bg-white rounded flex flex-col items-center">
        <ICWarning className="mt-52px" />
        <Text className="text-warning-700 text-18px pt-32px text-center px-45px">
          {uiState.modal.target === 'image'
            ? ` این عکس به همراه تنظیمات آن حذف خواهد شد آیا برای حذف عکس مطمئن هستید
          ؟`
            : ` این بخش به همراه تنظیمات آن حذف خواهد شد آیا برای حذف بخش مطمئن هستید
          ؟`}
        </Text>
        <div className="flex justify-between px-20px mb-20px mt-35px">
          <ButtonAction
            className={`bg-white ${marginRtl}-10px text-gray_shade-400  border-gray_shade-400 border-2`}
            onClick={() => {
              if (uiState.modal.target === 'image') {
                deleteImage(uiState.modal.number);
              } else {
                onDeleteItem(uiState.modal.number);
              }
              toggleModal({ type: '', open: false });
            }}
          >
            بله حذف شود
          </ButtonAction>
          <ButtonAction
            className="bg-gray_shade-400"
            onClick={() => toggleModal({ type: '', open: false })}
          >
            لغو تغییرات
          </ButtonAction>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
