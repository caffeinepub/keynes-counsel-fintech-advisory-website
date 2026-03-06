import { create } from "zustand";

interface UserState {
  name: string;
  email: string;
  phone: string;
  setUser: (data: { name: string; email: string; phone: string }) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: "",
  email: "",
  phone: "",
  setUser: (data) => set(data),
  clearUser: () => set({ name: "", email: "", phone: "" }),
}));
