const $ = (selector, context = document) => context.querySelector(selector);

const $$ = (selector, context = document) =>
  Array.from(context.querySelectorAll(selector));

const on = (element, event, handler) => {
  if (!element) return;
  element.addEventListener(event, handler);
};

export { $, $$, on };
