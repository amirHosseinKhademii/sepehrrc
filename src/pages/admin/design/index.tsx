import { Design } from 'containers';
import { DesignLayout } from 'components/admin/layouts';
import { Slider } from 'components';

const index = () => {
  return (
    <DesignLayout>
      <Slider />
      <Design />
    </DesignLayout>
  );
};

export default index;
