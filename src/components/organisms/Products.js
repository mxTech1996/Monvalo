'use client';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

export default function ProductCarousel() {
  const itemsPerPage = 2;
  const { validateProductInCart, handleAddOrRemoveProduct } = useCart();
  const [current, setCurrent] = useState(0);

  const products = dataSite.products;
  const prev = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0
        ? Math.max(products.length - itemsPerPage, 0)
        : prevIndex - itemsPerPage
    );
  };

  const next = () => {
    setCurrent((prevIndex) =>
      prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const visibleProducts = products.slice(current, current + itemsPerPage);

  return (
    <section className='mt-32 bg-[#E74C1D] py-16 px-6 text-white'>
      <div className='max-w-6xl mx-auto relative'>
        <h2 className='text-3xl font-bold text-center mb-10'>
          Our Engineering Products
        </h2>

        {/* Controls */}
        <div className='absolute left-0 top-1/2 -translate-y-1/2 z-10'>
          <button
            onClick={prev}
            className='bg-white text-[#E74C1D] p-2 rounded-full hover:opacity-90 shadow'
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className='absolute right-0 top-1/2 -translate-y-1/2 z-10'>
          <button
            onClick={next}
            className='bg-white text-[#E74C1D] p-2 rounded-full hover:opacity-90 shadow'
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Product Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-center'>
          {visibleProducts.map((product) => {
            const isInCart = validateProductInCart(product.id);
            const handleClick = () => {
              handleAddOrRemoveProduct(product.id);
            };
            return (
              <div
                key={product.id}
                className='bg-white text-black rounded-xl shadow-lg overflow-hidden'
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={300}
                  className='w-full h-60 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2'>{product.name}</h3>
                  <p className='text-sm text-gray-700 mb-4'>
                    {product.description}
                  </p>
                  <p className='text-sm text-gray-600 italic mb-4'>
                    <span className='font-semibold'>Includes:</span>{' '}
                    {product.content}
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className='text-lg font-bold text-[#E74C1D]'>
                      ${product.price}
                    </span>
                    <button
                      onClick={handleClick}
                      style={{
                        backgroundColor: isInCart ? '#000' : '#E74C1D',
                      }}
                      className='bg-[#E74C1D] text-white px-4 py-2 rounded-full hover:opacity-90 transition text-sm'
                    >
                      {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
