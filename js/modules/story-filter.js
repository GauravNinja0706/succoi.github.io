import { $$, on } from "../utils/dom.js";

const CLASSES = {
  active: "filter-btn--active",
  hidden: "story-card--hidden",
};

const ATTR = {
  filter: "data-filter",
  category: "data-category",
  pressed: "aria-pressed",
};

function initStoryFilter() {
  const buttons = $$("[data-js='filter-btn']");
  const cards = $$("[data-js='story-card']");

  if (buttons.length === 0 || cards.length === 0) return;

  buttons.forEach((button) => {
    on(button, "click", () => {
      const selectedCategory = button.getAttribute(ATTR.filter);

      buttons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle(CLASSES.active, isActive);
        item.setAttribute(ATTR.pressed, String(isActive));
      });

      cards.forEach((card) => {
        const matches =
          selectedCategory === "all" ||
          card.getAttribute(ATTR.category) === selectedCategory;

        card.classList.toggle(CLASSES.hidden, !matches);

        if (matches) {
          card.style.animation = "none";
          void card.offsetWidth;
          card.style.animation = "";
        }
      });
    });
  });
}

export { initStoryFilter };
