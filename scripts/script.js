/*var body = document.querySelector('body');
var body_container = body.querySelector('body-container');
var body_container_height = getComputedStyle(body_container).height.split('px')[0];
var hidden_class = 'hidden';

function nav_barAppear(e) {

  if(window.pageYOffset >= body_container_height / 2) {
    body_container.classList.remove(hidden);
  }

  if(window.pageYOffset < body_container_height /2) {
    body_container.classList.add(hidden);
  }
}

window.addEventListener('scroll', nav_barAppear, false);

console.log("test");*/


var $nav_bar = $('.nav-bar');
var nav_barHeight = $nav_bar.height();
var appear_value = $('.header-container').height();
var scroll_top = $(window).scrollTop();

function navSlide() {
  scroll_top = $(window).scrollTop();

  if (scroll_top >= appear_value) {
    $nav_bar.addClass('nav-bar-visible');
  }
  else {
    $nav_bar.removeClass('nav-bar-visible');

    if (scroll_top > nav_barHeight) {
      $nav_bar.removeClass('visible');
    }
    else {
      $nav_bar.addClass('visible');
    }
  }
}

$(window).scroll(navSlide);
