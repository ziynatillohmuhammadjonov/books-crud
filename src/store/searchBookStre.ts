import { create } from "zustand";
import { iBook } from "../hooks/requests/addNewBook";

interface iBookStore {
  book: iBook[];
  isLoading: boolean;
  updateLoading: (loading: boolean) => void;
  updateBook: (data: iBook[]) => void;
}

const useBookStore = create<iBookStore>((set) => ({
  book: [],
  isLoading: false,
  updateLoading: (loading: boolean) =>
    set((state) => ({ ...state, isLoading: loading })),
  updateBook: (data) => set((state) => ({ ...state, book: data })),
}));

export default useBookStore;
