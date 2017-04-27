# 960 Grid System  

### 작업 목표  

* sass 이용해서 960 Grid System 연습.  
* 아래와 같이 시스템 구현.  
> container width : 960px  
> column : 12  
> gutter : 10px  

### 작업 내용  

* Grid System에서 필요한 클래스 생성.  
* `@function`과 `@for` 사용해서 구현.  

> `column` : 실제로 콘텐츠를 포함하는 부분
> `gutter` : `column`안에 반드시 포함되어야하는 여백 부분  
> `container` : `column`의 수 지정  
> `prefix` : `column`을 기준으로 왼쪽에 여백 설정  
> `suffix` : `column`을 기준으로 오른쪽에 여백 설정  
> `pull` : `column`을 왼쪽에서 오른쪽으로 밀어 넣는 역할  
> `push` : `column`을 오른쪽에서 왼쪽으로 밀어 넣는 역할  
> `alpha` : 왼쪽 `gutter`를 없애는 역할  
> `omega` : 오른쪽 `gutter`를 없애는 역할  

* `pull`과 `push` 클래스를 사용해서 마크업 상의 순서와 보여지는 화면에서의 순서를 조절할 수 있다는 것이 유용함.  
