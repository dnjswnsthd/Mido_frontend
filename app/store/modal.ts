import {create} from "zustand";

interface ModalState {
  mode: 'thumbnail' | 'modal';
  imageList: string[];
  setMode(mode: 'thumbnail' | 'modal'): void;
  setImageList(list: string[]): void;
  reset(): void;
}

export const useModalStore = create<ModalState>((set) => ({
  mode: 'thumbnail',
  imageList: [],
  setImageList(list) {
    set({imageList: list})
  },
  setMode(mode){
    set({mode})
  },
  reset() {
    set({
      imageList: [],
      mode: 'thumbnail'
    })
  }
}));