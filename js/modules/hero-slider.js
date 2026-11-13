import { $ } from "../utils/dom.js";
import { createSwiper, prefersReducedMotion } from "../utils/swiper.js";

// Keep off-screen (faded-out) slides out of the tab order.
function syncInert(swiper) {
  swiper.slides.forEach((slide) => {
    slide.inert = !slide.classList.contains("swiper-slide-active");
  });
}

function initHeroSlider() {
  const element = $("[data-js='hero-slider']");
  if (!element) return;

  const swiper = createSwiper(element, {
    loop: true,
    speed: 1100,
    effect: "fade",
    fadeEffect: { crossFade: true },
    grabCursor: true,
    keyboard: { enabled: true },
    autoplay: prefersReducedMotion()
      ? false
      : { delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: $("[data-js='hero-progress']", element), type: "progressbar" },
    navigation: {
      prevEl: $("[data-js='hero-prev']", element),
      nextEl: $("[data-js='hero-next']", element),
    },
    on: {
      init: syncInert,
      slideChangeTransitionEnd: syncInert,
    },
  });

  if (swiper) syncInert(swiper);
}

export { initHeroSlider };
