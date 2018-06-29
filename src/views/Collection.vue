<template>
  <div class="collection">
    <button @click="handleWinner()"> BATTLE</button>
    <button @click="handleClear()"> CLEAR </button>
    <h1> Bot #1: {{ battle[0] ? battle[0].name : "Select a bot below" }}</h1>
    <h1> Bot #2: {{battle[1] ? battle[1].name : "Select a bot below"}}  </h1>
    <div  :key="bot.name" v-for="(bot, index) in bots">
{{bot.name}}
{{bot.attack}}  
{{bot.health}}
<button @click="addToBattle(index)"> SELECT </button>
<button @click="removeBot(index)"> RETIRE </button>

    </div>
  </div>
</template>

<script>
import service from "../assets/service.js";

export default {
  data() {
    return {
      bots: service.bots,
      battle: []
    };
  },
  methods: {
    addToBattle(index) {
      if (this.battle.length < 2) {
        this.battle.push(this.bots[index]);
        console.log(this.battle);
      }
    },
    removeBot(index) {
      service.bots.splice(index, 1);
    },
    handleWinner() {
      var winnerIndex = Math.floor(Math.random() * 1);
      alert(`${this.battle[winnerIndex].name} wins`);
    },
    handleClear() {
      this.battle = [];
    }
  }
};
</script>

