import { HeaderDrawer, DrawerLayout, ReactChipInput } from 'components';
import {
  BackgroundColor,
  TitleInput,
  ResponsiveSwitchs,
  GenericUploader,
} from '../common';
import {
  CategoryDrop,
  ColRowListSetting,
  ShowDrop,
  ScreenButtonGroup,
  PageButtonGroup,
  ColSliderSetting,
} from './dependencies';
import { FC, memo, useState } from 'react';
import { useDirection } from 'hooks';

const ProductDashboard: FC<IDashboard> = memo(({ designState }) => {
  const { language } = useDirection();
  const isList = designState.current.settings?.screen === 'list';

  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px overflow-auto">
        <TitleInput />
        <CategoryDrop />
        <ScreenButtonGroup />
        {isList ? (
          <>
            <ColRowListSetting />
            <PageButtonGroup />
          </>
        ) : (
          <ColSliderSetting />
        )}
        <GenericUploader
          text="انتخاب کنید"
          className="mt-30px"
          isBackground
          withSwitch
        />
        <BackgroundColor withSwitch className="mt-30px" />
        <ResponsiveSwitchs className="mb-50px mt-30px" />
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
