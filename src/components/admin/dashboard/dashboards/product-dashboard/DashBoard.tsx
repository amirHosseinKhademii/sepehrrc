import { DrawerLayout } from 'components/admin/layouts';
import { HeaderDrawer, ButtonGroupDrawer } from 'components';
import {
  CategoryDrop,
  GridDrops,
  ShowDrop,
  TitleInput,
  ScreenButtonGroup,
  PageButtonGroup,
  ImageUploader,
  BackgroundColor,
  ResponsiveSwitchs,
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
        <ImageUploader />
        <BackgroundColor />
        <ResponsiveSwitchs />
      </div>
    );
  };

  return (
    <DrawerLayout>
      <HeaderDrawer setting text=" تنظیمات  لیست محصولات " />
      <BaseSettings />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};
