# Table Design  

### 작업 목표  

* 접근성을 고려하면서 table design 연습.  
* 강사님께서 제공한 이미지와 텍스트 정보 사용해서 작업 진행.  
* 완성 예제와 동일한 UI로 구성.  

### 작업 진행 내용  

#### 1차 작업 진행  

* `<tr>`, `<th>`, `<td>` 요소만 사용해서 UI 구성 시도.  
* header cell을 세로로 배치하고, standard cell을 가로로 배치.  
* 배치한 테이블을 회전시키는 방향으로 작업 진행했지만 테이블 UI가 어긋남.  
> header cell : header 정보를 포함하고 있는 부분 (`<th>` 요소)  
> standard cell : 데이터를 포함하고 있는 부분 (`<td>` 요소)  

* 모든 내용을 `<td>`요소를 사용하여 작업 진행했을 때, 불필요한 `colspan`이 발생하고 `<td>`요소 사이의 간격 조절이 어려움.  

#### 2차 작업 진행  

* 세로로 배치되어 있는 header 처리를 위해서 하나의 `<tr>`요소 안에 `<th>`와 `<td>`요소 배치.  
* 불필요한 `colspan` 발생과 간격 조절을 위해 `<td>` 내부 내용을 `<ul>` 요소 사용해 배치.  
* 접근성을 위해 `scope` 속성, `<caption>` 요소 포함.  
> `scope` : 셀의 범위를 지정하는 속성. 리더기를 통해 읽어지는 경우 해당 속성 값에 따라 어떤 순서로 읽을지 결정.  
>> `row` : 헤더가 같은 행에 있는 그 다음 셀들 중 일부에 적용됨을 의미.  
>> `col` : 헤더가 같은 열에 있는 그 다음 셀들 중 일부에 적용됨을 의미.  
>> `rowgroup` : 헤더가 동일한 행 집합에 있는 다른 모든 셀에 적용됨을 의미.  
>> `colgroup` : 헤더가 동일한 열 집합에 있는 다른 모든 셀에 적용됨을 의미.  

> `<caption>` : 표의 제목을 나타냄.  

#### 참고  

* https://www.w3.org/WAI/tutorials/tables/  
* http://html5ref.clearboth.org/doku.php?id=html5:attribute:scope
