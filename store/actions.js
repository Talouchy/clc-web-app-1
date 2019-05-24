import axios from 'axios'

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('/api/auth/login', {
        username: username,
        password: password
      })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout({ commit }) {
    await axios.post('/api/auth/logout')
    commit('SET_USER', null)
  },

  //fetch state.units form server
  async fetchUnits({ commit }) {
    setTimeout(() => {
      try {
        commit('SET_UNIT_IS_LOADING', true)
        axios.get('/api/units').then(response => {
          commit('SET_UNITS', response.data)
          commit('SET_UNIT_IS_LOADING', false)
        })
      } catch (error) {
        if (error.response && error.response.status === 401) {
          throw new Error('Bad credentials')
        }
        throw error
      }
    }, 1000)
  }
}

export default actions
