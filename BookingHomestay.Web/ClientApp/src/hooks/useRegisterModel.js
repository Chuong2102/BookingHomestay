import {create} from 'zustand';

const useRegisterModel = create((set) => (
    {
        isOpen: false,
        onOpen: () => set((state) => ({isOpen: true})),
        onClose: () => set((state) => ({isOpen : false}))
    }
))

export default useRegisterModel;