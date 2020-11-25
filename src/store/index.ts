import Vue from 'vue'
import Vuex from 'vuex'
import Pets from '@/store/modules/Animal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Pets
  }
})