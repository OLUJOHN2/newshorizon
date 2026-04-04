// store/useAuthStore.ts
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  login: (data) => set({ user: data }),
  logout: () => set({ user: null }),
}));
