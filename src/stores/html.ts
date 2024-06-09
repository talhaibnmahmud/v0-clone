import { create } from "zustand";

export type HTMLStore = {
  html: string;
  setHtml: (html: string) => void;
};

const useHtmlStore = create<HTMLStore>()((set) => ({
  html: "",
  setHtml: (newHtml: string) => set({ html: newHtml }),
}));

export default useHtmlStore;
