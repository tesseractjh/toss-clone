const header = document.querySelector('.doc-header');

window.addEventListener('scroll', () => {
  console.log('ㅇㅇ');
  if (window.scrollY > 0) {
    header.classList.add('header-bottom');
  } else {
    header.classList.remove('header-bottom');
  }
});