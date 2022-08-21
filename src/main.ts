import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LogRocket from "logrocket";
import "./assets/tailwind.css";

createApp(App).use(store).use(router).mount("#app");
LogRocket.init("1arbbs/demovue");
