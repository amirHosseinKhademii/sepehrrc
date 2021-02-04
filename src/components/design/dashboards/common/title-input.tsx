import { Input } from 'components';
import { useDesign } from 'hooks';

export const TitleInput = () => {
  const { setSetting, designState } = useDesign();
  return (
    <Input
      label="عنوان بخش"
      onBlur={(e) =>
        e.target.value !== '' && setSetting({ title: e.target.value })
      }
      placeholder={
        designState.current.settings && designState.current.settings.title
          ? designState.current.settings.title
          : 'عنوان بخش'
      }
    />
  );
};
