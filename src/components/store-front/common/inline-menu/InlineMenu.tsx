import { InlineMenuLayout, InlineMenuItem } from './dependencies';
import { useDesign } from 'hooks';

export const InlineMenu = ({ data }) => {
  const { designState, setSetting } = useDesign();
  const { theme } = designState.pageSettings;
  const layout = theme === 'default' ? true : false;

  const handleClick = (e, item) => {
    e.stopPropagation();
    // setSetting({ activeTab: true });
  };
  return (
    <InlineMenuLayout>
      {data.map((item) => (
        <InlineMenuItem
          key={item.id}
          title={item.title}
          onClick={(e) => handleClick(e, item)}
          designState={designState}
          layout={layout}
        />
      ))}
    </InlineMenuLayout>
  );
};
