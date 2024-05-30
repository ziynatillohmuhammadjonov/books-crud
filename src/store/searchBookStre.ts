import { create } from "zustand";
import { iBooksInformation } from "../hooks/requests/addNewBook";

interface iBookStore {
  book: iBooksInformation[];
  isLoading: boolean;
  updateLoading: (loading: boolean) => void;
  updateBook: (data: iBooksInformation[]) => void;
}

const useBookStore = create<iBookStore>((set) => ({
  book: [],
  isLoading: false,
  updateLoading: (loading: boolean) =>
    set((state) => ({ ...state, isLoading: loading })),
  updateBook: (data) => set((state) => ({ ...state, book: data })),
}));

export default useBookStore;
