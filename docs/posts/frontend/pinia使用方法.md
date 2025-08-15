---
date: 2025-07-06
category:
  - frontend
tag:
  - vue
  - pinia
---

# pinia 使用方法

## 什么是 pinia

Pinia 是 Vue 的官方状态管理工具，作为 Vuex 的继任者，为 Vue 3 提供了更现代、灵活且易用的状态管理解决方案。它主要用于管理应用中的全局状态，特别适合在多个组件间共享数据的场景。

## 主要功能介绍

在官方文档中，Pinia 提供了四种功能，分别是：

Store：在 Pinia 中，每个状态管理模块都被称为一个 Store。开发者需要创建一个 Store 实例来定义和管理状态。
State：在 Store 中定义状态。可以使用 defineState 函数来定义一个状态，并通过 state 属性来访问它。
Getters：类似于 Vuex 中的 getters，用于从 State 中派生出一些状态。可以使用 defineGetters 函数来定义 getters。
Actions：在 Pinia 中，Actions 用于处理异步操作或执行一些副作用。可以使用 defineActions 函数来定义 Actions。

## 使用方法

### 安装

1.先在 store 文件夹新建一个 JS 文件并引入 pinia

```js
import { createPinia } from "pinia"; // 引入pinia模块

const store = createPinia(); // 创建一个仓库

export default store; // 抛出这个仓库
```

2.再全局引入 pinia

```js
import { createApp } from "vue";
import App from "./App3.vue";

import store from "./store"; //引入这个仓库

createApp(App).use(store).mount("#app"); // 再use一下
```

### Store 的使用方法。

1.Store：在 Pinia 中，每个状态管理模块都被称为一个 Store。开发者需要创建一个 Store 实例来定义和管理状态。在 store 文件夹的 js 中定义一个 Store 实例，通过 defineStore 函数来定义一个状态，并通过 state 属性来访问它。

```js
import { defineStore } from "pinia"; // defineStore 是 store 的一部分
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    // 仓库数据源
    userInfo: {
      name: "小明",
      age: 18,
      sex: "boy",
    },
  }),
});
```

2.在 vue 组件中访问 store 实例中的数据

```js
import { useUserStore } from "@/store/user";
const userStore = useUserStore(); // 调用仓库
console.log(userStore.userInfo); // 访问仓库中的数据
```

### Action 的使用方法

1.在 store 实例中定义 actions，通过 defineActions 函数来定义 Actions。

```js
import { defineStore } from "pinia"; // defineStore 是 store 的一部分
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    // 仓库数据源
    userInfo: {
      name: "小明",
      age: 18,
      sex: "boy",
    },
  }),
  actions: {
    // 定义actions
    updateName(name) {
      // 定义一个方法
      this.userInfo.name = name; // 修改仓库中的数据
    },
  },
});
```

2.在 vue 组件中调用 actions

```js
import { useUserStore } from "@/store/user";
const userStore = useUserStore(); // 调用仓库
userStore.updateName("小红"); // 调用仓库中的方法
```

### Getters 的使用方法

1.在 store 实例中定义 getters，通过 defineGetters 函数来定义 getters。

```js
import { defineStore } from "pinia"; // defineStore 是 store 的一部分
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    // 仓库数据源
    userInfo: {
      name: "小明",
      age: 18,
      sex: "boy",
    },
  }),
  getters: {
    // 定义getters
    fullName(state) {
      // 定义一个方法
      return state.userInfo.name + "的年龄是" + state.userInfo.age;
    },
  },
});
```

2.在 vue 组件中访问 getters

```js
import { useUserStore } from "@/store/user";
const userStore = useUserStore(); // 调用仓库
console.log(userStore.fullName); // 访问仓库中的数据
```
