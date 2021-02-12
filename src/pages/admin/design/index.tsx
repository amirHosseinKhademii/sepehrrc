import { memo } from 'react';
import { StoreFrontDesignContainer } from 'containers';
import { DesignLayout } from 'components';

const index = memo(() => {
  return (
    <DesignLayout>
      <StoreFrontDesignContainer />
    </DesignLayout>
  );
});

export default index;
