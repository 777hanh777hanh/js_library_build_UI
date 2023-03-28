import { attach } from "./redux/store.js";
import App from "./components/App.js";

const root = document.getElementById('app');
attach(App, root)


