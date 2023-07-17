import { create } from "zustand";

interface userMenuStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useUserMenu = create<userMenuStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useUserMenu;
