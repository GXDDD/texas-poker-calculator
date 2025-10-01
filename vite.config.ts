import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      // 主进程入口文件
      entry: "./src-electron/main.js",
    }),
  ],
  /*开发服务器选项*/
  server: {
    // 端口
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
