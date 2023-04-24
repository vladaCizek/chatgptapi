import { createApp } from "vue";
import GlobalComponents from "./globalComponents.js";
import GlobalDirectives from "./globalDirectives.js";
import App from "./App.vue";

import "./css/index.css";

const app = createApp(App);

app.use(GlobalComponents);
app.use(GlobalDirectives);

app.mount("#app");
