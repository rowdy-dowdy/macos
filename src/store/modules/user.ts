import { Commit } from 'vuex'
import { User } from '../../models/user'

export interface State {
  user: User | null
}
// initial state
const state = (): State => ({
  user: null
})

// getters
const getters = {}

// actions
const actions = {
  async guest ({ commit, state }: { commit: Commit, state: State }) {
    try {
      commit('saveUser',{
        guest: true
      })
    }
    catch(err) {
      console.log(err);
    }
  },
}

// mutations
const mutations = {
  saveUser (state: State, user: User) {
    state.user = user
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}