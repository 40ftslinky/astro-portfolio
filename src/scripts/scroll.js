// vanilla js

// navBtn.addEventListener('click', () => {
//   navLinks.classList.add('activated');
//   const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
//   navBtn.setAttribute('aria-expanded', !isExpanded);
//   !isExpanded && nav.classList.add('active');
// })

// INTERSECTION OBSERVER

// nav

const navBtn = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.link');

const navOptions = {
  threshold: 0,
  rootMargin: '0px 0px -250px 0px',
};

const navObs = new IntersectionObserver(
  (entries) => nav.classList.toggle('active', !entries[0].isIntersecting),
  { navOptions }
);

navObs.observe(document.querySelector('header'));

// fade-in / slide-in

// const faders = document.querySelectorAll('.fade-in');
// const sliders = document.querySelectorAll('[class*="slide-in"]');
// const articles = [...document.querySelectorAll("article")];

const faders = [...document.querySelectorAll('[class*="fade"]')];
const sliders = [...document.querySelectorAll('[class*="slide"]')];

// create observer
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
    }

    if (!entry.isIntersecting && entry.boundingClientRect.top > -250) {
      entry.target.classList.remove('appear');
    }
  });
};

const observer = new IntersectionObserver(callback);

// observe boxes
faders.forEach((fader) => observer.observe(fader));
sliders.forEach((slider) => observer.observe(slider));
