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
} from './dependencies';
import { FC, memo } from 'react';

export const ProductDashboard: FC<IDashboard> = memo(({ designState }) => {
  const isSlider = designState.current.settings?.screen !== 'slider';

  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px overflow-auto">
        <TitleInput />
        <CategoryDrop />
        <ShowDrop />
        <ScreenButtonGroup />
        {isSlider && (
          <>
            <GridDrops />
            <PageButtonGroup />
          </>
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
