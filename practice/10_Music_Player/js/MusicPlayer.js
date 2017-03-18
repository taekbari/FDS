var MusicPlayer = (function(global, Handlebars) {
  'use strict';

  var _document, _player_container, _main_container;
  var _music_player_template_html, _music_player_template;
  var _audioCtrl, _model;

  _document = global.document;

  // player template 사용을 위한 설정 (Handlebars)
  _music_player_template_html = _document.querySelector('#music-player-template').innerHTML;
  _music_player_template = Handlebars.compile(_music_player_template_html);

  _main_container = _document.querySelector('.player');
  _player_container = _main_container.querySelector('.music__player__container');

  function _MusicPlayer(model) {
    if (model && typeof model !== 'object') {
      throw new Error('잘못된 데이터 형식입니다.');
    }
    _model = model || {};
  }

  _MusicPlayer.prototype = {
    'show' : function(data_index) {
      'use strict';

      // 초기화 작업
      // transition 효과를 위해 요소들을 제거하지 않고 숨기도록 처리했기 때문에
      // player 화면을 보여줄 때마다 기존에 존대하는 요소들을 제거할 필요가 있음
      player_flip = _player_container.querySelectorAll('[class*="flip"]');

      for (var i = 0, length = player_flip.length; i < length; i++) {
        _player_container.removeChild(player_flip[i]);
      }

      // Handlebars 사용해서 template html 생성
      data = _model.get(data_index);
      music_player = _music_player_template(data);
      // 생성한 html을 화면에 추가
      _player_container.insertAdjacentHTML('beforeend', music_player);

      // player 나타났을 때의 transition을 위한 class 적용.
      _main_container.classList.add('is-music-select');
      _player_container.classList.add('is-music-select');

      _audioCtrl = new AudioCtrl(data.source, function() {
        'user strict';
        var current_time = _player_container.querySelector('.music__player__control__seekbar__current-time');
        var total_time = _player_container.querySelector('.music__player__control__seekbar__total-time');

        current_time.innerText = this.getCurrentTime();
        total_time.innerText = this.getTotalTime();
      });

      var close_btn = _player_container.querySelectorAll('.music__player__close-btn');
      for (var i = 0, length = close_btn.length; i < length; i++) {
        close_btn[i].onclick = _MusicPlayer.prototype.close.bind(this);
      }

      var play_btn = _player_container.querySelector('.music__player__play-btn');
      play_btn.onclick = _MusicPlayer.prototype.play.bind(this);

      var pause_btn = _player_container.querySelector('.music__player__control__button__pause');
      pause_btn.onclick = _MusicPlayer.prototype.pause.bind(this);

      var backward_btn = _player_container.querySelector('.music__player__control__button__backward');
      backward_btn.onclick = _MusicPlayer.prototype.backward.bind(this, data_index - 1);

      var forward_btn = _player_container.querySelector('.music__player__control__button__forward');
      forward_btn.onclick = _MusicPlayer.prototype.forward.bind(this, data_index + 1);
    },
    'play' : function() {
      _audioCtrl.play.call(_audioCtrl);
      _audioCtrl.update.call(_audioCtrl, function() {
        var current_time = _player_container.querySelector('.music__player__control__seekbar__current-time');
        var progress_bar = _player_container.querySelector('.music__player__control__seekbar__progress--bar');
        var progress_circle = _player_container.querySelector('.music__player__control__seekbar__progress--circle');

        current_time.innerText = this.getCurrentTime();
        progress_bar.style.cssText = 'width: ' + this.getProgress(4);
        progress_circle.style.cssText = 'left: ' + this.getProgress(4);
      });
      _player_container.classList.add('is-play');
    },
    'pause' : function() {
      _audioCtrl.pause.call(_audioCtrl);
      _player_container.classList.remove('is-play');
    },
    'backward' : function(index) {
      _audioCtrl.stop.call(_audioCtrl);
      _audioCtrl.change.call(_audioCtrl, _model.get(index).source);
      _MusicPlayer.prototype.show.call(this, index);
      _MusicPlayer.prototype.play.call(this);
    },
    'forward' : function(index) {
      if (index >= _model.size()) {
        index = 0;
      }
      _audioCtrl.stop.call(_audioCtrl);
      _audioCtrl.change.call(_audioCtrl, _model.get(index).source);
      _MusicPlayer.prototype.show.call(this, index);
      _MusicPlayer.prototype.play.call(this);
    },
    'close' : function() {
      if (_player_container.classList.contains('is-play')) {
        _player_container.classList.remove('is-play');
        _audioCtrl.stop.call(_audioCtrl);
      }
      _main_container.classList.remove('is-music-select');
      _player_container.classList.remove('is-music-select');
    }
  };

  return _MusicPlayer;
}(window, window.Handlebars));
