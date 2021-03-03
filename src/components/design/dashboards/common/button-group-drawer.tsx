import { uiTypes } from 'providers/ui-provider';
import { FC } from 'react';
import { ButtonAction } from 'components';
import { useUi, useDirection } from 'hooks';

export const ButtonGroupDrawer: FC<IButton> = ({ onCancel, onSave }) => {
  const { toggleDrawer } = useUi();
  const { marginLtr, flexDirection, language } = useDirection();

  const onCancelClick = () => {
    if (onCancel) {
      onCancel();
    } else toggleDrawer({ type: '', open: false });
  };

  return (
    <div
      className={`flex ${flexDirection} justify-between px-20px fixed bottom-0  mb-20px`}
    >
      <ButtonAction
        className={`bg-gradient-200 ${marginLtr}-10px`}
        onClick={onSave}
      >
        {language.DCSaveChanges}
      </ButtonAction>
      <ButtonAction className="bg-gray_shade-400" onClick={onCancelClick}>
        {language.DCCancelChanges}{' '}
      </ButtonAction>
    </div>
  );
};
