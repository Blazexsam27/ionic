import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import firebase from "./firebase";

import {
  LaCubesSolid,
  SiAntdesign,
  OiGift,
  FaLaptopCode,
  RiArticleLine,
  ViFileTypeReactjs,
  ViFileTypeAngular,
  ViFileTypeVue,
  ViFileTypeNode2,
  ViFileTypeTailwind,
} from "oh-vue-icons/icons";

const app = createApp(App);

addIcons(
  LaCubesSolid,
  SiAntdesign,
  OiGift,
  FaLaptopCode,
  RiArticleLine,
  ViFileTypeReactjs,
  ViFileTypeAngular,
  ViFileTypeVue,
  ViFileTypeNode2,
  ViFileTypeTailwind
);
app.config.globalProperties.$firebase = firebase;
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
