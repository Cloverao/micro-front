<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <!-- <span @click="toVue2('/home')">Vue2 App</span> -->
      <!-- <router-link to="/home">Vue2 App</router-link> -->
      <span @click="toVue2('/app-vue2')">Vue2 App</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <span @click="toVue2('/app-vue3')">Vue3 App</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span @click="toVue2('/app-react')">React App</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
// import { createRouter } from "vue-router";
// import Vue from "vue";

// const router = useRouter();
export default {
  name: "Menu",
};
</script>

<script setup>
import router from "../../router/index";
// import { useRouter } from "vue-router";
function toVue2(path) {
  const routes = router.getRoutes();
  const target = routes.find((item) => item.path === path);
  if (!target) {
    //动态路由需要手动添加
    router.addRoute({ path });
    //路由跳转
    router.push(path);
  } else {
    router.push(path);
  }
}
function handleOpen() {}
function handleClose() {}
</script>
