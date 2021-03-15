"use strict";

var _this = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _$$magnificPopup, _$$magnificPopup2;

  /* Lazy Loading */
  $('#infiniteScroll').jscroll({
    padding: 10,
    nextSelector: '.news-btn-scroll:last',
    contentSelector: '.one-comment'
  });
  /* First Slider Home Page */

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    prevArrow: "<img class='new-arrow-prev new-arrow' src='img/icons/next.svg'>",
    nextArrow: "<img class='new-arrow-next new-arrow' src='img/icons/next.svg'>",
    focusOnSelect: true
  });
  /* Company Slider */

  $('.company-slider').slick({
    dots: true,
    lazyLoad: 'ondemand',
    infinite: false,
    autoplay: false,
    autoplaySpeed: 2500,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<img class='new-arrow-prev new-arrow' src='img/icons/next.svg'>",
    nextArrow: "<img class='new-arrow-next new-arrow' src='img/icons/next.svg'>",
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  /* First Slider Home Page */

  $('.slider-one').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-all'
  });
  $('.slider-all').slick({
    lazyLoad: 'ondemand',
    autoplay: false,
    centerMode: true,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-one',
    dots: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1111,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  /* Slider one news */

  $('.one-news-slider').slick({
    useTransform: true,
    autoplay: true,
    autoplaySpeed: 4500,
    prevArrow: "<img class='new-arrow-prev new-arrow' src='img/icons/next.svg'>",
    nextArrow: "<img class='new-arrow-next new-arrow' src='img/icons/next.svg'>",
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    cssEase: 'ease-out',
    responsive: [{
      breakpoint: 1024,
      settings: {
        dots: false
      }
    }]
  });
  /* First Slider Home Page */

  $('.girl-slide').slick({
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 6500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<img class='new-arrow-prev new-arrow' src='img/icons/next.svg'>",
    nextArrow: "<img class='new-arrow-next new-arrow' src='img/icons/next.svg'>"
  });
  /* Magnific Popup */

  $('.popup-gallery').magnificPopup((_$$magnificPopup = {
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка #%curr%...'
  }, _defineProperty(_$$magnificPopup, "delegate", 'a:not(.slick-cloned)'), _defineProperty(_$$magnificPopup, "mainClass", 'mfp-img-mobile'), _defineProperty(_$$magnificPopup, "cursor", 'mfp-zoom-out-cur'), _defineProperty(_$$magnificPopup, "gallery", {
    enabled: true,
    navigateByImgClick: true,
    tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
    preload: [0, 2] // Will preload 0 - before current, and 1 after the current image

  }), _defineProperty(_$$magnificPopup, "image", {
    tError: '<a href="%url%">"Это фото #%curr%</a> не найдено',
    titleSrc: function titleSrc(item) {
      return item.el.attr('title') + '<small>SportKlan.ru</small>';
    }
  }), _$$magnificPopup));
  $('.girl-gallery').magnificPopup((_$$magnificPopup2 = {
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка #%curr%...'
  }, _defineProperty(_$$magnificPopup2, "delegate", 'a:not(.slick-cloned)'), _defineProperty(_$$magnificPopup2, "mainClass", 'mfp-img-mobile'), _defineProperty(_$$magnificPopup2, "cursor", 'mfp-zoom-out-cur'), _defineProperty(_$$magnificPopup2, "gallery", {
    enabled: true,
    navigateByImgClick: true,
    tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
    preload: [0, 2] // Will preload 0 - before current, and 1 after the current image

  }), _defineProperty(_$$magnificPopup2, "image", {
    tError: '<a href="%url%">"Это фото #%curr%</a> не найдено',
    titleSrc: function titleSrc(item) {
      return item.el.attr('title') + '<small>SportKlan.ru</small>';
    }
  }), _$$magnificPopup2));
  $('.image-table').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });
  $('.image-popup-one-news').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });
  /* Hover effect card blocks */

  $('.block1-hover').mouseover(function () {
    $(".block1").addClass("hover-img");
  });
  $('.block1-hover').mouseout(function () {
    $(".block1").removeClass("hover-img");
  });
  /* Search Block */

  $(".search-icon").click(function () {
    $(".cont, .input").toggleClass("active");
    $("input[type='text']").focus();
  });
  /* Calendar days */

  $('#yourId').jalendar({
    color: '#333',
    color2: '#333',
    lang: 'RU',
    sundayStart: false
  });
  /* Active Search */

  $(".active-search").click(function () {
    $("#search-link").show();
    $(".form-active").toggleClass("top-slide");
  });
  /* Active Search */

  $(".nav-item").click(function () {
    $(this).toggleClass("active");
  });
  $('.nav-item').on("click", function () {
    $(this).addClass('active');
  });
  /* Move top */

  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
  /* Animate Burger */

  var forEach = function forEach(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) {
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    } else for (var e = 0, l = t.length; l > e; e++) {
      o.call(r, t[e], e, t);
    }
  };

  var hamburgers = document.querySelectorAll(".hamburger");

  if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
      }, false);
    });
  }
});
/* Filter life hack */

$(function () {
  jQuery('.js-filter-nav li').click(function () {
    event.preventDefault(); // grab data-filter attr and if not * hide all items that do not have that class
    // using slideDown (all) followed by slidUp (selection) - js used for this as it's thoughts to be less work on the browsers that struggle with ispotope 
    // Fade in/out works better with columns as alide or similar created a messy animation

    var filter = jQuery(this).attr('data-filter');

    if (filter == '*') {
      jQuery('.filter-block .filter').fadeIn(500);
    } else {
      jQuery('.filter-block .filter.' + filter).fadeIn(500);
      jQuery('.filter-block .filter:not(.' + filter + ')').fadeOut(500);
    }
  });
});
/* Add filter active */

$(".tablesorter thead tr th").click(function () {
  $(this).toggleClass('rotate-arrow');
});
/* Added new class for table arrow */

$(".js-filter-nav li").click(function () {
  $(".js-filter-nav li").removeClass('active-filter');
  $(this).toggleClass('active-filter');
});
/* Top Scroll */

$("a.scroll-top").click(function () {
  event.preventDefault();
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 800);
  return false;
});
/* sticky block bookmekers */

$(function () {
  $.fn.followTo = function (pos) {
    var $this = this,
        $window = $(window);
    $window.scroll(function (e) {
      if ($window.scrollTop() > pos) {
        $this.css({
          position: 'fixed',
          top: 15
        });
      } else {
        $this.css({
          position: 'static'
        });
      }
    });
  };

  $('.sticky-container').followTo(515);
});
$(function () {
  $.fn.followTo = function (pos) {
    var $this = this,
        $window = $(window);
    $window.scroll(function (e) {
      if ($window.scrollTop() > pos) {
        $this.css({
          position: 'static'
        });
      }
    });
  };

  $('.sticky-container').followTo(4000);
});
/* Add rating active */

$(".all-rating-block a").click(function () {
  $(".all-rating-block a").removeClass('active-rating');
  $(this).toggleClass('active-rating');
});
/* 404 Error */

document.addEventListener("DOMContentLoaded", function () {
  $('.football-ball').addClass('active-move-ball');
});
/* Delete search pop up */

$(function ($) {
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $("#search-link"); // тут указываем ID элемента

    if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) {
      // и не по его дочерним элементам
      div.hide(); // скрываем его
    }
  });
});

window.onload = function () {
  /* Custom add file comments */
  document.querySelector("html").classList.add('js');
  var fileInput = document.querySelector(".input-file"),
      button = document.querySelector(".input-file-trigger"),
      the_return = document.querySelector(".file-return");

  if (button) {
    button.addEventListener("keydown", function (event) {
      if (event.keyCode == 13 || event.keyCode == 32) {
        fileInput.focus();
      }
    });
    button.addEventListener("click", function (event) {
      fileInput.focus();
      return false;
    });
    fileInput.addEventListener("change", function (event) {
      the_return.innerHTML = this.value;
    });
  }
};

new WOW().init();
/* Input search */

function filterLeague() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputLeague");
  filter = input.value.toUpperCase();
  table = document.getElementById("messages");
  tr = table.getElementsByTagName("tr"); // Loop through all table rows, and hide those who don't match the search query

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName("league")[0];

    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterName() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputName");
  filter = input.value.toUpperCase();
  table = document.getElementById("messages");
  tr = table.getElementsByTagName("tr"); // Loop through all table rows, and hide those who don't match the search query

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName("name")[0];

    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterLeague1() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputLeague1");
  filter = input.value.toUpperCase();
  table = document.getElementById("messages1");
  tr = table.getElementsByTagName("tr"); // Loop through all table rows, and hide those who don't match the search query

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName("league")[0];

    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterName1() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputName1");
  filter = input.value.toUpperCase();
  table = document.getElementById("messages1");
  tr = table.getElementsByTagName("tr"); // Loop through all table rows, and hide those who don't match the search query

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName("name")[0];

    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterLeague2() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputLeague2");
  filter = input.value.toUpperCase();
  table = document.getElementById("messages2");
  tr = table.getElementsByTagName("tr"); // Loop through all table rows, and hide those who don't match the search query

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName("league")[0];

    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterName2() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputName2");
  filter = input.value.toUpperCase();
  table = document.getElementById("messages2");
  tr = table.getElementsByTagName("tr"); // Loop through all table rows, and hide those who don't match the search query

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName("name")[0];

    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterLeague3() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputLeague3");
  filter = input.value.toUpperCase();
  table = document.getElementById("messages3");
  tr = table.getElementsByTagName("tr"); // Loop through all table rows, and hide those who don't match the search query

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName("league")[0];

    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function filterName3() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputName3");
  filter = input.value.toUpperCase();
  table = document.getElementById("messages3");
  tr = table.getElementsByTagName("tr"); // Loop through all table rows, and hide those who don't match the search query

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName("name")[0];

    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
/* Sort Table */


var getCellValue = function getCellValue(tr, idx) {
  return tr.children[idx].innerText || tr.children[idx].textContent;
};

var comparer = function comparer(idx, asc) {
  return function (a, b) {
    return function (v1, v2) {
      return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
    }(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
  };
}; // do the work...


document.querySelectorAll('th').forEach(function (th) {
  return th.addEventListener('click', function () {
    var table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)')).sort(comparer(Array.from(th.parentNode.children).indexOf(th), _this.asc = !_this.asc)).forEach(function (tr) {
      return table.appendChild(tr);
    });
  });
});
/* Scroll add class for block */

var postion = $('#static-block').offset().top,
    height = $('#static-block').height();
$(document).on('scroll', function () {
  var scroll = $(document).scrollTop();

  if (scroll > postion && scroll < postion + height) {
    $('.rating-block-sidebar a:first-child').addClass('move-now');
  } else {
    $('.rating-block-sidebar a:first-child').removeClass('move-now');
  }
});
var postion2 = $('#informate-block').offset().top,
    height2 = $('#informate-block').height();
$(document).on('scroll', function () {
  var scroll2 = $(document).scrollTop();

  if (scroll2 > postion2 && scroll2 < postion2 + height2) {
    $('.rating-block-sidebar a:nth-child(3)').addClass('move-now');
  } else {
    $('.rating-block-sidebar a:nth-child(3)').removeClass('move-now');
  }
});
var postion3 = $('#video-block').offset().top,
    height3 = $('#video-block').height();
$(document).on('scroll', function () {
  var scroll3 = $(document).scrollTop();

  if (scroll3 > postion3 && scroll3 < postion3 + height3) {
    $('.rating-block-sidebar a:nth-child(4)').addClass('move-now');
  } else {
    $('.rating-block-sidebar a:nth-child(4)').removeClass('move-now');
  }
});
var postion4 = $('#bookmaker-reviews-block').offset().top,
    height4 = $('#bookmaker-reviews-block').height();
$(document).on('scroll', function () {
  var scroll4 = $(document).scrollTop();

  if (scroll4 > postion4 && scroll4 < postion4 + height4) {
    $('.rating-block-sidebar a:nth-child(2)').addClass('move-now');
  } else {
    $('.rating-block-sidebar a:nth-child(2)').removeClass('move-now');
  }
});
var postion5 = $('#description-block').offset().top,
    height5 = $('#description-block').height();
$(document).on('scroll', function () {
  var scroll5 = $(document).scrollTop();

  if (scroll5 > postion5 && scroll5 < postion5 + height5) {
    $('.rating-block-sidebar a:nth-child(5)').addClass('move-now');
  } else {
    $('.rating-block-sidebar a:nth-child(5)').removeClass('move-now');
  }
});