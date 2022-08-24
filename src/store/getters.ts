import { GetterTree } from "vuex";
import { IRootState } from "./types";

export const getters: GetterTree<IRootState, IRootState> = {
  getLocalStorageAvailability(state): boolean {
    return state.localStorageAvailable;
  }
};
