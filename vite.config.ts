import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()], //* Vue 플러그인을 사용하여 Vue 3.x를 지원
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), //* '@' 앨리어스를 프로젝트의 'src' 디렉터리로 매핑
    },
  },
  css: {
    preprocessorOptions: {
      //* Less 변수를 수정하고 'src/less/index.less' 파일을 참조
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve(
            __dirname,
            "src/less/index.less"
          )}";`,
        },
        javascriptEnabled: true, //* Less 내에서 JavaScript를 사용할 수 있도록 허용
      },
    },
  },
});
