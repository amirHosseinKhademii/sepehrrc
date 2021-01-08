import { UIContext, uiTypes } from 'providers/ui-provider';
import { FC, useContext } from 'react';
import { ButtonAction } from './ButtonAction';
import { IButton } from './interfaces';

export const ButtonGroupDrawer: FC<IButton> = ({ onCancel, onSave }) => {
  const { uiDispatch } = useContext(UIContext);

  const onCancelClick = () => {
    uiDispatch({ type: uiTypes.DRAWER_CLOSE });
    // onCancel();
  };

  return (
    <div className="flex justify-between px-20px fixed bottom-0  mb-20px">
      <ButtonAction
        className="bg-gradient-200 mr-10px"
        text="ذخیره تغییرات"
        onClick={onSave}
      />
      <ButtonAction
        className="bg-gray_shade-400"
        text="لغو تغییرات"
        onClick={onCancelClick}
      />
    </div>
  );
};
