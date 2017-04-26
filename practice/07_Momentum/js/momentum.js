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

var setListCount = function() {
  var todo_count = document.querySelector('.todo-container__count');
  var ulist = document.querySelector('.todo-container__list');

  var list_count = ulist.children.length;
  todo_count.firstChild.nodeValue = list_count + ' to do';
};

var toggleTodoContainer = function() {
  var todo_container = document.querySelector('.todo-container');
  toggleClass(todo_container, 'display-none');
  setListCount();
};

var enterInputText = function(e) {
  if (!e) {
    e = window.event;
  }
  var key_code = e.keyCode || e.which;
  if (key_code == 13) {
    addListItem(todo_input.value);
    todo_input.value = '';
    todo_input.focus();
    return false;
  }
};

var addListItem = function(input_text) {
  var list = document.querySelector('.todo-container__list');
  var list_item = document.createElement('li');
  var item_check = document.createElement('input');
  var list_content = document.createElement('span');
  var delete_btn = document.createElement('button');
  var content_text = document.createTextNode(input_text);
  var delete_btn_text = document.createTextNode('x');

  item_check.setAttribute('type', 'checkbox');
  delete_btn.setAttribute('type', 'button');
  list_content.appendChild(content_text);
  delete_btn.appendChild(delete_btn_text);

  list_item.appendChild(item_check);
  list_item.appendChild(list_content);
  list_item.appendChild(delete_btn);

  list.appendChild(list_item);
  
  item_check.onchange = function() {
    if (this.checked) {
      addClass(this.parentNode, 'is-check');
    }
    else {
      removeClass(this.parentNode, 'is-check');
    }
  };
  delete_btn.onclick = function() {
    var ulist = this.parentNode.parentNode;
    ulist.removeChild(this.parentNode);
    setListCount();
  };
  setListCount();
};

var todo_btn = document.querySelector('.footer-content__todo-btn');
todo_btn.onclick = toggleTodoContainer;

var todo_input = document.querySelector('.todo-container__input');
todo_input.onkeypress = enterInputText;
