// Theme Toggle
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

// Section Reveal on Scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    if(sec.getBoundingClientRect().top < window.innerHeight - 100){
      sec.classList.add('visible');
    }
  });
});