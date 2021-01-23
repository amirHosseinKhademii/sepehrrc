import { Input } from 'components';
import { useDesign } from 'hooks';

export const TitleInput = () => {
  const { setProps, designState } = useDesign();

  return (
    <Input
      label="عنوان بخش"
      onBlur={(e) => setProps({ key: 'title', value: e.target.value })}
      placeholder={designState.current.title}
    />
  );
};
