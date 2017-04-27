# Web UI Kit  

### 작업 목표  

* Sass를 사용해서 UI Kit 만들어 보는 연습.  
* 웹 상에서 제공하는 psd 파일을 기준으로 작업 진행.  
* 여러 UI 중에 Button, Select, Checkbox 요소 작업.  

> Select 요소에 포함되는 option 요소의 스타일링이 어렵기 때문에, Dropdown menu 로 작업 진행함.  

### 작업 진행 내용  

* Button, Select, Checkbox 요소 작업 완료.  
* Dropdown의 경우 `<li>`요소와 `<a>`요소를 사용.
* 각 요소들 별로 Default, Hover, Click 상태 클래스 생성 및 적용.  

#### 사용 기술  

* IR 기법 : 이미지 대체 텍스트를 제공하기 위한 `css`기법.  
* 여기서는 checkbox에서 사용한 `label`요소의 텍스트를 숨기고 사용자가 정의한 체크 이미지를 표시하기 위해 사용.  

#### 주의사항  

* `sass`에서 제공하는 `darken`과 `lighten` 함수 사용시 원하는 결과를 얻지 못하는 문제가 있다. 색의 비율을 감소 또는 증가시킬 때, 점진적으로 색이 변화하는 것이 아니라, 순식간에 색이 흰 색 또는 검은 색으로 변하게 된다. 이를 방지하기 위해 `mix()` 함수를 사용하여 처리하는 것이 좋다.  
> 이와 같은 현상을 정리한 예제 - http://codepen.io/KatieK2/pen/tejhz/
