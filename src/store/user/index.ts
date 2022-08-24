import { Module } from "vuex";
import { IRootState } from "../types";
import { IUserState } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: IUserState = {
  username: "",
  usersurname: ""
};

export const user: Module<IUserState, IRootState> = {
  state,
  getters,
  mutations,
  actions
};
