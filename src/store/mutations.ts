import { MutationTree } from "vuex";
import { IRootState } from "./types";

export const mutations: MutationTree<IRootState> = {
  setStatusUnavailable(state, payload: boolean) {
    state.localStorageAvailable = payload;
  }
};
