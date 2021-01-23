import { BorderShadow } from 'components';
import { useClass, useDesign, useUi } from 'hooks';

export const BannerLayout = ({ children, className, onClick, item }) => {
  const { join } = useClass();
  const { designState } = useDesign();
  const { uiState } = useUi();

  return (
    <BorderShadow
      active={
        uiState.drawer.style &&
        designState.current.type == 'banner' &&
        item.uuid == designState.current.uuid
          ? true
          : false
      }
    >
      <div
        className={join(
          'grid gap-x-20px   h-full container mx-auto p-20px ',
          className
        )}
      >
        {children}
      </div>
    </BorderShadow>
  );
};
