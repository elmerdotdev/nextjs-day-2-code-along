import type { Metadata } from 'next'
import ProductsList from './ProductsList'

export const metadata: Metadata = {
  title: 'Products - My Website',
  description: 'This is the products page'
}

const page = () => {
  return (
    <div>
      <h1>All Products</h1>
      <ProductsList />
    </div>
  )
}

export default page