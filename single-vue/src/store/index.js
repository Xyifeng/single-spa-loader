import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    globalEventDistributor:null,
    store:[]
  },
  mutations: {
    setGlobalEventDistributor(state,globalEventDistributor){
      state.globalEventDistributor=globalEventDistributor
    },
    setStore(state,store){
      state.store=store
    }
  }
})

export default store