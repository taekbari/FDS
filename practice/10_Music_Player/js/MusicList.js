var MusicList = (function(Handlebars){
  'use strict';

  var _model;
  var _music_list_template_html = document.querySelector('#music-list-template').innerHTML;
  var _music_list_template = Handlebars.compile(_music_list_template_html);

  function _MusicList(model) {
    if (model && typeof model !== 'object') {
      throw new Error('잘못된 데이터 형식입니다.');
    }
    _model = model || {};
  }

  _MusicList.prototype = {
    // 뮤직 리스트 만드는 함수
    'make' : function() {
      var data = {
        items: _model.get()
      };
      var music_list = _music_list_template(data);
      return music_list;
    },
    // 리스트에 포함된 앵커 요소에 이벤트 바인딩하는 함수
    'bindEvent' : function(callback) {
      var music_list_anchors;
      music_list_anchors = document.querySelectorAll('.player__list a');

      Array.prototype.forEach.call(music_list_anchors, function(item, index) {
        item.onclick = function(event) {
          event.preventDefault();
          callback(_model.get(index));
        };
      });
    }
  };

  return _MusicList;
}(window.Handlebars));
