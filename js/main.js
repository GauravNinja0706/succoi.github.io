import { initNavigation } from "./modules/navigation.js";
import { initStoryFilter } from "./modules/story-filter.js";
import { initNewsletterForm } from "./modules/newsletter-form.js";
import { initCurrentYear } from "./modules/current-year.js";

function init() {
  initNavigation();
  initStoryFilter();
  initNewsletterForm();
  initCurrentYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
