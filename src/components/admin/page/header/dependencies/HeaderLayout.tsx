import { useDesign } from 'hooks';

export const HeaderLayout = ({ children }) => {
  const { designState } = useDesign();
  const { pageSettings } = designState;

  return (
    <div
      className={`bg-white shadow-custom-1 font-${pageSettings.textFont}`}
      style={{ color: `${pageSettings.secondary}` }}
    >
      {children}
    </div>
  );
};
