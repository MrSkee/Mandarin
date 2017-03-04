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
var offset_value = $('.header-container').height() - $nav_bar.height() * 2;

function navSlide() {
  var scroll_top = $(window).scrollTop();

  if (scroll_top >= offset_value) {
    $nav_bar.removeClass('hidden');
  }
  else {
    $nav_bar.addClass('hidden');
  }
}

$(window).scroll(navSlide);
