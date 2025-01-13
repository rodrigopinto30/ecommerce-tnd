import Link from 'next/link'
import CartButton from './cart-button'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link
          href='/signin'
          className='flex items-center header-button border hover:border-gray-100'
        >
          Hello, Sign in
        </Link>

        <CartButton />
      </nav>
    </div>
  )
}
