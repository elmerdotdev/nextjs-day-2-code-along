import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Home - My Website',
  description: 'This is the home page.'
}

const page = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis repellendus voluptatem non maiores tenetur sequi vel, neque rem minima consequatur laudantium reiciendis ipsam omnis unde beatae perferendis magnam veniam quod quos? Dignissimos perferendis deleniti praesentium maxime, dicta repudiandae voluptate soluta nostrum qui! Earum quos beatae facere dolorem vitae esse necessitatibus.</p>
      </Suspense>
    </div>
  )
}

export default page