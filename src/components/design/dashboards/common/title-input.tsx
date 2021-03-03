import { Input, Switch } from 'components';
import { useDesign, useDirection } from 'hooks';
import { Fragment } from 'react';

export const TitleInput = () => {
  const { setSetting, designState } = useDesign();
  const { language } = useDirection();
  const { settings } = designState.current;
  return (
    <Fragment>
      <Switch
        label={language.DCSectionTitle}
        className=""
        onClick={() =>
          setSetting({ title: settings.title ? !settings.title : true })
        }
        checked={settings.title}
      />
      {settings.title && (
        <Input
          onBlur={(e) =>
            e.target.value !== '' && setSetting({ title: e.target.value })
          }
          placeholder={
            designState.current.settings && designState.current.settings.title
              ? designState.current.settings.title
              : language.DCSectionTitle
          }
          className="mt-14px"
        />
      )}
    </Fragment>
  );
};
