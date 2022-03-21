import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import  app, { State as StateApp } from './modules/app'
import user, { State as StateUser } from './modules/user'

export interface State {
  app: StateApp
  user: StateUser
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    app,
    user
  },
  state: {} as State
})

export function useStore () {
  return baseUseStore(key)
}