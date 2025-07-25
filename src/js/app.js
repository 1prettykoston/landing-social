import * as funcWebp from "./modules/functions.js";
funcWebp.isWebp();
import Swiper from "swiper";
import { gsap } from "gsap";

import { Autoplay, Navigation } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  checkforVideo();
  const VideoElement = document.querySelector(".section-hero__bg-video");
  const sectionHero = document.querySelector(".section-hero");


  //Видео начинается только если полностью загрузилось, до этого момента показывается заглушка
  function checkforVideo() {
    var b = setInterval(() => {
      if (VideoElement.readyState >= 3) {
        console.log("video loaded");
        VideoElement.style.display = "block";
        sectionHero.style.background = "none";

        clearInterval(b);
      }
    }, 500);
  }


  //Слайдеры
  new Swiper(".section-about__slider", {
    modules: [Navigation],
    loop: true,

    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 40,
      },

      1000: {
        slidesPerView: 3,
        spaceBetween: 40,
      },

      1600: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".section-benefits__slider", {
    modules: [Autoplay],
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      600: {
        slidesPerView: 2,
        spaceBetween: 40,
      },

      1300: {
        slidesPerView: 3,
        spaceBetween: 40,
      },

      1600: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });


  // "Одометр на GSAP"
  const registeredUsersText = document.querySelector(
    ".section-hero__stat-text--registered-users"
  );
  const activeUsersText = document.querySelector(
    ".section-hero__stat-text--active-users"
  );

  // Задать конечные числа на статистиках
  const registeredUsers = {
    millions: 450,
  };

  const activeUsers = {
    millions: 10,
  };

  if (registeredUsersText && activeUsersText) {
    gsap.fromTo(
      registeredUsers,
      { millions: 0 },
      {
        millions: registeredUsers.millions,
        duration: 2,
        roundProps: "millions",
        ease: "expo.out",
        delay: 0.2,
        onUpdate: updateRegisteredUsersStat,
      }
    );

    gsap.fromTo(
      activeUsers,
      { millions: 0 },
      {
        millions: activeUsers.millions,
        duration: 3,
        roundProps: "millions",
        ease: "expo.out",
        delay: 0.2,
        onUpdate: updateActiveUsersStat,
      }
    );
  }

  function updateRegisteredUsersStat() {
    registeredUsersText.innerText = registeredUsers.millions;
  }

  function updateActiveUsersStat() {
    activeUsersText.innerText = activeUsers.millions;
  }
});
