function stripProduct(product) {
    return {
        id: product.id,
        title: product.title,
        description: product.description,
        pictureUrl: 'http://localhost:1337' + product.picture.url,
        price: '$' + product.price
    }
}


export async function getProducts() {
  const response = await fetch('http://localhost:1337/products')
  const products = await response.json()
  return products.map(stripProduct)
}
