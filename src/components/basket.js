import React, { Component } from 'react'
import { connect } from 'react-redux'

class Basket extends Component {
  render() {
    console.log(this.props.basket)
    return (
      <aside className="basket">
        <h1>Basket</h1>

        <table className="products">
          <thead>
            <tr>
              <th>Product name</th>
              <th>qty</th>
            </tr>
          </thead>

          <tbody>
            {this.props.basket.ids.map(id => {
              return renderBasketRow(id, this.props)
            })}
          </tbody>
        </table>

        <div className="total">
          <span className="label">Total: </span>
          <span className="amount">£{calculateTotal(this.props)}</span>
        </div>
      </aside>
    )
  }
}

const renderBasketRow = (id, props) => {
  const item = {
    ...props.products.find(p => p.id === id),
    quantity: props.basket.quantities[id]
  }

  return (
    <tr key={id}>
      <td>
        {item.name}
      </td>
      <td>
        {item.quantity}
      </td>
    </tr>
  )
}

const calculateTotal = props => {
  const { basket, products } = props
  const { ids, quantities } = basket
  let total = 0

  ids.forEach(id => {
    const price = products.find(p => p.id === id).price
    total += price * quantities[id]
  })

  return total.toFixed(2)
}

const mapStateToProps = state => ({ basket: state.basket, products: state.products })

export default connect(mapStateToProps)(Basket)
