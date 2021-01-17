import { UIContext, uiTypes } from 'providers/ui-provider';
import { FC, useContext } from 'react';
import { ButtonAction } from '../../button/ButtonAction';
import { IButton } from '../../button/interfaces';

export const ButtonGroupDrawer: FC<IButton> = ({ onCancel, onSave }) => {
  const { uiDispatch } = useContext(UIContext);

  const onCancelClick = () => {
    uiDispatch({ type: uiTypes.DRAWER_CLOSE });
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
