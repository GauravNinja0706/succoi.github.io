import { initNavigation } from "./modules/navigation.js";
import { initHeroSlider } from "./modules/hero-slider.js";
import { initSpotsCarousel } from "./modules/spots-carousel.js";
import { initFeedCarousel } from "./modules/feed-carousel.js";
import { initStoryFilter } from "./modules/story-filter.js";
import { initReveal } from "./modules/reveal.js";
import { initScrollUi } from "./modules/scroll-ui.js";
import { initNewsletterForm } from "./modules/newsletter-form.js";
import { initCurrentYear } from "./modules/current-year.js";

function init() {
  initNavigation();
  initHeroSlider();
  initSpotsCarousel();
  initFeedCarousel();
  initStoryFilter();
  initReveal();
  initScrollUi();
  initNewsletterForm();
  initCurrentYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
