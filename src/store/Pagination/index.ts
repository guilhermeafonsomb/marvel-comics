import { create } from "zustand";

interface PaginationState {
  limit: number;
  increment: () => void;
}

export const usePagination = create<PaginationState>((set) => ({
  limit: 6,
  increment: () => set((state) => ({ limit: state.limit + 6 })),
}));
