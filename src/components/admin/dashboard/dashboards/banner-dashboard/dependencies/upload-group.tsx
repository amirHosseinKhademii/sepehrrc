import { FC, Fragment, memo } from 'react';
import { GenericUploader } from '../../common';

export const UploadButtonGroup: FC<IBannerDashboard> = memo(
  ({ designState }) => {
    switch (designState.current.settings.style) {
      case 'first':
        return (
          <Fragment>
            <GenericUploader
              label="تصویر 1"
              text="انتخاب کنید"
              number="one"
              className="my-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 2"
              text="انتخاب کنید"
              number="two"
              className="mb-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 3"
              text="انتخاب کنید"
              number="three"
              className="mb-122px"
              withNewTab
              withLink
            />
          </Fragment>
        );
      case 'second':
        return (
          <Fragment>
            <GenericUploader
              label="تصویر 1"
              text="انتخاب کنید"
              number="one"
              className="my-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 2"
              text="انتخاب کنید"
              number="two"
              className="mb-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 3"
              text="انتخاب کنید"
              number="three"
              className="mb-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 4"
              text="انتخاب کنید"
              number="four"
              className="mb-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 5"
              text="انتخاب کنید"
              number="five"
              className="mb-122px"
              withNewTab
              withLink
            />
          </Fragment>
        );
      case 'third':
        return (
          <Fragment>
            <GenericUploader
              label="تصویر 1"
              text="انتخاب کنید"
              number="one"
              className="my-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 2"
              text="انتخاب کنید"
              number="two"
              className="mb-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 3"
              text="انتخاب کنید"
              number="three"
              className="mb-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 4"
              text="انتخاب کنید"
              number="four"
              className="mb-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 5"
              text="انتخاب کنید"
              number="five"
              className="mb-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 6"
              text="انتخاب کنید"
              number="six"
              className="mb-122px"
              withNewTab
              withLink
            />
          </Fragment>
        );
      case 'forth':
        return (
          <Fragment>
            <GenericUploader
              label="تصویر 1"
              text="انتخاب کنید"
              number="one"
              className="my-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 2"
              text="انتخاب کنید"
              number="two"
              className="mb-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 3"
              text="انتخاب کنید"
              number="three"
              className="mb-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 4"
              text="انتخاب کنید"
              number="four"
              className="mb-122px"
              withNewTab
              withLink
            />
          </Fragment>
        );
      case 'fifth':
        return (
          <Fragment>
            <GenericUploader
              label="تصویر 1"
              text="انتخاب کنید"
              number="one"
              className="my-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 2"
              text="انتخاب کنید"
              number="two"
              className="mb-122px"
              withNewTab
              withLink
            />
          </Fragment>
        );
      case 'sixth':
        return (
          <Fragment>
            <GenericUploader
              label="تصویر 1"
              text="انتخاب کنید"
              number="one"
              className="my-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 2"
              text="انتخاب کنید"
              number="two"
              className="mb-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 3"
              text="انتخاب کنید"
              number="three"
              className="mb-122px"
              withNewTab
              withLink
            />
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <GenericUploader
              label="تصویر 1"
              text="انتخاب کنید"
              number="one"
              className="my-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 2"
              text="انتخاب کنید"
              number="two"
              className="mb-30px"
              withNewTab
              withLink
            />
            <GenericUploader
              label="تصویر 3"
              text="انتخاب کنید"
              number="three"
              className="mb-122px"
              withNewTab
              withLink
            />
          </Fragment>
        );
    }
  }
);
