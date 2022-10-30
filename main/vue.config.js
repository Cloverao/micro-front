const { defineConfig } = require("@vue/cli-service");
// import { defineConfig } from "@vue/cli-service";
// import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = defineConfig({
  runtimeCompiler: true,
  transpileDependencies: true,
  pluginOptions: {
    autoImport: AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    components: Components({
      resolvers: [ElementPlusResolver()],
    }),
  },
  // plugins: [
  //   AutoImport({
  //     resolvers: [ElementPlusResolver()],
  //   }),
  //   Components({
  //     resolvers: [ElementPlusResolver()],
  //   }),
  // ],
});

// import { defineConfig } from "@vue/cli-service";
// import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";
// import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// export default defineConfig({
//   transpileDependencies: true,
//   pluginOptions:{

//     AutoImport({
//       resolvers: [ElementPlusResolver()],
//     }),
//     Components({
//       resolvers: [ElementPlusResolver()],
//     }),}

// });
