import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team - My Website',
  description: 'This is the team page.'
}

const page = () => {
  return (
    <div>This is the team page</div>
  )
}

export default page