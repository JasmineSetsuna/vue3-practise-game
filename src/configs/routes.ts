import { RouteRecordRaw } from "vue-router";
import StartPage from "../pages/StartPage.vue";
import ConfigPage from "../pages/ConfigPage.vue";
import GamePage from "../pages/GamePage.vue";

// export default [
//   {
//     path: "/",
//     component: StartPage,
//   },
//   {
//     path: "/config",
//     component: ConfigPage,
//   },
//   {
//     path: "/game",
//     component: GamePage,
//   },
// ] as RouteRecordRaw[];

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: StartPage,
  },
  {
    path: "/config",
    component: ConfigPage,
  },
  {
    path: "/game",
    component: GamePage,
  },
];

export default routes