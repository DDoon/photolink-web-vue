import { createApp } from "vue";
import "../src/less/reset.less";
import App from "./App.vue";
import { setupStore } from "./store/index";
import router from "./router/router";
import { worker } from "./mocks/worker";

import { setupAntd } from "./plugin/antd";
import Antd from "ant-design-vue";

worker.start();
const app = createApp(App);

function setupPlugins() {
  setupAntd(app);
}

async function setupApp() {
  setupStore(app);
  app.use(router);

  // app.mount("#app");
  app.use(Antd).mount("#app");
}

setupPlugins();

setupApp();
