import { Draggable, Container, smoothDnD } from 'react-smooth-dnd';
import { useDesign } from 'hooks';
import { DrawerLayout } from 'components';
import { ButtonDrawer, ButtonGroupDrawer, HeaderDrawer } from '../common';
import { ICProductList, ICSlider, ICText } from 'icons';

const AddDashboard = () => {
  const { designState, setChildPayload } = useDesign();

  const AddItemIC = (type) => {
    switch (type) {
      case 'slider':
        return <ICSlider />;
      case 'products':
        return <ICProductList />;
      case 'banner':
        return <ICProductList />;
      case 'text':
        return <ICText />;
      default:
        return <ICSlider />;
    }
  };

  const AddParts = () => (
    <div className="flex flex-col items-center px-20px pt-30px">
      <Container
        groupName="ADMIN_DESIGN"
        getChildPayload={(index) =>
          setChildPayload(index, designState.menuItems)
        }
        style={{ width: 270 }}
        behaviour="copy"
        onDragEnd={() => smoothDnD.cancelDrag()}
        removeOnDropOut
      >
        {(designState.menuItems || [])
          .filter((item) => item.type !== 'header')
          .filter((item) => item.type !== 'footer')
          .map((item, index) => (
            <Draggable key={index}>
              <ButtonDrawer
                text={item.title}
                className="mb-25px cursor-move"
                withIcon
              >
                {AddItemIC(item.type)}
              </ButtonDrawer>
            </Draggable>
          ))}
      </Container>
    </div>
  );
  return (
    <DrawerLayout>
      <HeaderDrawer />
      <AddParts />
      <ButtonGroupDrawer />
    </DrawerLayout>
  );
};

export default AddDashboard;
