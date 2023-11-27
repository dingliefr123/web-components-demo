import "./style.css";
import "./src/components/my-app/index.js";
import { getLocalizedStrByKey, I18NKeys } from './src/utils/i18n';

window.getLocalizedStrByKey = getLocalizedStrByKey;
window.I18NKeys = I18NKeys;

document.querySelector("#app").innerHTML = `<my-app></my-app>`;
