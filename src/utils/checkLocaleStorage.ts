import store from "@/store";

const isLocalStorageAvailable = (): boolean => {
  if (typeof localStorage !== "undefined") {
    try {
      localStorage.setItem("storage_test", "yes");
      if (localStorage.getItem("storage_test") === "yes") {
        localStorage.removeItem("storage_test");
        // localStorage is enabled
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

export const checkLocaleStorage = (): boolean => {
  if (isLocalStorageAvailable()) {
    return true;
  } else {
    store.commit("setStatusUnavailable", false);
    return false;
  }
};
