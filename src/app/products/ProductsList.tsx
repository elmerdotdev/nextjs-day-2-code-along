'use client' // this will convert the server component (default) to a client component

import { useEffect, useState } from "react"

type Product = {
  id: number,
  title: string,
  description: string
}

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products')
      const data = await response.json()
      console.log(data.products)
      setProducts(data.products) // this is an array
    }

    fetchProducts()
  }, [])

  return (
    <div>
      {products?.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </div>
  )
}

export default ProductsList