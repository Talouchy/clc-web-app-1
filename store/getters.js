export const getters = {
  unitsByCode: state => code => {
    const regex = new RegExp(code, 'gi')
    return state.units.filter(unit => unit.code.match(regex))
  }
}

export default getters
