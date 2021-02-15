import { FC } from 'react';
import { useClass, useUi, useDirection } from 'hooks';
import { FooterLayout } from './dependencies';

const FooterThird: FC<IFooter> = ({ item, layout = true, designState }) => {
  const { uiState } = useUi();
  const { container } = uiState;
  const { join, toggle } = useClass();
  const { flexDirection, marginRtl, marginLtr } = useDirection();

  return (
    <FooterLayout layout={layout} toggle={toggle}>
      <div>test</div>
    </FooterLayout>
  );
};

export default FooterThird;
