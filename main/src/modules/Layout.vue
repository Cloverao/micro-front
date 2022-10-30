<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu></el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <!--主应用渲染出口-->
            <router-view />
            <!--微前端子应用渲染出口-->
            <div id="subapp-container"></div>
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ElMenu from "./components/Menu.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: { ElMenu },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#subapp-container {
  height: 100%;
}
</style>
