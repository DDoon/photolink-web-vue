import { Form, Input, Menu } from "ant-design-vue";
import { App } from "vue";

export function setupAntd(app: App<Element>) {
  app.use(Form).use(Input).use(Menu);
}
