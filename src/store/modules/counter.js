import { INCREMENT, DECREMENT } from '../mutation-types'

// initial state

const state = {
  count: 0
}

// mutations

const mutations = {
  [INCREMENT]: state => state.count++,
  [DECREMENT]: state => state.count--
}

// actions
const actions = {
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit(INCREMENT)
    }, 1000)
  }
}

export default {
  state,
  actions,
  mutations
}
