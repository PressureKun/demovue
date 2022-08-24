import { ActionTree } from "vuex";
import { IRootState } from "../types";
import { IUserState } from "./types";
import { checkLocaleStorage } from "@/utils/checkLocaleStorage";

export const actions: ActionTree<IUserState, IRootState> = {
  loadUserInfo({ commit }): void {
    if (!checkLocaleStorage()) return;

    let localData: string | null = "";

    try {
      localData = localStorage.getItem("userData");
      localData != null ? commit("setUserInfo", JSON.parse(localData)) : false;
    } catch (error) {
      throw new Error("Error loading user data");
    }
  },

  uploadUserInfo({ state }): void {
    if (!checkLocaleStorage()) return;
    const localData: string | null = JSON.stringify(state);
    try {
      localStorage.setItem("userData", localData);
    } catch (error) {
      throw new Error("Error saving user data");
    }
  }
};
