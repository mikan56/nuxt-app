import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators'
import store from '~/store/store'

export interface Countable {
  value: number
}

@Module({ dynamic: true, store, name: 'counter', namespaced: true })
class CounterStore extends VuexModule implements Countable {
  value: number = 10 // initialize

  @Mutation
  SET_VALUE(value: number) {
    this.value = value
  }

  @Action({})
  increment(value: number) {
    this.SET_VALUE(this.value + value)
  }

  @Action({})
  decrement(value: number) {
    this.SET_VALUE(this.value - value)
  }
}

export const CounterStoreModule = getModule(CounterStore)
