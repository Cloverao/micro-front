<template>
  <Layout msg="Welcome to Your Vue.js App" />
</template>

<script>
import Layout from "./modules/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
#app,
html,
body,
.common-layout,
.el-container,
.el-aside,
.el-menu {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>
