import { useContext } from 'react';
import { UIContext } from 'providers/ui-provider';

export const DrawerMenu = () => {
  const { state } = useContext(UIContext);

  return (
    <div
      className={`w-216px h-216px absolute right-68px top-0 bg-clr_gray_shade-800 ${
        state.drawer.menu ? 'block' : 'hidden'
      }`}
    >
      sdsd
    </div>
  );
};
