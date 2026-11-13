import { $ } from "../utils/dom.js";
import { createSwiper, prefersReducedMotion } from "../utils/swiper.js";

function initFeedCarousel() {
  const element = $("[data-js='feed-carousel']");
  if (!element) return;

  createSwiper(element, {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 2,
    spaceBetween: 0,
    grabCursor: true,
    keyboard: { enabled: true },
    coverflowEffect: {
      rotate: 28,
      stretch: 0,
      depth: 140,
      modifier: 1,
      slideShadows: false,
    },
    autoplay: prefersReducedMotion()
      ? false
      : { delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true },
    pagination: { el: $("[data-js='feed-pagination']", element), clickable: true },
  });
}

export { initFeedCarousel };
