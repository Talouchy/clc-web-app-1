export const mutations = {
  SET_UNITS: (state, units) => {
    state.units.data = units
  },
  SET_UNIT_IS_LOADING: (state, status) => {
    state.units.isLoading = status
  },

  SET_USER: (state, user) => {
    state.authUser = user
  }
}

export default mutations
