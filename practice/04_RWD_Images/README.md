# Responsive Design  

### 작업 목표  

* 12개의 이미지를 반응형 화면에 맞춰 나열하는 연습.  
* 아래와 같이 화면을 구성.  

> 데스크탑 : 4 * 3  
> 태블릿 : 3 * 4  
> 모바일 : 2 * 6  

### 작업 내용  

#### 반응형 화면 구성  

* 고정 픽셀 대신에 `%` 값으로 넓이 설정.  
* 반응형 화면 구성을 위해 `flex` 속성 사용.  
* 화면 별로 `flex-basis`와 `flex-wrap`을 사용하여 행과 열 구성.  

#### 유연한 이미지 처리  

* 이미지 비율을 맞추기 위한 속성 설정.  
* `width` 속성을 `100%`으로 설정할 경우 이미지의 가로 길이에 맞춰 높이가 설정됨.  

```css  
img {
  width: 100%;
  height: auto;
}
```  

#### 이미지 비율 처리  

* `padding` 속성의 특성을 사용해서 각 이미지의 비율 설정.  
* 여기서는 1:1 비율을 갖음.  

> `padding-top`을 사용한 이유?  
>> `padding` 값을 퍼센트로 설정할 경우, `padding`은 자신을 포함한 요소(즉, 부모요소)의 넓이를 기준으로 값을 가져오게 됨.  
>> 따라서, 이미지 넓이와 동일한 높이를 설정해 줄 수 있음.  

> `height` 값에 퍼센트 설정을 하지 않는 이유?  
>> 부모의 높이 값이 설정되어 있지 않을 경우, 높이 값이 0으로 설정됨.  
>> 부모의 높이가 설정되어 있어도 퍼센트로 설정시 원하는 결과 값이 나오지 않을 수 있음.  

```css  
.rwd-container figure {
  flex: 0 1 25%;
  padding-top: 25%;
  overflow: hidden;
}
```  

* 이미지의 높이가 구성한 높이보다 작을 경우, 빈 공간 처리를 위해서 `min-height: 100%`로 설정함.  
* `min-height: 100%` 설정시 발생한 문제.  
> `min-height: 100%`로 설정함으로써 높이가 강제로 늘어나게 되어서 비율이 깨지는 현상이 발생.  
> `min-height` 설정하는 방법에서 높이가 넓이보다 클 경우에 설정하는 `css` 클래스 추가.  

```css  
img.height {
  width: auto;
  height: 100%;
}
```  

#### 이미지 가운데 정렬 처리  

* `translate` 속성 사용.  
```css  
.rwd-container figure img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```  

#### 페이지 링크  
* https://taekbari.github.io/FDS/practice/04_RWD_Images/  
