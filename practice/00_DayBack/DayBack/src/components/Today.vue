<template lang="html">
    <article class="md-column">
      <md-card md-with-hover class="popup-content">
        <div :class="['popup-color',
        {'smaile-color': 1 & selectedEmoticon,
        'sad-color': 2 & selectedEmoticon,
        'angry-color': 4 & selectedEmoticon,
        'good-color': 8 & selectedEmoticon
        }]"></div>
        <md-card-header class="card-header">
          <div :class="['input-emoticon',
          {'smaile': 1 & selectedEmoticon,
          'sad': 2 & selectedEmoticon,
          'angry': 4 & selectedEmoticon,
          'good': 8 & selectedEmoticon
          }]"></div>
          <div class="md-title" v-if="todayData">{{todayData.value.inputValue}}</div>
        </md-card-header>

        <md-card-actions>
          <md-button @click.native="updateContent(todayData.id)">수정</md-button>
          <md-button @click.native="deleteContent(todayData.id)">삭제</md-button>
        </md-card-actions>
      </md-card>
    </article>
</template>

<script>
import axios from 'axios';

export default {
  props: ['todayData'],
  data() {
    return {
      selectedEmoticon: 1
    }
  },
  updated() {
    this.selectedEmoticon = this.changeEmoticon();
  },
  methods: {
    changeEmoticon() {
      switch (this.todayData.value.emoticon) {
        case 1: return 1;
        case 2: return 2;
        case 3: return 4;
        case 4: return 8;
      }
    },
    updateContent(id) {
      this.$eventBus.$emit('dialogOpen', id);
    },
    deleteContent(id) {
      let _this = this;
      axios.delete('https://dayback-163404.firebaseio.com/dayback/' + id + '.json')
           .then(function(response) {
             window.alert('삭제되었습니다.');
             _this.$eventBus.$emit('submitComplete');
           })
           .catch(function(error) {
             console.error(error.message);
           });
    }
  }
}
</script>

<style lang="css">
article.md-column {
  flex: 1;
}
</style>
