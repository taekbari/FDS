<template>
  <div class="main-container">
    <div class="fix-width">
      <md-whiteframe md-tag="header">
        <md-card>
          <md-card-header>
            <md-layout>
              <md-layout md-flex="50">
                <md-layout md-column>
                  <div class="md-title">
                    {{date}}<sup>th</sup> {{day}}
                  </div>
                  <div class="md-subheading">
                    {{month}} {{year}}
                  </div>
                </md-layout>
              </md-layout>
              <md-layout md-flex="50" md-align="end">
                <div class="md-subhead"></div>
              </md-layout>
            </md-layout>
          </md-card-header>
        </md-card>
      </md-whiteframe>
      <div class="service-content">
        <md-layout>
          <week-list :daily-data="dailyData"></week-list>
          <today-card :today-data="dailyData[dailyData.length - 1]"></today-card>
        </md-layout>

        <md-speed-dial md-open="hover" md-direction="bottom" class="md-fab-top-right" md-theme="light-blue">
          <md-button class="md-fab" md-fab-trigger>
            <md-icon md-icon-morph>add</md-icon>
            <md-icon>add</md-icon>
          </md-button>

          <md-button id="fab" @click.native="openDialog()" class="md-fab md-primary md-mini md-clean">
            <md-icon>note_add</md-icon>
          </md-button>
        </md-speed-dial>
      </div>
    </div>
    <app-input></app-input>
  </div>
</template>

<script>
import axios from 'axios';
import Input from './components/Input.vue';
import WeekList from './components/Week.vue';
import TodayCard from './components/Today.vue';

export default {
  data() {
    return {
      // 로그인 완료되었을 때 서버로부터 받아온 token 값 사용을 위한 데이터 설정
      sharedState: this.$store.state,
      // 로그인한 사용자가 작성한 글의 목록을 저장할 데이터 설정
      dailyData: []
    }
  },
  created() {
    // 수정 또는 삭제 했을 때, 화면 갱신을 위한 이벤트 설정
    this.$eventBus.$on('submitComplete', this.getDayContent);
  },
  components: {
    appInput: Input,
    weekList: WeekList,
    todayCard: TodayCard
  },
  mounted() {
    // 초기 화면 설정
    this.getDayContent();
  },
  methods: {
    openDialog() {
      // 다이얼로그 창을 열기 위한 이벤트 발생
      this.$eventBus.$emit('dialogOpen');
    },
    getDayContent() {
      let _this = this;
      // 사용자가 입력한 글 목록을 가져오기 위한 통신
      // request headers에 토큰 값 설정해서 요청
      axios.get('https://dayback.hcatpr.com/post/', {
            headers: {
              'Authorization': 'token ' + _this.sharedState.token
            }
          })
           .then(function(response) {
             if (response.status === 200) {
               // 서서버로부터 받아온 글 목록 데이터에 설정
               _this.dailyData = response.data.results;
               // 저장된 데이터가 없을 경우의 처리
               if (_this.dailyData.length === 0) {
                 window.alert('입력한 글이 없습니다.');
               }
             }
             else {
               window.alert('글 목록을 가져오는데 실패했습니다.');
             }
           })
           .catch(function(error) {
             // 글 목록 가져오는 것이 실패했을 경우의 처리
             window.alert('서버 통신에 실패했습니다.\n원인 : ' + error.message);
             console.error(error.message);
           });
    }
  },
  computed: {
    date() {
      return new Date().getDate();
    },
    day() {
      let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return week[new Date().getDay()];
    },
    month() {
      let month_str = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return month_str[new Date().getMonth()];
    },
    year() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="css">
.md-card .md-card-header.card-header {
  padding-top: 35px;
  display: flex;
}
.card-header .md-title {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.md-list-item-container a {
  transform: scale(1);
  border: 1px solid #eee;
  border-radius: 50%;
  transition: all 1s ease;
}
.md-list-item-container a.emotion-click {
  transform: scale(1.4);
}
.input-emoticon {
  background-image: url('./assets/img-emoticon.png');
  background-size: 200px;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.smaile {
  background-position: -7px -12px;
}
.smaile-color {
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.sad {
  background-position: -52px -12px;
}
.sad-color {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
.angry {
  background-position: -97px -12px;
}
.angry-color {
  background-image: linear-gradient(120deg, #feada6 0%, #f5efef 100%);
}
.good {
  background-position: -142px -12px;
}
.good-color {
  background-image: linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%);
}

.layout-flex {
  flex-direction: row;
}
.md-card.popup-content {
  position: relative;
  overflow: visible;
  flex-basis: 100%;
  margin: 20px 0;
}
.popup-color {
  position: absolute;
  top: 0;
  left: 20%;
  width: 20%;
  height: 30px;
  padding: 5px 0;
  color: #fff;
  text-align: center;
  transform: translate(-50%, -50%);
}
.fix-width {
  width: 960px;
  margin: 0 auto;
}
.hidden {
  position: absolute;
  left: -99999em;
}
.service-content {
  position: relative;
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
  padding: 100px 50px 10px;
}
</style>
