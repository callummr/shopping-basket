import React, { Component } from 'react'
import Basket from './basket'
import Products from './products'

export default class App extends Component {
  render() {
    return (
      <div>
        <Products />
        <Basket />
      </div>
    )
  }
}
