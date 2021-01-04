export const state = () => ({
  isOpen: false,
})

export const mutations = {
  setIsOpenState(state, isOpen) {
    state.isOpen = isOpen
  },
}

export const actions = {
  toggleOpen({ commit }) {
    commit('setIsOpenState', !this.state.isOpen)
  },
}
