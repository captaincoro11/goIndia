import { create } from 'zustand'

 const useStore = create((set) => ({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),

}));

export default useStore

//1  for mobile 
//2 for desktop