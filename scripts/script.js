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


var $banner = $('.banner-wrapper');
var nav_barHeight = $banner.height();
var appear_value = $('#header').height();
var scroll_top = $(window).scrollTop();
var $nav_links = $('.nav a');
var $nav_lists = $('.nav li');

var clickScroll = false;

var isCorrect = true;


var isDark = false;
var $header = $('#header');
var $arrow = $('#arrow');
var $banner_links = $('.banner-wrapper a');
var $banner_lists = $('.banner-wrapper li');

var $arrow_bar = $('#header-bottom');
var isOutOfBar = true;

$(document).scroll(function() {

  scroll_top = $(window).scrollTop();

  if (scroll_top >= appear_value) {
    $banner.addClass('nav-bar-visible nav-bar-box-shadow noborder');

    if (isDark == true) {
      $banner.removeClass('theme-dark');
      $banner_links.removeClass('font-white');
    }
  }
  else {
    $banner.removeClass('nav-bar-visible nav-bar-box-shadow noborder');

    if (isDark == true) {
      $banner.addClass('theme-dark');
      $banner_links.addClass('font-white');
    }

    if (scroll_top > nav_barHeight) {
      $banner.removeClass('visible');
    }
    else {
      $banner.addClass('visible');
    }
  }

  if(clickScroll == false) {
    $nav_links.each(function() {
      var $link = $($(this).attr('href'));

      if($link.position().top <=  scroll_top && scroll_top <= $link.position().top + $link.outerHeight()) {
        $nav_lists.removeClass('active');
        $(this).parent().addClass('active');
      }
      else {
        $(this).parent().removeClass('active');
      }
    })
  }

})

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

/*$(document).ready(function() {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target= $(target);

    $('html,body').stop().animate({
      'scrollTop': ($target.offset().top + 1) + 'px'
    }, 900, 'swing', function () {
      //window.location.hash = target; /* This displays the anchor in the url*/
    /*})
  })
})*/


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
      $banner.addClass('theme-dark');
      $banner_links.addClass('font-white');
      $arrow.addClass('arrow-theme-light');
      isDark = true;
    }
    else {
      $header.removeClass('theme-dark');
      $banner.removeClass('theme-dark');
      $banner_links.removeClass('font-white');
      $arrow.removeClass('arrow-theme-light');
      isDark = false;
    }
  }
})


$banner_links.click(function (x) {
  var $target = $($(this).attr('href'));
  var $link = $(this);

  if ($target != $('#logo').attr('href')) {
    clickScroll = true;

    x.preventDefault();

    if ($(window).scrollTop() >= $header.height() / 2) {
      $banner_lists.removeClass('active');
      $link.parent().addClass('active');
    }
    else {
      isCorrect = false;
    }


    $('html,body').stop().animate({
      'scrollTop': ($target.offset().top + 1) + 'px'
    }, 900, 'swing', function () {
      if (isCorrect == false) {
        $banner_lists.removeClass('active');
        $link.parent().addClass('active');
        isCorrect = true;
      }
      clickScroll = false;
      //window.location.hash = target; /* This displays the anchor in the url*/
    })
  }
})
