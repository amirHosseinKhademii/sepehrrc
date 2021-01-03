import { ButtonDrawer  } from 'components';
import { FC,useState } from 'react';
import {Draggable ,Container} from'react-smooth-dnd' ;
import {applyDrag} from 'utils'
interface IDrawerItems {
  children?: any;
}

const allButtons : {id:number,text:string,withSetting:boolean,withDelete:boolean}[] = [

  {
    id:0,
    text:"هدر - استایل ۱"  ,
    withDelete:false,
    withSetting:true,
  },
  {
    id:0,
    text:"اسلایدر - استایل ۱"  ,
    withDelete:true,
    withSetting:true,
  },
  {
    id:0,
    text:"بنر ستونی - استایل 3"  ,
    withDelete:true,
    withSetting:true,
  },
  {
    id:0,
    text:"لیست محصولات - استایل 3"  ,
    withDelete:true,
    withSetting:true,
  },
  {
    id:0,
    text:"متن - استایل ۱"  ,
    withDelete:true,
    withSetting:true,
  },
  {
    id:0,
    text:"لیست اخبار - استایل 5"  ,
    withDelete:true,
    withSetting:true,
  },
  {
    id:0,
    text:"دکمه فراخوان - استایل 3"  ,
    withDelete:true,
    withSetting:true,
  },
  {
    id:0,
    text:"فوتر - استایل 2"  ,
    withDelete:false,
    withSetting:true,
  },



]
const childPayloadHandler= (index,arr)=>{

    return arr.filter((item,i)=>((i === index)))[0];

}
  export const DrawerParts: FC<IDrawerItems> = () => {

  const [items,setItems] = useState(allButtons)

  return (
        <Container groupName='1' onDrop={(dropResult)=>applyDrag(items,dropResult)} getChildPayload={(index)=>childPayloadHandler(index,items)}>
          {items?.map(item=>{
          if (item.withDelete && item.withSetting){
            return <Draggable><ButtonDrawer withDelete withSetting className='mb-25px last:mb-0'  text={item.text}/></Draggable>
          }else if (item.withDelete && !item.withSetting){
            return <Draggable><ButtonDrawer  withDelete className='mb-25px last:mb-0'  text={item.text} /></Draggable>
          }else if (!item.withDelete && item.withSetting){
            return <Draggable><ButtonDrawer  withSetting className='mb-25px last:mb-0'  text={item.text} /></Draggable>
          }
          else 
            return <Draggable><ButtonDrawer   className='mb-25px last:mb-0'  text={item.text} /></Draggable>
          }
            )}

        </Container>
     
  );
};

