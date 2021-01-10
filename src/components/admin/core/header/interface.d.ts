

interface IHeader {
    children?:any;
    variation:'first'|'second'|'third'|'fourth'|'fifth'|'sixth'|'seventh'|'eighth'|'ninth';
    item:{};
    
 }
 
 
 interface IHeaderButton {
     children: any;
     className?: string;
     variant: 'contained' | 'outline';
   }
 
 
 interface IHeaderInput {
     onClick?:Function;
     onChange?:any;
     className?:string;
 }
 
   interface IHeaderActions {
    children?: any;
    className?: string;
    tel?:string;
    variation:'first'|'second'|'third'|'fourth'|'fifth'|'social'|'Tel';
    iconColor?:string
 
   }
 
   interface IShoppingCart {
      children?:any;
      className?:string
   }
   interface IHeaderLogo {
    className?: string;
    src?:string;
   }
 
  interface IContained{
     children: any;
     className?: string;
  } 
  interface IOutline{
     children: any;
     className?: string;
  } 
 
 
  export {IHeaderButton,IContained,IOutline,IHeaderActions,IHeaderLogo,IHeader,IHeaderInput,IShoppingCart}
 