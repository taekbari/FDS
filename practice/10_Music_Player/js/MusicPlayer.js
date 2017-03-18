var MusicPlayer = (function(Handlebars) {
  'use strict';

  var _music_player_template_html = document.querySelector('#music-player-template').innerHTML;
  var _music_player_template = Handlebars.compile(_music_player_template_html);

  function _MusicPlayer() {

  }

  _MusicPlayer.prototype = {
    'show' : function(data) {
      'use strict';
      var music_player = _music_player_template(data);
      var main_container = document.querySelector('.player');
      var music_player_container = main_container.querySelector('.music__player__container');
      music_player_container.insertAdjacentHTML('beforeend', music_player);

      // player 나타났을 때의 transition을 위한 class 적용.
      main_container.classList.add('is-music-select');
      music_player_container.classList.add('is-music-select');

      var close_btn = music_player_container.querySelector('.music__player__close-btn');
      close_btn.onclick = _MusicPlayer.prototype.close.bind(this);
    },
    'close' : function() {
      var main_container = document.querySelector('.player');
      var music_player = document.querySelector('.music__player');
      var play_btn = document.querySelector('.music__player__play-btn');
      var close_btn = document.querySelector('.music__player__close-btn');
      var music_player_container = music_player.parentNode;

      music_player_container.removeChild(music_player);
      music_player_container.removeChild(play_btn);
      music_player_container.removeChild(close_btn);

      main_container.classList.remove('is-music-select');
      music_player_container.classList.remove('is-music-select');
    }
  };

  return _MusicPlayer;
}(window.Handlebars));
