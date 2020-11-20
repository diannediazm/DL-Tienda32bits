<template>
  <div class="background">
    <div class="messages">
      <h1>{{enviandoMessage1}}</h1>
      <h2>{{enviandoMessage2}}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'Inicio',
  computed: {
    ...mapGetters(['enviandoMessage1', 'enviandoMessage2'])
    /*traerMessage1(){
      return this.$store.getters.enviandoMessage1;
    },
    traerMessage2(){
      return this.$store.getters.enviandoMessage2;
    }*/
  }
}
</script>

<style>
  .background {
    background-image: url('../assets/img/mario.jpg');
    background-size: cover;
    height: 665px;
    width: 100%;
  }
  .messages {
    color: azure;
    padding-left: 30px;
    font-weight: bold;
    background-color: red;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
  }
 
</style>