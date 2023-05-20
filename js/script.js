const inputBtn = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__logo');
const menuBtn = document.querySelector('.navbar__menu');
const body = document.querySelector('body');
const links = document.querySelectorAll('.navbar__link');
const backgr = document.querySelector('.header__banner');

searchBtn.addEventListener('click', function () {
  setTimeout(function () {
    inputBtn.classList.add('active');
  }, 50);
  body.addEventListener('click', function () {
    inputBtn.classList.remove('active')
    inputBtn.value = ''
  })
  inputBtn.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});


menuBtn.addEventListener('click', function(){
  setTimeout(function() {
    menuBtn.classList.add('active');
  }, 50);
  body.addEventListener('click', function () {
    menuBtn.classList.remove('active')
  })
  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
  });
})
