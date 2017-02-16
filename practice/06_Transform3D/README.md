# Transform 3D  

`transform` 속성을 사용해서 3D 애니메이션 실습.  
카드 플립 애니메이션 구현.  

## 사용된 기술  

### `CSS tranforms`  

구현하려는 3D 애니메이션을 위해 사용.
설정해야하는 속성은 다음과 같음.  

> `transform-style: preserve-3d` 기본값은 `flat`임.  
> `perspective(450deg)` z축을 따라 캔버스로부터 사용자의 거리 설정.  
> 0 또는 음수값은 입체적인 변화가 없고 0에 가까울수록 급격하게 변화함.  
> `backface-visibility: hidden` 요소의 뒷면을 표시할지 결정. 기본값은 `visible` 이며 미러 이미지를 표시함.  

### `sprite image`  

카드 이미지를 분할하여 사용할 경우 이미지 요청 request가 증가하기 때문에, `sprite`기법 사용.  
`background-position` 값을 이용해 사용.  

### `flex`  

카드의 배치와 가운데 정렬을 위해 `flex` 사용.  
`justify-content`와 `align-items` 함께 사용.  
