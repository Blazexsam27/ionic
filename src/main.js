import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { firebaseApp } from "./firebase";
import Vue3Marquee from "vue3-marquee";
import store from "./store/index";

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
  FaBootstrap,
  MdKeyboarddoublearrowrightRound,
  SiStackbit,
  MdWidgetsRound,
  IoLogoWebComponent,
  SiAffinitydesigner,
  BiStarFill,
  MdDownloading,
  HiViewGridAdd,
  SiJetpackcompose,
  MdKeyboardarrowupSharp,
  MdKeyboardarrowdownSharp,
  MdArrowdropdown,
  MdLocallibraryOutlined,
  BiInfoCircle,
  PrCloudDownload,
  MdChecklistOutlined,
  AiObp,
  MdLoop,
  CoStar,
  FaGitter,
  BiBootstrapReboot,
  BiPlugFill,
  MdFilterframes,
  BiArrowUpCircleFill,
  FaMobile,
  IoStatsChart,
  BiCheckLg,
  BiShieldLockFill,
  CoCcVisa,
  CoAmericanExpress,
  CoCcMastercard,
  FaUserCircle,
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
  ViFileTypeTailwind,
  FaBootstrap,
  MdKeyboarddoublearrowrightRound,
  SiStackbit,
  MdWidgetsRound,
  IoLogoWebComponent,
  SiAffinitydesigner,
  BiStarFill,
  MdDownloading,
  HiViewGridAdd,
  SiJetpackcompose,
  MdKeyboardarrowupSharp,
  MdKeyboardarrowdownSharp,
  MdArrowdropdown,
  MdLocallibraryOutlined,
  BiInfoCircle,
  PrCloudDownload,
  MdChecklistOutlined,
  AiObp,
  MdLoop,
  CoStar,
  FaGitter,
  BiBootstrapReboot,
  BiPlugFill,
  MdFilterframes,
  BiArrowUpCircleFill,
  FaMobile,
  IoStatsChart,
  BiCheckLg,
  BiShieldLockFill,
  CoCcVisa,
  CoAmericanExpress,
  CoCcMastercard,
  FaUserCircle
);
app.config.globalProperties.$firebase = firebaseApp;
app.use(router);
app.component("v-icon", OhVueIcon);
app.use(Vue3Marquee, { name: "MarqueeAnimation" });
app.use(store);
app.mount("#app");
