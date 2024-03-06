<template>
  <div class="page">
    <div class="left-panel">
      <v-btn class="left-btn">
        <div>
          <span>Blitz Shield Arena</span>
          <span>Battle for the Blitz Shield</span>
          <span>121 players . <p>in 3 hours</p></span>
        </div>
      </v-btn>
    </div>
    <div class="game-panel">
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
    <div class="right-panel">
      <v-btn class="right-btn"><span>CREATE A GAME</span></v-btn>
      <v-btn class="right-btn"><span>CREATE A GAME</span></v-btn>
      <v-btn class="right-btn"><span>CREATE A GAME</span></v-btn>
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
      [{time: '30+0', type: 'Classical'},{time: '30+20', type: 'Classical'},{}]]
    }
  },
  mounted() {
    this.$emit('update-navbar')
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
  height: 570px;
  background-color: #454545;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.game-panel-row{
  display: flex;
  margin-left: 10px;
}
.game-panel-items{
  width: 32%;
  height: 130px;
  max-height: 130px;
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
  padding: 5px;
  letter-spacing: normal;
  /* margin: 25px 0px; */
}
.left-btn:hover{
  color: #2d91cf !important;
}
.left-btn div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.left-btn span{
  font-size: 0.5em;
  font-weight: 400;
}
.left-btn p{
  display: inline;
  font-size: 1em;
  font-weight: 400;
}
</style>