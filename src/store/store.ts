import Vue from 'vue'
import Vuex from 'vuex'
import { Countable } from '~/store/modules/counter'
Vue.use(Vuex)

export interface State {
  counter: Countable
}

export default new Vuex.Store<State>({})
