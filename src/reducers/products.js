const defaultProducts = [{
  id: 1,
  name: 'Personalised cufflinks',
  price: 45.00,
  image: 'cufflinks.png'
}, {
  id: 2,
  name: 'Kids\ T-shirt',
  price: 19.95,
  image: 'tshirt.jpg'
}]

export default (state = defaultProducts, action) => {
  switch (action.type) {
    default:
    return state
  }
}
