import { combineReducers } from 'redux'
import productsReducer from './products'
import basketReducer from './basket'

const reducers = combineReducers({
  products: productsReducer,
  basket: basketReducer
})

export default reducers
