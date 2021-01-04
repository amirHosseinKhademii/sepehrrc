import { Design } from 'containers';
import { DesignLayout } from 'components/admin/layouts';
import { Slider } from 'components/admin/core/';

const index = () => {
  return (
    <DesignLayout>
      <Slider />
      <Design />
    </DesignLayout>
  );
};

export default index;
