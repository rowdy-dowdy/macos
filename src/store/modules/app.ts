import { Commit } from 'vuex'
import { AppInfo } from '../../models/app'

export interface State {
  index_app: number,
  list_app: Array<AppInfo>
}

// initial state
const state = (): State => ({
  index_app: 1,
  list_app: [
    {
      id: 1,
      show: true,
      display: false,
      title: 'Finder',
      name: 'coming_soon_app',
      image: '/assets/icons/Finder Big Sur Regular.png'
    },
    {
      id: 2,
      show: true,
      display: false,
      title: 'Launchpad',
      name: 'coming_soon_app',
      image: '/assets/icons/Launchpad big sur icon regular.png'
    },
    {
      id: 3,
      show: true,
      display: false,
      title: 'Safari',
      name: 'coming_soon_app',
      image: '/assets/icons/Big Sur Safari icon Regular.png'
    },
    {
      id: 4,
      show: true,
      display: false,
      title: 'iMessages',
      name: 'coming_soon_app',
      image: '/assets/icons/iMessages Regular.png'
    },
    {
      id: 6,
      show: true,
      display: false,
      title: 'Maps',
      name: 'coming_soon_app',
      image: '/assets/icons/Apple Maps icon Regular.png'
    },
    {
      id: 7,
      show: true,
      display: false,
      title: 'Photos',
      name: 'coming_soon_app',
      image: '/assets/icons/Apple Photos icon Regular.png'
    },
    {
      id: 8,
      show: true,
      display: false,
      title: 'Calendar',
      name: 'coming_soon_app',
      image: '/assets/icons/Apple Calendar Regular.png'
    },
    {
      id: 9,
      show: true,
      display: false,
      title: 'Spotify',
      name: 'coming_soon_app',
      image: '/assets/icons/Big Sur Spotify Altern Regular.png'
    },
    {
      id: 10,
      show: true,
      display: false, 
      title: 'Discord',
      name: 'coming_soon_app',
      image: '/assets/icons/Discord app icon Rgular.png'
    },
    {
      id: 11,
      show: true,
      display: true, 
      title: 'About app',
      name: 'about_app',
      image: '/assets/icons/Apple Contacts icon Night Mode Regular.png'
    },
    {
      id: 12,
      show: true,
      display: false, 
      title: 'AppStore',
      name: 'coming_soon_app',
      image: '/assets/icons/Apple AppStore icon Regular.png'
    },
    {
      type: 'divine',
    },
    {
      id: 14,
      show: true,
      display: false, 
      title: 'Terminal',
      name: 'coming_soon_app',
      image: '/assets/icons/Big Sur Terminal icon Regular.png'
    },
    {
      id: 15,
      show: true,
      display: false, 
      title: 'Trash',
      name: 'coming_soon_app',
      image: '/assets/icons/Big Sur trash empty.png'
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
  async toogleShow (state: State, id: Number) {
    let index = state.list_app.findIndex(v => v.id == id)
    state.list_app[index].show = !state.list_app[index].show
  },

  async toogleDisplay (state: State, [ id, display ]: [id:number, display: boolean]) {
    let index = state.list_app.findIndex(v => v.id == id)
    state.list_app[index].display = display
  },

  async countIndexApp (state: State) {
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