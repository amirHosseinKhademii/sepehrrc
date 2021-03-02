import { DrawerLayout } from 'components';
import { ButtonGroupDrawer, HeaderDrawer } from '../common';
import { useDesign } from 'hooks';
import { useState } from 'react';
import { ColorSetting, FontSetting, LanguageDrop } from './dependencies';

const SettingsDashboard = () => {
  const { onPageSetting, designState } = useDesign();
  const [color, setColor] = useState({
    type: '',
    open: false,
  });

  return (
    <DrawerLayout>
      <HeaderDrawer setting />
      <ColorSetting
        designState={designState}
        color={color}
        setColor={setColor}
        onPageSetting={onPageSetting}
      />
      <FontSetting designState={designState} onPageSetting={onPageSetting} />
      <ButtonGroupDrawer />
      <LanguageDrop />
    </DrawerLayout>
  );
};

export default SettingsDashboard;
