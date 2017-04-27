// 필요한 동작
// 리스트 보여주는 버튼,
// 리스스 닫는 버튼
// is-show 클래스를 붙여주고 빼는 작업 필요
// 클래스 붙여주고 빼는 객체 생성?
function namespace(ns) {
  return window[ns] = window[ns] || {};
}

(function(global, utils){
  'use strict';

  function queryAll(selector, context) {
    return (context || document).querySelectorAll(selector);
  }

  function query(selector, context) {
    return queryAll(selector, context)[0];
  }

  function hasClass(element, class_name) {
    return element.className.match(new RegExp('(\\s|^)' + class_name + '(\\s|$)'));
  };

  utils.query = query;
  utils.queryAll = queryAll;
  utils.hasClass = hasClass;

}(window, namespace('utils')));

// music list 나타내기 위한 영역
// 버튼 클릭 이벤트 설정 영역
(function(global){
  'use strict';

  var list_container = utils.query('.music-container');
  var main_container = utils.query('main');
  var list_show_btn = utils.query('.music-list-btn', main_container);
  var list_hide_btn = utils.query('.music-container__close-btn', list_container);

  function show() {
    list_container.classList.add('is-show');
    main_container.classList.add('is-show');
  }

  function hide() {
    list_container.classList.remove('is-show');
    main_container.classList.remove('is-show');
  }

  list_show_btn.addEventListener('click', show);
  list_hide_btn.addEventListener('click', hide);
}(window));

// 현재 플레이 중인 음악에 대한 처리 영역
// 오디오 처리를 위한 영역
(function(global){
  'use strict';

  var audio, audio_src, alt_audio_link;
  var total_time, current_time, progress, progress_bar, progress_circle;

  // window에서 사용할 audio 객체 생성
  // 처음 로딩시에는 첫 번째 음악으로 설정
  audio = document.createElement('audio');
  audio_src = './media/source/001.EdSheeran-ShapeOfYou.mp3';
  audio.setAttribute('src', audio_src);

  // audio 지원하지 않을 경우 대체하기 위해 a 요소 설정
  alt_audio_link = document.createElement('a');
  alt_audio_link.setAttribute('href', audio_src);
  alt_audio_link.innerHTML = 'Ed Sheeran - Shape Of You';

  audio.appendChild(alt_audio_link);

  // audio 객체인지 체크하는 함수
  function isAudioObject(data) {
    return !data || data.contructor === HTMLAudioElement;
  }
  // 초 단위를 00:00 단위로 표현하는 함수
  function readableDuration(sec) {
    var min;

    sec = Math.floor(sec);
    min = Math.floor(sec / 60);
    min = min >= 10 ? min : '0' + min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : '0' + sec;

    return min + ':' + sec;
  }
  // 재생 진행 상황을 알려주기 위해 진행률 표현하는 함수
  statePercentage.total = null;
  function statePercentage(preciusion) {
    var percentage;

    if (!statePercentage.total) {
      statePercentage.total = audio.duration;
    }
    percentage = audio.currentTime / statePercentage.total * 100;
    return percentage.toFixed(preciusion || 0);
  }

  // 전달받은 음악 주소 설정하는 함수
  var setAudioSource = function (src) {
    audio.setAttribute('src', src);
    alt_audio_link.setAttribute('href', src);
  }
  // 재생 중인 오디오 객체를 정지하는 함수
  function stop() {
    audio.pause();
    audio.currentTime = 0;
  }

  // 현재 음악 시간, 전체 음악 시간 설정
  current_time = utils.query('.music-play__control-seekbar__current-time');
  total_time = utils.query('.music-play__control-seekbar__total-time');

  progress = utils.query('.music-play__control-seekbar__progress');
  progress_bar = utils.query('.music-play__control-seekbar__progress--bar', progress);
  progress_circle = utils.query('.music-play__control-seekbar__progress--circle', progress);

  // progress bar 클릭시 재생 시간 변경되도록 설정
  progress.onclick = function(event) {
    var total_width = window.parseFloat(global.getComputedStyle(this).width, 10);
    var percentage = (event.offsetX / total_width * 100).toFixed(4);

    audio.currentTime = percentage / 100 * audio.duration;
  };

  // audio를 재생할 수 있을 때 전체 시간 설정
  audio.oncanplay = function() {
    total_time.innerHTML = readableDuration(this.duration);
  };
  // 시간이 변경될 때마다 현재 시간 재설정
  audio.ontimeupdate = function() {
    var percentage = statePercentage(4);
    progress_bar.style.cssText = 'width: ' + percentage + '%';
    progress_circle.style.cssText = 'left: ' + percentage + '%';
    current_time.innerHTML = readableDuration(this.currentTime);
  }

  // 외부에 연결할 함수 설정
  audio.stop = stop;
  audio.setAudioSource = setAudioSource;

  global.audio = audio;

}(window));

(function(global){
  var play_button, play_button_text, next_play_button;
  var music_content_heading, music_content_img, music_content_title, music_content_artist;

  play_button = utils.query('.music-play__control-button-play');
  play_button_text = utils.query('i', play_button);

  play_button.onclick = function() {
    if (utils.hasClass(play_button_text, 'fa-play')) {
      audio.play();
    }
    else {
      audio.pause();
    }
    play_button_text.classList.toggle('fa-play');
    play_button_text.classList.toggle('fa-pause');
  };

  music_content_heading = utils.query('.music-play__content h2');
  music_content_img = utils.query('.music-play__content-img');
  music_content_title = utils.query('.music-play__content-title');
  music_content_artist = utils.query('.music-play__content-artist');

  next_play_button = utils.query('.music-play__control-button-forward');
  next_play_button.onclick = function() {
    audio.stop();
    audio.setAudioSource('./media/source/002.TheChainsmokers&Halsey-Closer.mp3');
    music_content_img.setAttribute('src', './media/cover/002.TheChainsmokers&Halsey-Closer.jpg');
    music_content_title.innerHTML = 'Closer';
    music_content_artist.innerHTML = 'The Chainsmokers &amp; Halsey';
    audio.play();
  };

}(window));
