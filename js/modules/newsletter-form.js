import { $, on } from "../utils/dom.js";

const MESSAGE =
  "Thanks for your interest! Newsletter delivery isn't connected yet.";

function initNewsletterForm() {
  const form = $("[data-js='newsletter-form']");
  const messageEl = $("[data-js='form-message']");

  if (!form || !messageEl) return;

  on(form, "submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    messageEl.textContent = MESSAGE;
    form.reset();
  });
}

export { initNewsletterForm };
