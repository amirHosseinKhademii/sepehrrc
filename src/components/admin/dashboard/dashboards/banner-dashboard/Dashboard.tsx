import { Fragment } from 'react';
import { DrawerLayout } from 'components/admin/layouts';
import { useDesign } from 'hooks';
import { StyleBoxBanner, HeaderDrawer, ButtonGroupDrawer } from 'components';
import { ImageUploader } from './dependencies';
import { TitleInput } from '../common';

export const BannerDashboard = () => {
  const { designState } = useDesign();

  const UploadButtonGroup = () => {
    switch (designState.current.settings.style) {
      case 'first':
        return (
          <Fragment>
            <ImageUploader label="تصویر 1" number="one" />
            <ImageUploader label="تصویر 2" number="two" />
            <ImageUploader
              label="تصویر 3"
              number="three"
              className="mb-122px"
            />
          </Fragment>
        );
      case 'second':
        return (
          <Fragment>
            <ImageUploader label="تصویر 1" number="one" />
            <ImageUploader label="تصویر 2" number="two" />
            <ImageUploader label="تصویر 3" number="three" />
            <ImageUploader label="تصویر 4" number="four" />
            <ImageUploader label="تصویر 5" number="five" className="mb-122px" />
          </Fragment>
        );
      case 'third':
        return (
          <Fragment>
            <ImageUploader label="تصویر 1" number="one" />
            <ImageUploader label="تصویر 2" number="two" />
            <ImageUploader label="تصویر 3" number="three" />
            <ImageUploader label="تصویر 4" number="four" />
            <ImageUploader label="تصویر 5" number="five" />
            <ImageUploader label="تصویر 6" number="six" className="mb-122px" />
          </Fragment>
        );
      case 'forth':
        return (
          <Fragment>
            <ImageUploader label="تصویر 1" number="one" />
            <ImageUploader label="تصویر 2" number="two" />
            <ImageUploader label="تصویر 3" number="three" />
            <ImageUploader label="تصویر 4" number="four" className="mb-122px" />
          </Fragment>
        );
      case 'fifth':
        return (
          <Fragment>
            <ImageUploader label="تصویر 1" number="one" />
            <ImageUploader label="تصویر 2" number="two" className="mb-122px" />
          </Fragment>
        );
      case 'sixth':
        return (
          <Fragment>
            <ImageUploader label="تصویر 1" number="one" />
            <ImageUploader label="تصویر 2" number="two" />
            <ImageUploader
              label="تصویر 3"
              number="three"
              className="mb-122px"
            />
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <ImageUploader label="تصویر 1" number="one" />
            <ImageUploader label="تصویر 2" number="two" />
            <ImageUploader
              label="تصویر 3"
              number="three"
              className="mb-122px"
            />
          </Fragment>
        );
    }
  };

  const BaseSettings = () => (
    <div className="flex flex-col items-end pt-30px px-20px">
      <TitleInput />
      <StyleBoxBanner />
      <UploadButtonGroup />
    </div>
  );

  return (
    <DrawerLayout>
      <HeaderDrawer setting text="تنظیمات بنر تبلیغاتی" />
      <BaseSettings />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};
