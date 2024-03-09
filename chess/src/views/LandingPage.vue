<template>
  <div class="page">
    <div class="left-panel">
      <v-btn class="left-btn" v-for="item in leftBtnList">
        <v-icon size="50">{{ item.icon }}</v-icon>
        <div>
          <span>{{ item.text1 }}</span>
          <span>{{ item.text2 }}</span>
          <span>{{ item.text3 }}<p>{{ item.text4 }}</p></span>
        </div>
      </v-btn>
    </div>
    <div class="game-panel">
      <div class="game-panel-top">
        <p class="game-panel-headers" @click="gamePanelHeadersClick('1')" ref="header1">Quick pairing</p>
        <p class="game-panel-headers" @click="gamePanelHeadersClick('2')" ref="header2">Lobby</p>
        <p class="game-panel-headers" @click="gamePanelHeadersClick('3')" ref="header3">Correspondence</p>
      </div>
      <div class="game-panel-main">
        <div v-for="i in [0,1,2,3]" class="game-panel-row">
          <div v-for="j in [0,1,2]" class="game-panel-items">
            <p class="game-panel-items-time">{{ gamePanelItems[i][j].time }}</p>
            <p class="game-panel-items-type">{{ gamePanelItems[i][j].type }}</p>
            <div class="game-panel-items-custom">
              <p v-if="i*j == 6" class="game-panel-items-type">Custom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-panel">
      <v-btn class="right-btn"><span>CREATE A GAME</span></v-btn>
      <v-btn class="right-btn"><span>PLAY WITH A FRIEND</span></v-btn>
      <v-btn class="right-btn"><span>PLAY WITH THE COMPUTER</span></v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return{
      gamePanelItems: [
        [{time: '1+0', type: 'Bullet'},{time: '2+1', type: 'Bullet'},{time: '3+0', type: 'Blitz'}],
        [{time: '3+2', type: 'Blitz'},{time: '5+0', type: 'Blitz'},{time: '5+3', type: 'Blitz'}],
        [{time: '10+0', type: 'Rapid'},{time: '10+5', type: 'Rapid'},{time: '15+10', type: 'Rapid'}],
        [{time: '30+0', type: 'Classical'},{time: '30+20', type: 'Classical'},{}]],
      leftBtnList: [
        {icon: 'mdi-shield', text1: 'Blitz Shield Arena', text2: 'Battle for the Blitz Shield', text3: '121 players • ', text4: 'in 3 hours'},
        {icon: 'mdi-chess-bishop', text1: 'Chess960 Titled Arena', text2: 'Titled only, $1,000 prize pool', text3: '43 players • ', text4: 'in 8 hours'},
        {icon: 'mdi-fire', text1: 'SuperBlitz Swiss', text2: '', text3: '16 players • ', text4: '43 minutes ago'}]
    }
  },
  mounted() {
    this.$emit('update-navbar')
    this.gamePanelHeadersClick(1)
  },
  methods: {
    gamePanelHeadersClick(refNumber) {
      let ref = 'header' + refNumber
      if (!this.$refs[ref].classList.contains('game-panel-headers-clicked'))
        this.$refs[ref].classList.add('game-panel-headers-clicked')
      
      for (let i=1; i<4; i++) {
        ref = 'header' + i
        if (refNumber != i) {
          this.$refs[ref].classList.remove('game-panel-headers-clicked')
        }
      }
    }
  }
}
</script>

<style scoped>
*{
  --text-color: #dbdbdb;
  --item-background-color: #4d4d4d;
}
.page{
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.game-panel{
  width: 47%;
  height: calc(100vh - var(--navbar-height) - 60px);
  /* background-color: #454545; */
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.game-panel-row{
  display: flex;
  margin-left: 10px;
}
.game-panel-items{
  width: 32%;
  height: calc((100vh - var(--navbar-height) - 60px)/4.4);
  background-color: var(--item-background-color);
  padding: 20px;
  margin-top: 10px;
  margin-right: 10px;
  border: 1px solid #938989;
  border-radius: 5px;
  text-align: center;
}
.game-panel-items:hover{
  cursor: pointer;
  background-color: #916036;
}
.game-panel-items-time{
  font-size: 1.65em;
  line-height: 1.5em;
  color: var(--text-color);
  font-weight: 300;
}
.game-panel-items-type{
  font-size: 1.15em;
  color: var(--text-color);
  font-weight: 300;
  margin: auto 0px;
}
.game-panel-items-custom{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.left-panel{
  width: 26%;
  padding: 0px 20px 0px 10px;
  margin-top: 30px;
}
.right-panel{
  width: 26%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.right-btn{
  background-color: var(--item-background-color) !important;
  width: 100%;
  height: 50px !important;
  color: #adadad !important;
  padding: 5px;
  letter-spacing: normal;
  margin: 25px 0px;
}
.right-btn:hover{
  color: var(--text-color) !important;
}
.right-btn span{
  font-size: 0.8em;
  font-weight: 400;
}
.left-btn{
  background-color: var(--item-background-color) !important;
  width: 100%;
  height: 55px !important;
  color: #adadad !important;
  padding: 5px !important;
  letter-spacing: normal;
  justify-content: left;
  border-radius: inherit;
  /* margin: 5px 0px; */
}
.left-btn:hover{
  color: var(--blue) !important;
}
.left-btn div{
  display: flex;
  flex-direction: column;
  align-items: start;
}
.left-btn span{
  font-size: 0.5em;
  font-weight: 400;
}
.left-btn span:first-child{
  font-size: 0.65em;
  font-weight: 400;
}
.left-btn p{
  display: inline;
  font-size: 1em;
  font-weight: 400;
  opacity: 0.75;
}
.game-panel-headers{
  width: 34%;
  height: 30px;
  color: #8f8f8f;
  padding: 2px;
  text-align: center;
  font-size: 0.7em;
}
.game-panel-headers:hover{
  cursor: pointer;
  border-bottom: 2px solid var(--red);
  color: #bdbdbd;
}
.game-panel-headers-clicked{
  border-bottom: 2px solid var(--red);
  color: var(--red) !important;
}
.game-panel-top{
  display: flex;
}
.game-panel-main{
  background-color: #454545;
  height: 100%;
}
</style>