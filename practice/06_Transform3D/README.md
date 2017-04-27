# Transform 3D  

### 작업 목표  

* `transform` 속성을 사용해서 3D 애니메이션 실습.  
* 카드 플립 애니메이션 구현.  

### 작업 진행 내용  

* `transform` 속성에서 제공하는 3D 애니메이션 적용.
* `sprite image` 사용해 배경이미지 설정.  

#### 사용 기술  

##### `CSS transform`  

구현하려는 3D 애니메이션을 위해 사용.
설정해야하는 속성은 다음과 같음.  

* `transform-style` : 기본값은 `flat`임.  
  * 3D 공간에서의 요소 전환을 원하면 `preserve-3d` 값으로 설정.  
* `transform-origin` : 변형의 기준점을 설정하는 속성.  
  * 기본 값으로 `50% 50%`이며 `length`, `percentage` 또는 키워드를 사용할 수 있음.  
* `perspective` : z축을 따라 캔버스로부터 사용자의 거리 설정.  
  * 0 또는 음수 값은 입체적인 변화가 없고 0에 가까울수록 급격하게 변화함.  
* `backface-visibility` : 요소의 뒷면을 표시할지 결정.  
  * 기본 값은 `visible` 이며 미러 이미지를 표시함.  

##### `sprite image`  

* 카드 이미지를 분할하여 사용할 경우 이미지 요청 request가 증가하기 때문에, `sprite`기법 사용.  
* 아이콘과 버튼 같은 자주 쓰는 이미지들을 한 이미지로 통합해 사용.  
* `background-position` 값을 이용해 사용.  

#### 페이지 링크  
* https://taekbari.github.io/FDS/practice/06_Transform3D/  
