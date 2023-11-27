import html from "./index.html";
// Default and named imports from CSS files are deprecated.
// Use the ?inline query instead.
// For example: import css from './style.css?inline'
import css from "./style.css?inline";
import { LangKey } from '../../utils/i18n'


function getTitleByLangKey (key) {
  switch (key) {
    case LangKey.CN: return '选择您熟悉的语言';
    case LangKey.FR: return "Choissiez vitre langue prefere";
    default: return 'Select your favourite language';
  }
}

export default class MyLangPopup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.initLang = LangKey.EN;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      ${html}
      <style>${css}</style>
    `;
    this.wrapper = this.shadowRoot.querySelector('.lang-popup-wrapper');
    this.titleEl = this.shadowRoot.querySelector('.title');
    if (this.titleEl) {
      this.titleEl.innerText = getTitleByLangKey(this.initLang);
    }
    this.langItemEls = Array.of(this.shadowRoot.querySelectorAll('.lang-item'));
    if (this.langItemEls && this.langItemEls.length) {
      const onClick = (evt) => {
        evt?.stopPropogation?.();
        console.log(evt);
      }
      this.langItemEls.forEach(el => el.onclick = onClick);
    }
    this.bindingBtn();
  }

  bindingBtn () {
    const cbkCreator = (isConfirm) => (evt) => {
      evt?.stopPropogation?.()
      this.active = false;
    }
    const confirmBtnEl = this.shadowRoot.querySelector('.confirm-btn');
    if (confirmBtnEl) {
      confirmBtnEl.onclick = cbkCreator(true);
    }
    const cancelBtnEl = this.shadowRoot.querySelector('.cancel-btn');
    if (cancelBtnEl) {
      cancelBtnEl.onclick = cbkCreator(false);
    }
  }

  get active() {
    return Boolean(this.getAttribute("active"));
  }

  set active(isActive) {
    isActive = Boolean(isActive)
    this.setAttribute("active", isActive);
    this.wrapper?.classList.toggle('active', isActive);
  }
}

customElements.define("my-lang-popup", MyLangPopup);