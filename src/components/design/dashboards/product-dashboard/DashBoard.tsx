import { HeaderDrawer, DrawerLayout } from 'components';
import {
  BackgroundColor,
  TitleInput,
  ResponsiveSwitchs,
  GenericUploader,
} from '../common';
import {
  CategoryDrop,
  GridDrops,
  ShowDrop,
  ScreenButtonGroup,
  PageButtonGroup,
  SliderDrops,
} from './dependencies';
import { FC, memo } from 'react';
import { useDirection } from 'hooks';

const ProductDashboard: FC<IDashboard> = memo(({ designState }) => {
  const { language } = useDirection();
  const isList = designState.current.settings?.screen === 'list';

  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px overflow-auto">
        <TitleInput />
        <CategoryDrop />
        <ShowDrop />
        <ScreenButtonGroup />
        {isList ? (
          <>
            <GridDrops />
            <PageButtonGroup />
          </>
        ) : (
          <SliderDrops />
        )}
        <GenericUploader
          label={language.PDBackgroundImage}
          text={language.PDChoose}
          isBackground
        />
        <BackgroundColor />
        <ResponsiveSwitchs />
      </div>
    );
  };

  return (
    <DrawerLayout>
      <HeaderDrawer setting text={language.PProductListSettings} />
      <BaseSettings />
    </DrawerLayout>
  );
});

export default ProductDashboard;
