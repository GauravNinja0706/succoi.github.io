import { $, $$, on } from "../utils/dom.js";
import { createSwiper } from "../utils/swiper.js";

const ACTIVE = "filter-btn--active";

function initSpotsCarousel() {
  const root = $("[data-js='spots']");
  if (!root) return;

  const element = $("[data-js='spots-carousel']", root);
  if (!element) return;

  const buttons = $$("[data-js='spot-filter']", root);
  const status = $("[data-js='spots-status']", root);
  const allSlides = $$(".swiper-slide", element);

  const swiper = createSwiper(element, {
    slidesPerView: 1.12,
    spaceBetween: 18,
    grabCursor: true,
    keyboard: { enabled: true },
    navigation: {
      prevEl: $("[data-js='spots-prev']", root),
      nextEl: $("[data-js='spots-next']", root),
    },
    scrollbar: { el: $("[data-js='spots-scrollbar']", element), draggable: true },
    breakpoints: {
      700: { slidesPerView: 2.1, spaceBetween: 22 },
      1024: { slidesPerView: 3, spaceBetween: 24 },
    },
  });

  function applyFilter(city) {
    const visible = allSlides.filter(
      (slide) => city === "all" || slide.dataset.city === city,
    );

    if (swiper) {
      swiper.removeAllSlides();
      swiper.appendSlide(visible);
      swiper.update();
      swiper.slideTo(0, 0);
    } else {
      allSlides.forEach((slide) => {
        slide.hidden = !visible.includes(slide);
      });
    }

    if (status) {
      status.textContent = `Showing ${visible.length} ${visible.length === 1 ? "spot" : "spots"}`;
    }
  }

  buttons.forEach((button) => {
    on(button, "click", () => {
      buttons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle(ACTIVE, isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
      applyFilter(button.dataset.city);
    });
  });
}

export { initSpotsCarousel };
