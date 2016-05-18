import { combineReducers } from 'redux'
import { ADD_TO_BASKET } from './actionTypes'

const basketIds = (state = [1, 2], action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      if (state.indexOf(action.id) > -1) {
        return [...state, id]
      } else {
        return state
      }
    default:
      return state
  }
}

const basketQuantities = (state = {1: 10, 2: 30}, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const quantity = state[action.id] || 0
      return Object.assign({...state}, {
        [action.id]: quantity + 1
      })
    default:
      return state
  }
}

export default combineReducers({
  ids: basketIds,
  quantities: basketQuantities
})
