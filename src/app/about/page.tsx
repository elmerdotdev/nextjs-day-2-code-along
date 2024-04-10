import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - My Website',
  description: 'This is the about page.'
}

const page = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo maxime voluptatibus. Accusamus, aspernatur quas, velit quos natus quae laborum eum ipsum, numquam pariatur officiis quam voluptates dolor cumque blanditiis veniam? Consequatur magni accusantium nihil eligendi earum, sequi consequuntur quibusdam asperiores maxime minima eveniet est ipsum quo omnis dicta voluptatum?</p>
    </div>
  )
}

export default page