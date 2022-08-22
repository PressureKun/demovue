import { createStore, StoreOptions } from "vuex";
import { IRootState } from "./types";

const store: StoreOptions<IRootState> = {
  state: {
    helloMessage: "Hello World"
  },
  modules: {}
};

export default createStore(store);
