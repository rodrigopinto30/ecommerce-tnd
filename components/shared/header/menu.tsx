import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'

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

        <Link
          href='/cart'
          className='header-button border hover:border-gray-100'
        >
          <div className='flex items-end'>
            <ShoppingCartIcon className='h-8 w-8' />
            Cart
          </div>
        </Link>
      </nav>
    </div>
  )
}
