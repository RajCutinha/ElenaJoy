const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const mode = document.getElementById('mode');

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

mode.addEventListener('change', function () {
  if (this.checked) {
    localStorage.setItem('darkmode', true);
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    localStorage.setItem('darkmode', false);
    document.documentElement.removeAttribute('data-theme');
  }
});