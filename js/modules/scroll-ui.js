import { $, on } from "../utils/dom.js";

function initScrollUi() {
  const progress = $("[data-js='scroll-progress']");
  const navbar = $(".navbar");
  const backToTop = $("[data-js='back-to-top']");

  let ticking = false;

  function update() {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    if (progress) {
      const ratio = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
      progress.style.setProperty("--scroll-progress", ratio.toFixed(4));
    }

    if (navbar) navbar.classList.toggle("navbar--scrolled", scrollTop > 10);
    if (backToTop) backToTop.classList.toggle("back-to-top--visible", scrollTop > 700);

    ticking = false;
  }

  on(window, "scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  });

  on(backToTop, "click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  update();
}

export { initScrollUi };
