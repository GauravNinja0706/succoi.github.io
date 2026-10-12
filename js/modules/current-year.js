import { $ } from "../utils/dom.js";

function initCurrentYear() {
  const yearEl = $("[data-js='current-year']");
  if (!yearEl) return;
  yearEl.textContent = new Date().getFullYear();
}

export { initCurrentYear };
