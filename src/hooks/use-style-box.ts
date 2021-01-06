import { useState } from 'react';

export const useStyleBox = () => {
  const [styleBoxState, setStyleBoxState] = useState({
    open: false,
    variation: 'first',
  });
  return {
    styleBoxState,
    onEditClick: () => {
      setStyleBoxState((prev) => ({ ...prev, open: !prev.open }));
    },
    onSelect: (variation) => {
      setStyleBoxState((prev) => ({ ...prev, variation, open: false }));
    },
  };
};
