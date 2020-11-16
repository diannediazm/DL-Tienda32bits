import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [
      {codigo: "0001", nombre: "Sekiro", stock: 100, precio: 30000, color: "red", destacado: true},
      {codigo: "0002", nombre: "Fifa 21", stock: 100, precio: 25000, color: "blue", destacado: false},
      {codigo: "0003", nombre: "Gears of War 4", stock: 100, precio: 15000, color: "green", destacado: true},
      {codigo: "0004", nombre: "Mario Tennis Aces", stock: 100, precio: 35000, color: "yellow", destacado: false},
      {codigo: "0005", nombre: "Bloodborne", stock: 100, precio: 10000, color: "blue", destacado: false},
      {codigo: "0006", nombre: "Forza Horizon 4", stock: 100, precio: 20000, color: "red", destacado: true}
    ],
    message1: "32 bits",
    message2: "Juegos de PC y consolas"
    },
  getters: {
    enviandoMessage1(state){
      return state.message1;
    },
    enviandoMessage2(state){
      return state.message2;
    },
    enviandoJuegos(state){
      return state.juegos;
    },
    filtroJuego: (state) => (codigo) => {
      return state.juegos.filter( producto => producto.codigo == codigo );
    },
    totalJuegos (state){
      return state.juegos.length;
    }
  },
  mutations: {
  },
  actions: {
  }  
})
