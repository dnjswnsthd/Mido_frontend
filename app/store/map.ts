import {create} from "zustand";
import { Round } from "../(afterLogin)/home/page";

interface MapState {
  markList: Round[];
  setMarkList(list: Round[]): void;
  reset(): void;
}

export const useMapStore = create<MapState>((set) => ({
  markList: [],
  setMarkList(list) {
    set({markList: list})
  },
  reset() {
    set({
      markList: [],
    })
  }
}));