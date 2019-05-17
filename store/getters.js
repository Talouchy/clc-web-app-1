export const getters = {
  unitsBytext: state => code => {
    const regex = new RegExp(code, 'gi')
    return state.units.filter(
      unit => unit.code.match(regex) || unit.name.match(regex)
    )
  }
}

export default getters
