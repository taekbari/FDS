var front = document.getElementsByClassName('flip-card__front');
var back = document.getElementsByClassName('flip-card__back');

for (var $i = 0; $i < front.length; $i++) {
  front[$i].onclick = function() {
    this.parentNode.style.cssText = 'transform:  rotateX(180deg) translateY(-100%)';
  };
  back[$i].onclick = function() {
    this.parentNode.style.cssText = 'transform:  rotateX(360deg) translateY(0)';
  };
}
