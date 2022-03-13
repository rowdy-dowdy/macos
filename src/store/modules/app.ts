// initial state
const state = () => ({
  index_app: 1,
  list_app: [
    {
      id: 1,
      show: true,
      display: false,
      title: 'Finder',
      name: 'coming_soon_app',
      image: 'Finder Big Sur Regular.png'
    },
    {
      id: 2,
      show: true,
      display: false,
      title: 'Launchpad',
      name: 'coming_soon_app',
      image: 'Launchpad big sur icon regular.png'
    },
    {
      id: 3,
      show: true,
      display: false,
      title: 'Safari',
      name: 'coming_soon_app',
      image: 'Big Sur Safari icon Regular.png'
    },
    {
      id: 4,
      show: true,
      display: false,
      title: 'iMessages',
      name: 'coming_soon_app',
      image: 'iMessages Regular.png'
    },
    {
      id: 6,
      show: true,
      display: false,
      title: 'Maps',
      name: 'coming_soon_app',
      image: 'Apple Maps icon Regular.png'
    },
    {
      id: 7,
      show: true,
      display: false,
      title: 'Photos',
      name: 'coming_soon_app',
      image: 'Apple Photos icon Regular.png'
    },
    {
      id: 8,
      show: true,
      display: false,
      title: 'Calendar',
      name: 'coming_soon_app',
      image: 'Apple Calendar Regular.png'
    },
    {
      id: 9,
      show: true,
      display: false,
      title: 'Spotify',
      name: 'coming_soon_app',
      image: 'Big Sur Spotify Altern Regular.png'
    },
    {
      id: 10,
      show: true,
      display: false, 
      title: 'Discord',
      name: 'coming_soon_app',
      image: 'Discord app icon Rgular.png'
    },
    {
      id: 11,
      show: true,
      display: true, 
      title: 'About app',
      name: 'about_app',
      image: 'Apple Contacts icon Night Mode Regular.png'
    },
    {
      id: 12,
      show: true,
      display: false, 
      title: 'AppStore',
      name: 'coming_soon_app',
      image: 'Apple AppStore icon Regular.png'
    },
    {
      name: 'divine',
    },
    {
      id: 14,
      show: true,
      display: false, 
      title: 'Terminal',
      name: 'coming_soon_app',
      image: 'Big Sur Terminal icon Regular.png'
    },
    {
      id: 15,
      show: true,
      display: false, 
      title: 'Trash',
      name: 'coming_soon_app',
      image: 'Big Sur trash empty.png'
    },
  ]
})

// getters
const getters = {}

// actions
const actions = {

}

// mutations
const mutations = {
  async toogleShow (state, id) {
    let index = state.list_app.findIndex(v => v.id == id)
    state.list_app[index].show = !state.list_app[index].show
  },

  async toogleDisplay (state, [id, display]) {
    let index = state.list_app.findIndex(v => v.id == id)
    state.list_app[index].display = display
  },

  async countIndexApp (state) {
    state.index_app = state.index_app + 1
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}