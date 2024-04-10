import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex justify-between p-3 bg-red-500">
      <div>My Logo</div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/todos">To Dos</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header