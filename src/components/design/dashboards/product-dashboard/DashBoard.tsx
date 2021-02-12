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

const ProductDashboard: FC<IDashboard> = memo(({ designState }) => {
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
        <GenericUploader label="تصویر زمینه" text="انتخاب کنید" isBackground />
        <BackgroundColor />
        <ResponsiveSwitchs />
      </div>
    );
  };

  return (
    <DrawerLayout>
      <HeaderDrawer setting text=" تنظیمات  لیست محصولات " />
      <BaseSettings />
    </DrawerLayout>
  );
});

export default ProductDashboard;
