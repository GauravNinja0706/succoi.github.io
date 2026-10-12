import { $, on } from "../utils/dom.js";

const SELECTORS = {
  toggle: "[data-js='menu-toggle']",
  links: "[data-js='nav-links']",
  body: document.body,
};

const CLASSES = {
  open: "nav-links--open",
  bodyOpen: "menu-open",
};

function openMenu(toggle, links) {
  links.classList.add(CLASSES.open);
  document.body.classList.add(CLASSES.bodyOpen);
  toggle.setAttribute("aria-expanded", "true");
  toggle.setAttribute("aria-label", "Close navigation menu");
  toggle.textContent = "✕";
}

function closeMenu(toggle, links) {
  links.classList.remove(CLASSES.open);
  document.body.classList.remove(CLASSES.bodyOpen);
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation menu");
  toggle.textContent = "☰";
}

function initNavigation() {
  const toggle = $(SELECTORS.toggle);
  const links = $(SELECTORS.links);

  if (!toggle || !links) return;

  on(toggle, "click", () => {
    const isOpen = links.classList.contains(CLASSES.open);
    if (isOpen) {
      closeMenu(toggle, links);
    } else {
      openMenu(toggle, links);
    }
  });

  links.querySelectorAll("a").forEach((link) => {
    on(link, "click", () => closeMenu(toggle, links));
  });

  on(window, "resize", () => {
    if (window.innerWidth > 600) closeMenu(toggle, links);
  });

  on(document, "keydown", (event) => {
    if (event.key === "Escape" && links.classList.contains(CLASSES.open)) {
      closeMenu(toggle, links);
      toggle.focus();
    }
  });
}

export { initNavigation };
