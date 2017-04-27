# Parallax Scrolling  

### 작업 목표  

* w3school에 있는 Parallax Scrolling 예제 따라 만들기.  
* `background` 속성 값을 사용해서 효과 나타내기.  

### 작업 내용  

#### 사용 기술  

##### 화면 크기의 높이 설정  

* `html`과 `body` 요소의 높이를 viewport 만큼 설정하는 방법.  

```css  
html, body {
  height: 100%;
}
```  
> 만약 내용이 viewport를 넘어가게 되면, `body` 요소는 viewport 만큼의 높이만 갖는다.  

```css  
html {
  min-height: 100%;
}
body {
  height: 100%;
}
```  
```css  
body {
  height: 100%;
}
```  
```css  
body {
  min-height: 100%;
}
```  
```css  
html {
  height: 100%;
}
```  
```css  
html {
  min-height: 100%;
}
```  
> 만약 viewport가 내용보다 크게되면, `body` 요소는 화면 전체를 채우지 못한다.  

```css  
html {
  height: 100%;
}
body {
  min-height: 100%;
}
```  
> 위와 같이 설정할 경우, 모든 상황을 만족할 수 있다.  

##### `background-attachment`  

* 배경 이미지를 어떻게 고정할지 결정하는 속성.  
> `scroll` : 기본 값으로, 이미지가 요소의 상대적인 위치  
> `fixed` : 이미지가 윈도우 창에 상대적인 위치. 스크롤바를 내려도 이미지 위치가 그대로임  
> `local` : 스크롤할 때 요소의 내용에 상대적인 위치  

#### 참고  

* https://codepen.io/absolutholz/post/html-and-body-element-height-100  
* http://aboooks.tistory.com/160  
