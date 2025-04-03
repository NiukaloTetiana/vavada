import throttle from "lodash.throttle";

(() => {
  const mobileMenu = document.querySelector(".js-backdrop");
  const openMenuBtn = document.querySelector(".js-menu__open");
  const closeMenuBtn = document.querySelector(".js-menu__close");

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true";
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        toggleMenu();
      }
    };

    if (!isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("keydown", handleEscape);
    }
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  mobileMenu.addEventListener("click", (event) => {
    if (!event.target.closest(".js-menu")) {
      toggleMenu();
    }
  });
})();
   

const scrollUpButton = document.querySelector(".js-scroll-up-btn");

const threshold = 300;

document.addEventListener(
  "scroll",
  throttle(() => {
    if (window.scrollY > threshold) {
      scrollUpButton.classList.add("show");
    } else {
      scrollUpButton.classList.remove("show");
    }
  }, 500)
);

scrollUpButton.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
