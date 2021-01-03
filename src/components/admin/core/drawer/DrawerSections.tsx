import { ButtonDrawer, ButtonGroupDrawer, HeaderDrawer } from 'components';
import { FC } from 'react';
import {DrawerParts} from './DrawerParts';
import {Draggable ,Container} from'react-smooth-dnd' ;
interface IDrawer {
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

export const DrawerSections: FC<IDrawer> = () => {



  return (
    <div className=" w-310px h-full fixed top-0 right-0 mr-68px bg-gray_shade-900  pt-13px z-50 overflow-y-auto">
      <HeaderDrawer />
      <div className="flex flex-col items-center px-20px pt-30px overflow-y-auto">
        <DrawerParts/>
      </div>
      <ButtonGroupDrawer />
    </div>
  );
};
