import { uiTypes } from 'providers/ui-provider';
import { FC } from 'react';
import { ButtonAction } from 'components';
import { useUi } from 'hooks';

export const ButtonGroupDrawer: FC<IButton> = ({ onCancel, onSave }) => {
  const { toggleDrawer } = useUi();

  const onCancelClick = () => {
    if (onCancel) {
      onCancel();
    } else toggleDrawer({ type: '', open: false });
  };

  return (
    <div className="flex justify-between px-20px fixed bottom-0  mb-20px">
      <ButtonAction className="bg-gradient-200 mr-10px" onClick={onSave}>
        ذخیره تغییرات
      </ButtonAction>
      <ButtonAction className="bg-gray_shade-400" onClick={onCancelClick}>
        لغو تغییرات
      </ButtonAction>
    </div>
  );
};
