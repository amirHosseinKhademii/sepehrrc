import React from 'react';
import { useUi, useDesign } from 'hooks';
import { BorderShadow } from 'components';

export const HeaderLayout = ({ children }) => {
  const { designState } = useDesign();
  const { uiState } = useUi();
  const { pageSettings } = designState;
  return (
    <BorderShadow
      active={
        uiState.drawer.style &&
        designState.current.type == 'header' &&
        'HEADER' == designState.current.uuid
          ? true
          : false
      }
    >
      <div
        className={`bg-white shadow-custom-1 font-${pageSettings.textFont}`}
        style={{ color: `${pageSettings.secondary}` }}
      >
        {children}{' '}
      </div>
    </BorderShadow>
  );
};
