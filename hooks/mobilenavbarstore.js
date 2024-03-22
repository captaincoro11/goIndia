import { create } from 'zustand'

 const useMobileStore = create((set) => ({
   router:'/',
   setRouterdiscussion:()=>set({router:'/discussion'}),
   setRoutermarket:()=>set({router:'/market'}),

   isClick1:false,
   onOpenClick1:()=>set({isClick1:true}),
   onCloseClick1:()=>set({isClick1:false}),
   isClick2:false,
   onOpenClick2:()=>set({isClick2:true}),
   onCloseClick2:()=>set({isClick2:false}),

}));

export default useMobileStore