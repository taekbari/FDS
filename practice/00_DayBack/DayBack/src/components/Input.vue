<template lang="html">
  <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
    <md-dialog-title>Create new note</md-dialog-title>

    <md-dialog-content>
      <form>
        <md-input-container>
          <label>Note</label>
          <md-input v-model="dayContent.inputValue"></md-input>
        </md-input-container>
      </form>
      <md-list class="layout-flex">
        <md-list-item>
          <a href="" :class="{'emotion-click' : 1 & emotionClicked}" @click.prevent="changeEmoticon(1)"><md-icon class="input-emoticon smaile"></md-icon></a>
        </md-list-item>
        <md-list-item>
          <a href="" :class="{'emotion-click' : 2 & emotionClicked}" @click.prevent="changeEmoticon(2)"><md-icon class="input-emoticon sad"></md-icon></a>
        </md-list-item>
        <md-list-item>
          <a href="" :class="{'emotion-click' : 4 & emotionClicked}" @click.prevent="changeEmoticon(3)"><md-icon class="input-emoticon angry"></md-icon></a>
        </md-list-item>
        <md-list-item>
          <a href="" :class="{'emotion-click' : 8 & emotionClicked}" @click.prevent="changeEmoticon(4)"><md-icon class="input-emoticon good"></md-icon></a>
        </md-list-item>
      </md-list>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-primary" @click.native="closeDialog('dialog2')">Cancel</md-button>
      <md-button class="md-primary" @click.native="submitContent('dialog2')">Create</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: '',
      emotionClicked: 0,
      dayContent: {
        emoticon: 1,
        inputValue: ''
      }
    }
  },
  created() {
    this.$eventBus.$on('dialogOpen', this.openDialog);
  },
  methods: {
    openDialog(id) {
      this.fillInputContent(id);
      this.$refs['dialog2'].open();
    },
    closeDialog(ref) {
      this.dayContent.inputValue = null;
      this.dayContent.emoticon = 1;
      this.emotionClicked = 0;
      this.id = '';
      this.$refs[ref].close();
    },
    onOpen() {
      console.log('Opened');
    },
    onClose(type) {
      console.log('Closed', type);
    },
    fillInputContent(id) {
      if (!id) {
        return;
      }
      let _this = this;
      this.id = id;
      axios.get('https://dayback-163404.firebaseio.com/dayback/' + id + '.json')
           .then(function(response) {
             let data = response.data;
             _this.dayContent.inputValue = data.inputValue;
             _this.dayContent.emoticon = data.emoticon;
             _this.changeEmoticon(data.emoticon);
           })
           .catch(function(error) {
             console.error(error.message);
           });
    },
    changeEmoticon(value) {
      switch (value) {
        case 1: this.emotionClicked = 1; break;
        case 2: this.emotionClicked = 2; break;
        case 3: this.emotionClicked = 4; break;
        case 4: this.emotionClicked = 8; break;
      }
      this.dayContent.emoticon = value;
    },
    submitContent(ref) {
      let _this = this;

      if (this.id) {
        axios.put('https://dayback-163404.firebaseio.com/dayback/' + this.id + '.json', this.dayContent)
        .then(function(response) {
          if (response.status === 200 && response.statusText === 'OK') {
            // 성공했을 경우
            window.alert('오늘의 기분이 수정되었습니다.');
            _this.closeDialog(ref);
            _this.$eventBus.$emit('submitComplete');
          }
        })
        .catch(function(error) {
          console.error(error);
        })
      }
      else {
        axios.post('https://dayback-163404.firebaseio.com/dayback.json', this.dayContent)
        .then(function(response) {
          if (response.status === 200 && response.statusText === 'OK') {
            // 성공했을 경우
            window.alert('오늘의 기분이 저장되었습니다.');
            _this.closeDialog(ref);
            _this.$eventBus.$emit('submitComplete');
          }
        })
        .catch(function(error) {
          console.error(error);
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
