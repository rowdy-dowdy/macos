// initial state
const state = () => ({
  user: null
})

// getters
const getters = {}

// actions
const actions = {
  async guest ({commit,state}) {
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
  saveUser (state, user) {
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