const header = document.getElementById("header");
const navMenu = document.getElementById("nav-menu");
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const navItems = document.querySelectorAll(".nav__item");

navOpen.addEventListener("click", () => {
  navMenu.classList.add("nav__menu--open");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("nav__menu--open");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
  });
});

// add scroll effect on header
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// activate nav link on scroll
function addActiveLink() {
  const section = document.querySelectorAll("section[id]");
  section.forEach((section) => {
    const scrollY = window.scrollY,
      sectionTop = section.offsetTop - 120,
      sectionHeight = section.offsetHeight,
      sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.add("nav__link--active");
    } else {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.remove("nav__link--active");
    }
  });
}

window.addEventListener("scroll", addActiveLink);

// swiper testimonial

const testimonialSwiper = new Swiper(".testimonial__wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ScrollReveal animations

const sr = ScrollReveal({
  distance: "100px",
  reset: false,
  duration: 1500,
  delay: 300,
});

sr.reveal(".home__content, .about__content, .testimonial__wrapper");
sr.reveal(".home__img, .about__img", { origin: "top" });
sr.reveal(
  ".service__item, .about__data-item, .portfolio__item, .footer__item",
  { delay: 400, interval: 100 }
);
sr.reveal(".contact__content", { origin: "left" });
sr.reveal(".contact__form", { origin: "right" });
