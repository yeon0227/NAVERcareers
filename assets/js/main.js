
// header sub navi
$('#header .nav-left .nav-item').hover(function (){
    if ($(this).find('.sub-list').length) {
      $('#header .nav-left .nav-list').addClass('active');
      $('#header .nav-left .sub-list').addClass('active');
    }
  }, function () {
    $('#header .nav-left .nav-list').removeClass('active');
    $('#header .nav-left .sub-list').removeClass('active');
  }
);
// header lang list
$('#header .nav-right .nav-item:last-child').click(function (e) { 
  e.preventDefault();
  $('#header .nav-right .lang-item').toggleClass('active');
});
// header side-nav show
$('#header .nav-toggle .btn-toggle').click(function (){ 
  $('#header .nav-toggle').addClass('on');
  $('#header .side-nav').addClass('show');  
  // $('html, body').css('overflow', 'hidden'); 
});
$('#header .nav-toggle .btn-close').click(function () { 
  $('#header .nav-toggle').removeClass('on');
  $('#header .side-nav').removeClass('show');  
  // $('html, body').css('overflow', 'hidden'); 
});
// header side-nav lnb-list
$('#header .side-nav .gnb-title').click(function (){ 
  $(this).toggleClass('slide-down').next('.lnb-list').stop().slideToggle();  
});

// sc-visual Swiper slide
const visualSlide = new Swiper ('.sc-visual .swiper',{
  loop: true,
  speed: 500,
  allowTouchMove: false,
  autoplay: {
    delay: 6000,
    disableOnInteraction : false
  }
});

// sc-search input mobile page
$('.sc-search .group-input .form-mob .form-btn').click(function (e){
  e.preventDefault();
  $('.sc-search .group-input-mo').addClass('on'); 
});
$('.sc-search .group-input-mo .btn-close').click(function (e){
  e.preventDefault();
  $('.sc-search .group-input-mo').removeClass('on'); 
});

// sc-search input mobile active
$(document).on('click', function (e) {
  if (!$(e.target).closest('.sc-search .group-input-mo .search-area').length) {
    $('.sc-search .group-input-mo .search-area').removeClass('active');
  }
});
$('.sc-search .group-input-mo .search-input').click(function (){ 
  $('.sc-search .group-input-mo .search-area').addClass('active');
});

// sc-search .group-input-mo depth1
$('.sc-search .group-input-mo .filter-depth1').click(function (e) { 
  e.preventDefault();
  if ($(this).hasClass('rotated')) {
    $(this).removeClass('rotated').siblings('.sub-list').stop().slideUp();
  } else {
    $(this).addClass('rotated').siblings('.sub-list').stop().slideDown();
  }
});
// sc-search .group-input-mo depth2
$('.sc-search .group-input-mo .filter-depth2').click(function (e) { 
  e.preventDefault();
  if ($(this).hasClass('rotated')) {
    $(this).removeClass('rotated').siblings('.sub-list').stop().slideUp();
  } else {
    $(this).addClass('rotated').siblings('.sub-list').stop().slideDown();
  }
});
// sc-search .group-input-mo depth3
$('.sc-search .group-input-mo .filter-depth3').click(function (e) { 
  e.preventDefault();
  if ($(this).hasClass('rotated')) {
    $(this).removeClass('rotated').siblings('.sub-list').stop().slideUp();
  } else {
    $(this).addClass('rotated').siblings('.sub-list').stop().slideDown();
  }
});

// sc-search input mobile select
$('.sc-search .group-input-mo .filter-select').click(function (e) { 
  e.preventDefault(); 

  if ($(this).hasClass('black')) {
    $(this).removeClass('black'); 
  } else {
    $(this).addClass('black');
  }
});
// sc-search input mobile select reset
$('.sc-search .group-input-mo .btn-clear').click(function (e) { 
  e.preventDefault();
  $('.sc-search .group-input-mo .filter-select').removeClass('black');
});
// sc-search select box1
const selectbox1Element = document.querySelector(".select-box.box1");
selectbox1Element.style.color = "#d0d0d0";
selectbox1Element.addEventListener("change", function() {
    selectbox1Element.style.color = "#000";
});
// sc-search select box2
const selectbox2Element = document.querySelector(".select-box.box2");
selectbox2Element.style.color = "#d0d0d0";
selectbox2Element.addEventListener("change", function() {
    selectbox2Element.style.color = "#000";
});

// sc-people Swiper slide
const peopleSlide = new Swiper ('.sc-people .swiper', {
  slidesPerView: 1,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    prevEl:'.sc-people .swiper-control .btn.prev',
    nextEl:'.sc-people .swiper-control .btn.next'
  },
  breakpoints: {
    768: {
      slidesPerView: 1.1
    }
  }
});

// sc-benefits Swiper slide
const benefitsSlide = new Swiper ('.sc-benefits .swiper', {
  speed: 500,
  spaceBetween: 30,
  slidesPerView: 1,
  navigation: {
    nextEl:'.sc-benefits .swiper-control .btn.next',
    prevEl:'.sc-benefits .swiper-control .btn.prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 3
    }
  }
});

// footer family
$('#footer .foot-family .family-btn').click(function () { 
  $('#footer .foot-family .family-wrap').toggleClass('active');
  $('#footer .foot-family .family-btn').toggleClass('active');
});