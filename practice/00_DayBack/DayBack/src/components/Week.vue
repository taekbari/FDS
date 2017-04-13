<template lang="html">
  <md-layout md-column class="week-container">
    <section>
      <h2 class="md-subheading week-title">WEEK</h2>
      <div class="week-content">
        <ul class="week-list">
          <template v-for="(dayContent, index) in dailyData">
            <li :class="['week-item',
            {'smaile-point': 1 & changeEmoticon(dayContent.mood_chk),
            'sad-point': 2 & changeEmoticon(dayContent.mood_chk),
            'angry-point': 4 & changeEmoticon(dayContent.mood_chk),
            'good-point': 8 & changeEmoticon(dayContent.mood_chk)
            }]" v-if="index < dailyData.length - 1 && index < 7">
              <div ></div>
              <md-card>
                <md-card-header>
                  <md-card-header-text>
                    <div class="md-subheading">
                      11:00
                    </div>
                    <div class="md-subheading">
                      {{dayContent.mood_comment}}
                    </div>
                  </md-card-header-text>
                </md-card-header>
              </md-card>
            </li>
          </template>
        </ul>
      </div>
    </section>
  </md-layout>
</template>

<script>
import axios from 'axios';

export default {
  props: ['dailyData'],
  methods: {
    changeEmoticon(value) {
      switch (value) {
        case 1: return 1;
        case 2: return 2;
        case 3: return 4;
        case 4: return 8;
      }
    }
  }
}
</script>

<style lang="css">
.week-container {
  width: 100%;
  margin-right: 20px;
}
.week-container section {
  margin-left: 50px;
}
.week-list {
  position: relative;
  list-style: none;
  padding: 10px 0 0;
  margin: 0 0 0 10%;
  border-left: 4px solid #fff;
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
  transform: translate(-50%, -50%);
}
.week-item.smaile-point::before {
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.week-item.sad-point::before {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}
.week-item.angry-point::before {
  background-image: linear-gradient(120deg, #feada6 0%, #f5efef 100%);
}
.week-item.good-point::before {
  background-image: linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%);
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
