import { MutationTree } from "vuex";
import { IUserState } from "./types";

export const mutations: MutationTree<IUserState> = {
  setUserInfo(state, payload: IUserState) {
    console.log(
      "🚀 ~ file: mutations.ts ~ line 6 ~ setUserInfo ~ payload",
      payload
    );
    // state = payload;
    Object.assign(state, payload);
  }
};
