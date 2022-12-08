<template>
    <div id="startpage">
        <h1>🤖 球了个球</h1>
        <div style="margin-bottom: 16px">低配版羊了个羊小游戏</div>
        <!-- 模式选择按钮 -->
        <a-button 
          block
          style="margin-bottom: 16px" 
          @click="toGamePage(easyGameConfig)"
        >
          简单模式
        </a-button>
        <a-button 
          block 
          style="margin-bottom: 16px" 
          @click="toGamePage(middleGameConfig)"
        >
          中等模式
        </a-button>
        <a-button 
          block 
          style="margin-bottom: 16px" 
          @click="toGamePage(hardGameConfig)"
        >
          困难模式
        </a-button>
        <a-button 
          block 
          style="margin-bottom: 16px" 
          @click="toGamePage(lunaticGameConfig)"
        >
          地狱模式
        </a-button>
        <a-button 
          block 
          style="margin-bottom: 16px" 
          @click="toGamePage(ultimateGameConfig)"
        >
          极致模式
        </a-button>
        <a-button 
          block 
          style="margin-bottom: 16px" 
          @click="toGamePage(yangGameConfig)"
        >
          羊了个羊模式
        </a-button>
        <a-button 
          block 
          style="margin-bottom: 16px" 
          @click="() => toGamePage()"
        >
          自定义 🔥
        </a-button>
        <div class="footer">
          球了个球 @2022 by 
            <a href="#">资深编程菜鸡</a>
            |
            <a href="#">代码开源</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useGlobalStore } from "../core/gameStore";
import {
    easyGameConfig,
    middleGameConfig,
    hardGameConfig,
    lunaticGameConfig,
    ultimateGameConfig,
    yangGameConfig
} from '../core/gameConfig';
const router = useRouter();
const { setGameConfig } = useGlobalStore();

const toGamePage = (config?: GameConfigType) => {
    if (config) {
    setGameConfig(config);
    router.push("/game");
  } else {
    router.push("/config");
  }
}
</script>

<style scoped>
#startpage {
    text-align: center;
    color: #fff;
}

h1 {
    color: #fff;
}

.footer {
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 12px;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>