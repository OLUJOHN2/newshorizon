import { create } from "zustand";

type SearchState = {
  open: boolean;
  query: string;
  toggle: () => void;
  setQuery: (value: string) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  open: false,
  query: "",
  toggle: () => set((state) => ({ open: !state.open })),
  setQuery: (value) => set({ query: value }),
}));
