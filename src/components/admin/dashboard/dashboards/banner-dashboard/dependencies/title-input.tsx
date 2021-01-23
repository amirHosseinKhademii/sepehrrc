import { Input } from 'components';
import { useDesign } from 'hooks';

export const TitleInput = () => {
  const { setProps, designState } = useDesign();
  return (
    <Input
      className="mb-30px"
      label="عنوان بخش"
      variant="input"
      onBlur={(e) => setProps({ key: 'title', value: e.target.value })}
      placeholder={designState.current.title}
    />
  );
};
