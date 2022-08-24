import { createStore, StoreOptions } from "vuex";
import { IRootState } from "./types";
import { user } from "./user";
import { mutations } from "./mutations";
import { getters } from "./getters";

const store: StoreOptions<IRootState> = {
  state: {
    localStorageAvailable: true
  },
  mutations,
  getters,
  modules: {
    user
  }
};

export default createStore(store);
