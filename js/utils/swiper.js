const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Creates a Swiper instance. Returns null (and flags the element so CSS can
 * fall back to a native scroll-snap row) if the Swiper CDN script is missing.
 */
function createSwiper(element, options) {
  if (!element) return null;

  if (typeof window.Swiper !== "function") {
    element.classList.add("no-swiper");
    return null;
  }

  return new window.Swiper(element, options);
}

export { createSwiper, prefersReducedMotion };
