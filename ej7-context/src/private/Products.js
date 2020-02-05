import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const useProducts = () => {
  const dispatch = useDispatch()
  const token = useSelector(s => s.user && s.user.token)
  const products = useSelector(s => s.products)
  useEffect(() => {
    const setProducts = products => dispatch({ type: 'products', products})
    // Aquí haríamos fetch para cargar los datos de productos
    console.log('Fetch products, token:', token)
    /*
    fetch(process.env.API_HOST + '/products', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(res => res.json())
      .then(data => setProducts(data))
    */
    setProducts(['Foo', 'Bar', 'Baz'])
  }, [token, dispatch])
  return products
}

const Products = () => {
  const products = useProducts()
  if (!products) return 'Cargando ...'
  return (
    <ul>
      {products.map(product =>
        <li key={product}>
          {product}
        </li>
      )}
    </ul>
  )
}

export default Products
