<template>
  <div class="main-container">
    <div class="fix-width">
      <md-whiteframe md-elevation="15" md-tag="header">
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
                <div class="md-subhead">by CodingTheSmartWay.com</div>
              </md-layout>
            </md-layout>
          </md-card-header>
        </md-card>
      </md-whiteframe>
      <div class="service-content">
        <md-layout>
          <md-layout md-column class="week-container">
            <section>
              <h2 class="md-subheading week-title">4월 1주</h2>
              <div class="week-content">
                <ul class="week-list">
                  <li class="week-item">
                    <md-card>
                      <md-card-header>
                        <md-card-header-text>
                          <div class="md-subheading">
                            11:00
                          </div>
                          <div class="md-subheading">
                            Meeting
                          </div>
                        </md-card-header-text>
                      </md-card-header>
                    </md-card>
                  </li>
                  <li class="week-item">
                    <md-card>
                      <md-card-header>
                        <md-card-header-text>
                          <div class="md-subheading">
                            11:00
                          </div>
                          <div class="md-subheading">
                            New Project with Bold Studio @Lorem Cafe
                          </div>
                        </md-card-header-text>
                      </md-card-header>
                    </md-card>
                  </li>
                  <li class="week-item">
                    <md-card>
                      <md-card-header>
                        <md-card-header-text>
                          <div class="md-subheading">
                            11:00
                          </div>
                          <div class="md-subheading">
                            Dinner with wife
                          </div>
                        </md-card-header-text>
                      </md-card-header>
                    </md-card>
                  </li>
                </ul>
              </div>
            </section>
          </md-layout>
          <md-layout md-column>
            <template v-for="content in dailyData">
              <md-layout md-tag="article">
                <md-card md-with-hover class="popup-content">
                  <div class="popup-title">
                    I'm Happy.
                  </div>
                  <md-card-header>
                    <div class="md-title">Title goes here</div>
                    <div class="md-subhead">Subtitle here</div>
                  </md-card-header>

                  <md-card-content>
                    {{content.value.inputValue}}
                    {{content.value.emoticon}}
                  </md-card-content>

                  <md-card-actions>
                    <md-button @click.native="updateContent(content.id)">수정</md-button>
                    <md-button @click.native="deleteContent(content.id)">삭제</md-button>
                  </md-card-actions>
                </md-card>
              </md-layout>
            </template>
          </md-layout>
        </md-layout>

        <md-speed-dial md-open="hover" md-direction="bottom" class="md-fab-top-right" md-theme="light-blue">
          <md-button class="md-fab" md-fab-trigger>
            <md-icon md-icon-morph>add</md-icon>
            <md-icon>add</md-icon>
          </md-button>

          <md-button id="fab" @click.native="openDialog()" class="md-fab md-primary md-mini md-clean">
            <md-icon>note_add</md-icon>
          </md-button>

          <md-button class="md-fab md-primary md-mini md-clean">
            <md-icon>alarm_add</md-icon>
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

export default {
  data() {
    return {
      dailyData: []
    }
  },
  created() {
    this.$eventBus.$on('submitComplete', this.getDayContent);
    let date = new Date('2017/1/29');
    let selectedDayOfMonth = date.getDate();
    let first = new Date(date.getFullYear() + '/' + (date.getMonth() + 1) + '/01');
    let monthFirstDateDay = first.getDay();
    let weekCount = Math.ceil((selectedDayOfMonth + monthFirstDateDay) / 7);
    // console.log(date.getFullYear() + '/' + (date.getMonth() + 1) + '/01');
    // console.log('selectedDayOfMonth : ', selectedDayOfMonth);
    // console.log('first : ', first);
    // console.log('monthFirstDateDay : ', monthFirstDateDay);
    // console.log('weekCount : ', weekCount);
  },
  components: {
    appInput: Input
  },
  mounted() {
    this.getDayContent();
  },
  methods: {
    openDialog() {
      this.$eventBus.$emit('dialogOpen');
    },
    getDayContent() {
      let _this = this;
      axios.get('https://dayback-163404.firebaseio.com/dayback.json')
           .then(function(response) {
             if (response.status === 200 && response.statusText === 'OK') {
               _this.dailyData = [];
               for (let key in response.data) {
                 let data = {};
                 data.id = key;
                 data.value = response.data[key];
                 _this.dailyData.push(data);
               }
             }
           })
           .catch(function(error) {
             console.error(error.message);
           });
    },
    updateContent(id) {
      this.$eventBus.$emit('dialogOpen', id);
    },
    deleteContent(id) {
      let _this = this;
      axios.delete('https://dayback-163404.firebaseio.com/dayback/' + id + '.json')
           .then(function(response) {
             window.alert('삭제되었습니다.');
             _this.getDayContent();
           })
           .catch(function(error) {
             console.error(error.message);
           });
    }
  },
  computed: {
    date() {
      // 리턴 형식 nth
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
.sad {
  background-position: -52px -12px;
}
.angry {
  background-position: -97px -12px;
}
.good {
  background-position: -142px -12px;
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
.popup-title {
  position: absolute;
  top: 0;
  left: 30%;
  width: 30%;
  padding: 5px 0;
  color: #fff;
  background: #000;
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
  background: #eee;
  padding: 50px;
}
.week-container {
  margin-right: 20px;
  width: 100%;
}
.week-list {
  position: relative;
  list-style: none;
  padding: 10px 0 0;
  margin: 0 0 0 10%;
  border-left: 4px solid #aaa;
}
.week-item {
  position: relative;
  margin-left: 20px;
}
.week-item::after {
  display: block;
  content: '';
  clear: both;
}
.week-item::before {
  position: absolute;
  content: '';
  top: 50%;
  left: -22px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: yellow;
  transform: translate(-50%, -50%);
}
.week-title {
  width: 20%;
  background: skyblue;
  text-align: center;
  color: #fff;
  padding: 5px 0;
  margin-bottom: 0;
}
.week-item .md-card {
  float: left;
}
</style>
