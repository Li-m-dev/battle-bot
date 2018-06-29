<template>
  <div class="create">
    <!-- <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
<!-- {{test}} -->

<input type="text" className="form_input" v-model="newBot.name" placeholder="Bot Name" value="e.target.value">
<br/>
<input @click="numChange" type="number" className="number form_input"  v-model="newBot.attack" value="e.target.value">
<br/>
<input @click="numChange" type="number" className="number form_input" v-model="newBot.health" value="e.target.value">
<br/>
<button @click="addBot()">Submit</button>
<button @click="clearInput()">Clear</button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import service from "@/assets/service";

export default {
  data() {
    return {
      newBot: { name: "", attack: null, health: null },
      bots: service.bots
    };
  },
  mounted() {},
  methods: {
    addBot() {
      console.log(this.bots);
      service.bots.push(this.newBot);
      this.newBot = { name: "", attack: null, health: null };
    },
    numChange() {
      document.getElementsByClassName("number").stepUp();
    },

    // clear input is not working
    clearInput() {
      Object.assign(this.newBot, { name: "", attack: null, health: null });
    }
  }
};
</script>
