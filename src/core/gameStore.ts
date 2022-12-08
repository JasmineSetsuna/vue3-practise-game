import { context } from "ant-design-vue/lib/vc-image/src/PreviewGroup";
import { defineStore } from "pinia";
import { defaultGameConfig } from "./gameConfig";

//定义 全局状态存储
export const useGlobalStore = defineStore("global", {
    state: () => ({
        customConfig: { ...defaultGameConfig },
        gameConfig: { ...defaultGameConfig },
    }),
    getters: {},
    persist: {
        key: "global",
        storage: window.localStorage,
        beforeRestore: (context) => {
            console.log("start load globalStore data ");
        },
        afterRestore: (context) => {
            console.log("load globalStore data end");
        },
    },
    actions: {
        setGameConfig(gameConfig: GameConfigType) {
            this.gameConfig = gameConfig;
        },
        setCustomConfig(customConfig: GameConfigType) { 
            this.customConfig = customConfig;
        },
        reset() {
            this.$reset();
        },
    },
});