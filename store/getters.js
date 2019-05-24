export const getters = {
  getUnitsByText: state => code => {
    const regex = new RegExp(code, 'gi')
    return state.units.data.filter(
      unit => unit.code.match(regex) || unit.name.match(regex)
    )
  },

  getUnitsStatus: state => state.units.isLoading
}

export default getters
