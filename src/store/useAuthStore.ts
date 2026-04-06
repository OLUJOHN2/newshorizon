// src/store/useAuthStore.ts
import { create } from "zustand";

type User = {
  name: string;
  email: string;
  role: "writer" | "reader";
};

type AuthState = {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (data) => set({ user: data }),
  logout: () => set({ user: null }),
}));
