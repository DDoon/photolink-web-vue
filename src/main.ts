import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupStore } from "./store/index";
import router from "./router/router";
import { worker } from "./mocks/worker";

worker.start();
const app = createApp(App);

async function setupApp() {
  setupStore(app);
  app.use(router);

  app.mount("#app");
}

setupApp();
