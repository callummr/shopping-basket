import React, { Component } from 'react'

export default class Basket extends Component {
  render() {
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

          <tbody></tbody>
        </table>

        <div className="total">
          <span className="label">Total: </span>
          <span className="amount">£0.00</span>
        </div>
      </aside>
    )
  }
}
