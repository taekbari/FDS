# Todo List

### 작업 목표  

* 간단한 Todo List 만들어보는 연습.  
* 기본 화면은 Momentum 화면 디자인 따라 만들기.  
* Native Script를 사용해서 요소 탐색 및 생성, 이벤트 설정 등의 작업 진행.  


### 작업 진행 내용  

* 기본적인 Momentum 화면 디자인 구현.  
* 날씨, 위치 그리고 시간 관련 처리는 정적으로 구현.  
* 이벤트 등록 및 동적으로 요소 생성, 삭제 구현.  

#### 사용 기술  

##### `fixed`  

* 화면 전체를 이미지로 채우기 위해서 `fixed`속성 값 사용.  
```css  
.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
```  
* 위와 같이 설정하면 해당 클래스가 적용된 요소의 크기가 화면의 크기로 설정됨.  
> `body` 요소가 아닌 `body` 내부에 있는 자식 요소에 적용할 경우, 요소의 `fixed` 속성으로 인해 `body` 높이가 0이 될 수 있음.  

* 전체 화면을 배경 이미지로 설정하는 다른 방법.  
```css  
html {
  background: url("images/bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
```  

##### `DOM`  

* Native Script를 사용해 문서에서의 요소 탐색.  
```javascript  
var list = document.querySelector('.todo-container__list');
```  

* 요소 생성 및 자식 요소로 추가, 요소 삭제.  
```javascript  
var list_item = document.createElement('li');
list.appendChild(list_item);

var ulist = this.parentNode.parentNode;
ulist.removeChild(this.parentNode);
```  

* 이벤트 등록.  
```javascript  
var todo_btn = document.querySelector('.footer-content__todo-btn');
todo_btn.onclick = function() {
};
```  

#### 이슈 사항  

* `input` 요소에 가상요소 생성해서 사용하려 했지만 가상요소가 생성되지 않음.  
> 가상요소(pseudo element)는 블럭요소 사용할 수 있는 요소이다.  
> 블럭요소 안에서 가상요소를 생성하면 블럭요소 안에 자식요소로 포함되게 된다.  
> 하지만 `input` 또는 `img` 요소들은 블럭요소가 아닌 빈요소(closing element)이기 때문에 자식요소를 포함할 수 없고 따라서, 가상요소도 사용할 수 없다.  

* `input` 요소 종류 중 `search` 사용했을 때, 높이 설정 안되는 문제.  
> `appearance` 속성을 제거해줘야 원하는 대로 스타일링이 가능했다.  
> `appearance` : 운영체제 및 브라우저에 기본적으로 설정되어 있는 테마를 기반으로 요소를 표현하는 속성.  
