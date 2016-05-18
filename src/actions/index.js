import { ADD_TO_BASKET } from '../reducers/actionTypes'

export const addToBasket = id => {
  return {
    type: ADD_TO_BASKET,
    id
  }
}
