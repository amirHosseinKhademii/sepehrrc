import { DrawerLayout } from 'components';
import { StyleBoxFooter } from './dependencies/style-box-footer';

const Dashboard = ({ designState }) => {
  const BaseSettings = () => {
    return (
      <div className="flex flex-col items-end pt-30px px-20px">
        <StyleBoxFooter />
      </div>
    );
  };

  return (
    <DrawerLayout>
      <BaseSettings />
    </DrawerLayout>
  );
};

export default Dashboard;
