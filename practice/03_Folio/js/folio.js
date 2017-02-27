/*
 * 공통 함수
 */
var hasClass = function(element, class_name) {
  return element.className.match(new RegExp('(\\s|^)' + class_name + '(\\s|$)'));
};
var addClass = function(element, class_name) {
  if (!hasClass(element, class_name)) {
    element.className += " " + class_name;
  }
};
var removeClass = function(element, class_name) {
  if (hasClass(element, class_name)) {
    var check = new RegExp('(\\s|^)' + class_name + '(\\s|$)');
    element.className = element.className.replace(check, ' ').trim();
  }
};
var toggleClass = function(element, class_name) {
  if (hasClass(element, class_name)) {
    var check = new RegExp('(\\s|^)' + class_name + '(\\s|$)');
    element.className = element.className.replace(check, ' ').trim();
  }
  else {
    element.className += " " + class_name;
  }
};
var getChildIndex = function(parent, element) {
  for (var i = 0; i < parent.length; i++) {
    if (parent[i] === element) {
      return i;
    }
  }
};

/*
 * mobile menu 버튼 클릭시 is-menu-active 클래스 추가.
 * logo & menu 이미지 변경
 */
var menu_btn = document.querySelector('.header__gnb > button');

var toggleMobileMenu = function() {
  var header_fix = document.querySelector('.header--fix');
  var header_heading = header_fix.querySelector('.header__heading');
  var header_gnb = header_fix.querySelector('.header__gnb');
  var gnb_list = header_gnb.querySelector('.header__gnb-list');

  toggleClass(header_fix, 'is-menu-active');
  toggleClass(header_heading, 'is-menu-active');
  toggleClass(header_gnb, 'is-menu-active');
  toggleClass(gnb_list, 'is-menu-active');
};
menu_btn.onclick = toggleMobileMenu;

/*
 * scroll event
 */
window.addEventListener('scroll', function(e) {
  var device_width = window.innerWidth;
  var header_fix = document.querySelector('.header--fix');
  var gnb_list = header_fix.querySelector('.header__gnb-list');
  var heading = header_fix.querySelector('.header__heading');
  var logo_img = heading.querySelector('img');

  if (window.scrollY === 0) {
    removeClass(header_fix, 'is-scroll');
    removeClass(gnb_list, 'is-scroll');
    removeClass(heading, 'is-scroll');
  }
  else {
    addClass(header_fix, 'is-scroll');
    addClass(gnb_list, 'is-scroll');
    addClass(heading, 'is-scroll');
  }
});

/*
 * carousel 이미지 로테이션 처리.
 * link event 설정.
 */
var count = 1;
var carousel_link = document.querySelectorAll('.carousel__link a');
var carousel_section = document.querySelectorAll('.carousel section');

var setCarouselPosition = function(index, selected_element) {
  for (var i = 0; i < carousel_section.length; i++) {
    carousel_section[i].style.cssText = "left: " + -(index * 100) + "%";
    removeClass(carousel_link[i], 'is-select');
  }
  addClass(selected_element, 'is-select');
};

for (var i = 0; i < carousel_link.length; i++){
  carousel_link[i].onclick = function() {
    var index = getChildIndex(carousel_link, this);
    setCarouselPosition(index, this);
    count = index;
  };
}

var carousel_interval = setInterval(function() {
  setCarouselPosition(count, carousel_link[count])
  if (count == 2) {
    count = 0;
  }
  else {
    count++;
  }
}, 4000);
