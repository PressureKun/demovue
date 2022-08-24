import { GetterTree } from "vuex";
import { IRootState } from "../types";
import { IUserState } from "./types";

export const getters: GetterTree<IUserState, IRootState> = {
  userInfo(state): IUserState {
    return state;
  }
};
