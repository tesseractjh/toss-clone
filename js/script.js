const header = document.querySelector('.doc-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header-bottom');
  } else {
    header.classList.remove('header-bottom');
  }
});