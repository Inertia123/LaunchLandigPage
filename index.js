// var hamMenu = document.getElementById('ham');
function toggleClass(){
    const toggle = document.querySelector('.ham');
    toggle.classList.toggle('open');
    const close = document.querySelector('.close');
    close.classList.toggle('visible');
}

const swiper = new Swiper('.swiper', {
    // Optional parameters 
    loop: true,

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });