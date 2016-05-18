import React, { Component } from 'react'
import { connect } from 'react-redux'

class Products extends Component {
  render() {
    return (
      <section className="product_summary_collection">
        {this.props.products.map(p => {
          return <Product product={p} onAddToBasket={this.onAddToBasket} key={p.id} />
        })}
      </section>
    )
  }

  onAddToBasket(id) {
    console.log(`Added ${id}`)
  }
}

class Product extends Component {
  render() {
    const p = this.props.product

    return (
      <article className="product_summary">
        <img className="product_image" src={`images/${p.image}`} alt={p.name} />
        <h1 className="product_title">{p.name}</h1>
        <span className="product_price">£{p.price.toFixed(2)}</span>
        <a className="add_to_basket"
           href="#"
           onClick={() => this.props.onAddToBasket(p.id)}>
           Add to Basket
        </a>
      </article>
    )
  }
}

const mapStateToProps = state => ({ products: state.products })

export default connect(mapStateToProps)(Products)
