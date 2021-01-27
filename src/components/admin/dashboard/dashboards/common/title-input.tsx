import { Input } from 'components';
import { useDesign } from 'hooks';

export const TitleInput = () => {
  const { setSetting, designState } = useDesign();
  return (
    <Input
      label="عنوان بخش"
      onBlur={(e) => setSetting({ title: e.target.value })}
      placeholder={designState.current.title}
    />
  );
};
