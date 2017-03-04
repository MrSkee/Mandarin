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


var isDark = false;
var $header = $('.header-container');
var $arrow = $('#arrow');
var $nav_bar_links = $('.nav-bar a');

var $arrow_bar = $('#header-bottom');
var isOutOfBar = true;

function navSlide() {
  scroll_top = $(window).scrollTop();

  if (scroll_top >= appear_value) {
    $nav_bar.addClass('nav-bar-visible');
    $nav_bar.addClass('nav-bar-box-shadow');

    if (isDark == true) {
      $nav_bar.removeClass('theme-dark');
      $nav_bar_links.removeClass('font-white');
    }
  }
  else {
    $nav_bar.removeClass('nav-bar-visible');
    $nav_bar.removeClass('nav-bar-box-shadow');

    if (isDark == true) {
      $nav_bar.addClass('theme-dark');
      $nav_bar_links.addClass('font-white');
    }

    if (scroll_top > nav_barHeight) {
      $nav_bar.removeClass('visible');
    }
    else {
      $nav_bar.addClass('visible');
    }
  }
}

$(window).scroll(navSlide);


/*jQuery Smooth Scroll*/
/*$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace("") == this.pathname.replace("") && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target: $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }
  })
}) */

$(document).ready(function() {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target= $(target);

    $('html,body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    })
  })
})


$arrow_bar.mouseover(function() {
  isOutOfBar = false;
})
$arrow_bar.mouseout(function() {
  isOutOfBar = true;
})

$header.click(function() {
  if (isOutOfBar == true) {
    if (isDark == false) {
      $header.addClass('theme-dark');
      $nav_bar.addClass('theme-dark');
      $nav_bar_links.addClass('font-white');
      $arrow.addClass('arrow-theme-light');
      isDark = true;
    }
    else {
      $header.removeClass('theme-dark');
      $nav_bar.removeClass('theme-dark');
      $nav_bar_links.removeClass('font-white');
      $arrow.removeClass('arrow-theme-light');
      isDark = false;
    }
  }
})
