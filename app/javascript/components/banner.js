import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Drink More !"],
    typeSpeed: 60,
    loop: true
  });
};

export { loadDynamicBannerText };
