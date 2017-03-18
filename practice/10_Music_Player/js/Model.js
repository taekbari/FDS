var Model = (function(){
  'use strict';

  // 여러 개의 객체 생성시 데이터 영역을 공유하기 때문에
  // 이를 방지하기 위한 reference_count 설정
  var data_list = [];
  var reference_count = 0;

  // constructor
  function _Model(data) {
    if (data && !Array.isArray(data)) {
      throw new Error('초기 데이터는 배열 유형이여야 합니다.');
    }
    this.reference_count = reference_count++;
    data_list.push(data || []);
  }

  // model instance function
  _Model.prototype = {
    // data에 포함되는 데이터 형식.
    // 1. Object 배열 ([{}, {}, {}])
    //  - 배열이 추가되면 객체의 reference_count 위치에 배열 추가.
    // 2. Object ({})
    //  - 객체가 추가되면 객체의 Object 배열에 객체를 추가.
    'add' : function(new_item) {
      if (new_item && Array.isArray(new_item)) {
        data_list[this.reference_count] = data_list[this.reference_count].concat(new_item);
      }
      if (new_item && !Array.isArray(new_item) && typeof new_item === 'object') {
        data_list[this.reference_count].push(new_item);
      }
    },
    // data_list 값 리턴하는 함수.
    // 매개변수 값이 없으면 전체 리턴.
    // 양수이면 해당 인덱스의 값 리턴.
    // 음수이면 뒤에서 인덱스 만큼의 값 리턴.
    'get' : function(index) {
      if (typeof index === 'undefined') {
        return data_list[this.reference_count];
      }
      else {
        if (index < 0) {
          return this.get(this.size() + index);
        }
        else {
          return data_list[this.reference_count][index];
        }
      }
    },
    // data_list 값 설정하는 함수
    'set' : function(index, callback) {
      var instance = this;
      var original_data = data_list[this.reference_count][index];

      data_list[this.reference_count].splice(index, 1, callback.call(instance, original_data));
    },
    // 전달받은 인덱스의 데이터를 삭제하는 함수
    // 인덱스값이 없으면 데이터 모두 삭제
    'remove' : function(index) {
      if (typeof index === 'undefined') {
        data_list[this.reference_count].splice(0, this.size());
      }
      else {
        data_list[this.reference_count].splice(index, 1);
      }
    },
    'size' : function() {
      return data_list[this.reference_count].length;
    }
  };

  return _Model;
}());
