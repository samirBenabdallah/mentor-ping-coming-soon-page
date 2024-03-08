const BUTTON = document.querySelector("section button");
const SECTION = document.querySelector("section");
const INPUT = document.querySelector("section input");

BUTTON.addEventListener("click", () => {
  const VALUE = INPUT.value;
  const REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  REGEXP.test(VALUE)
    ? SECTION.classList.remove("error")
    : SECTION.classList.add("error");
});
