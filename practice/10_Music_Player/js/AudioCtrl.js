var AudioCtrl = (function(global) {
  'use strict';

  var _document = global.document;
  var _total_time, _current_time;

  function _AudioCtrl(source, readyFunction) {
    'use strict';
    // media 초기화
    this.media = null;

    // audio 객체 리턴
    return this.create(source, readyFunction);
  }

  // 클래스(생성자 함수) 메서드
  _AudioCtrl.getReadableTime = function(seconds) {
    var min, sec;
    seconds = Math.floor( seconds );
    min = Math.floor( seconds / 60 );
    min = min >= 10 ? min : '0' + min;
    sec = Math.floor( seconds % 60 );
    sec = sec >= 10 ? sec : '0' + sec;
    return min + ':' + sec;
  };

  _AudioCtrl.prototype = {
    'create': function(source, readyFunction) {
      'use strict';

      var audio;
      // audio 객체 생성
      audio = _document.createElement('audio');
      // 속성 설정
      audio.setAttribute('src', source);
      // audio play 준비 완료 되었을 때의 처리
      audio.oncanplay = readyFunction.bind(this);
      // 객체 속성 설정
      this.media = audio;
    },
    'play': function() {
      'use strict';

      // audio play
      this.media.play();
    },
    'pause' : function() {
      'use strict';

      // audio pause
      this.media.pause();
    },
    'stop' : function() {
      'use strict';

      // audio stop
      this.media.pause();
      this.media.currentTime = 0;
    },
    'update': function(callback) {
      'use strict';

      // audio update 되었을 때의 처리
      this.media.ontimeupdate = callback.bind(this);
    },
    'change': function(source) {
      'use strict';

      // audio src 속성 변경
      this.media.setAttribute('src', source);
    },
    'getCurrentTime': function() {
      'use strict';

      return _AudioCtrl.getReadableTime(this.media.currentTime);
    },
    'getTotalTime': function() {
      'use strict';

      return _AudioCtrl.getReadableTime(this.media.duration);
    },
    'getProgress': function(precision) {
      'use strict';

      var audio, percent;

      audio = this.media;
      percent = audio.currentTime / audio.duration * 100;
      precision = precision || 0;

      return percent.toFixed(precision) + '%';
    }
  };

  return _AudioCtrl;
}(window));
