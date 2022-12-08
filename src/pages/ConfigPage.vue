<template>
  <div id="customConfigPage">
    <h2>
      自定义难度
      <a-button style="float: right" @click="doBack">返回</a-button>
    </h2>
    <a-form
      ref="formRef"
      label-align="left"
      :label-col="{ style: { width: '120px' } }"
      :model="config"
      @finish="handleFinish"
    >
      <a-form-item label="槽容量" name="slotNum">
        <a-input-number v-model:value="config.slotNum"></a-input-number>
      </a-form-item>
      <a-form-item label="合成数" name="composeNum">
        <a-input-number v-model:value="config.composeNum" />
      </a-form-item>
      <a-form-item label="运动数" name="typeNum">
        <a-input-number v-model:value="config.typeNum" />
      </a-form-item>
      <a-form-item label="运动图案" name="sportStr">
        <a-input v-model:value="config.sportStr" />
      </a-form-item>
      <a-form-item label="总层数" name="levelNum">
        <a-input-number v-model:value="config.levelNum" />
      </a-form-item>
      <a-form-item label="每层块数" name="levelBlockNum">
        <a-input-number v-model:value="config.levelBlockNum" />
      </a-form-item>
      <a-form-item label="边界收缩" name="borderStep">
        <a-input-number v-model:value="config.borderStep" />
      </a-form-item>
      <a-form-item label="随机区数" name="randomAreaNum">
        <a-input-number v-model:value="config.randomAreaNum" />
      </a-form-item>
      <a-form-item label="随机区块数" name="randomBlockNum">
        <a-input-number v-model:value="config.randomBlockNum" />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          style="margin-bottom:12px"
          block
        >
          开始
        </a-button>
        <a-button block style="margin-bottom: 12px" @click="resetForm"
          >重置</a-button
        >
        <a-button block danger @click="resetConfig">还原最初配置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
// 当创建一个 Form 组件时，会通过 useForm 钩子创建对应的 FormStore 类对象，并将其部分接口作为 FormInstance 对象返回。
import { FormInstance } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useGlobalStore } from "../core/gameStore";
import { defaultGameConfig } from "../core/gameConfig";

const formRef = ref<FormInstance>();
const router = useRouter();
// 结构赋值，使用useGlobalStore里的方法和数组
const { customConfig, setGameConfig, setCustomConfig, reset } =
  useGlobalStore();
const initConfig = {
  randomAreaNum: 2,
  randomBlockNum: 8,
  sportStr: defaultGameConfig.sports.join(""),
  ...customConfig,
};
const config = reactive<any>(initConfig);

// 方法
const handleFinish = (values: any) => {
  //通过fill方法填入自定义的随机区块数,
  config.randomBlocks = new Array(values.randomAreaNum).fill(
    values.randomBlockNum
  );

  if (values.sportStr) {
    // from创建一个浅拷贝的数组
    config.sports = Array.from(values.sportStr);
  }
  setGameConfig(config);
  setCustomConfig(config);
  router.push("/game");
};

const resetForm = () => {
  // ？. 表示：可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。
  // resetFields会将form对应的每个值重置到初始值
  formRef?.value?.resetFields();
};

const resetConfig = () => {
  reset();
  router.go(0);
};

const doBack = () => {
  router.back();
};
</script>
