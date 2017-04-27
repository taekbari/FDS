# Responsive Web Design  

Responsive Web Page 만들어 보는 연습.  
강사님께서 제공한 psd 파일 기준으로 작업 진행.  
모바일, 태블릿, 데스크탑 화면 크기에 따라 반응하도록 작업.  

> 모바일 우선으로 작업 진행.  

## `CSS` 스타일 가이드.  

* BEM (Block, Element, Modifier) 작성법 사용.  
* 변수 작성은 가독성을 위해 `scss` 파일로 작성.  
* 나머지 모듈은 `sass` 파일로 작성.  
* 스타일 속성 작성 순서는 다음과 같음.  

```css  
.style {
  /* display or position 관련 속성 */
  /* 모두 사용될 경우 display 우선 작성 */
  /* 박스 모델 안에서 밖으로 속성 작성. */
  /* 콘텐츠 넓이 & 높이 */
  /* 패딩 */
  /* 보더 */
  /* 마진 순으로. */
  /* 텍스트 관련 속성 */
  /* 백그라운드 관련 속성 */
}
```  

#### 페이지 링크  
* https://taekbari.github.io/FDS/practice/02_RWD/  
