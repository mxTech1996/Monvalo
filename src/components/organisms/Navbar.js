'use client';
import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const { products } = useCart();
  return (
    <header className='flex justify-between items-center px-6 md:px-10 py-5 bg-white shadow-sm'>
      {/* Logo */}
      <Link href='/'>
        <div className='flex items-center gap-2'>
          <div className='w-6 h-6 bg-[#DD4D1F] rounded-sm' />
          <span className='text-xl font-bold'>Monvalo</span>
        </div>
      </Link>

      {/* Navigation */}
      <nav className='hidden md:flex gap-6 text-sm font-medium text-gray-800'>
        <Link href='/#products'>Products</Link>
        <Link href='/#testimonials'>Testimonials</Link>
        <Link href='/#why-choose-us'>Why Choose us</Link>
        <Link href='/#about-us'>About us</Link>
        <Link href='/#services'>Services</Link>
      </nav>

      {/* Right Actions */}
      <div className='flex items-center gap-4'>
        <div className='relative'>
          <Link href='/my-cart' className='relative'>
            <FaShoppingCart className='text-gray-800 text-lg' />
          </Link>
          {/* Cart Count */}
          <span className='absolute -top-2 -right-2 text-xs bg-black text-white rounded-full w-4 h-4 flex items-center justify-center'>
            {products.length}
          </span>
        </div>
        <Link href='/more-information'>
          <button className='bg-black text-white text-sm px-4 py-2 rounded-md font-semibold'>
            Let&#39;s Talk
          </button>
        </Link>
      </div>
    </header>
  );
}
