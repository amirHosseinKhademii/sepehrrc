import { DrawerLayout } from 'components/admin/layouts';
import { HeaderDrawer } from 'components';
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
import { useDesign } from 'hooks';

export const ProductDashboard = () => {
  const { designState } = useDesign();
  const displayInList = designState.current.settings?.screen !== 'slider';
  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px overflow-auto">
        <TitleInput />
        <CategoryDrop />
        <ShowDrop />
        <ScreenButtonGroup />
        {displayInList && (
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
};
