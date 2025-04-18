'use client';
import { dataSite } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 min-h-[80vh] bg-white'>
      {/* Left Side */}
      <div className='flex flex-col justify-center px-6 md:px-20 py-16'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
          {dataSite.subtitle}
        </h1>
        <p className='text-gray-700 text-base mb-8 max-w-xl'>
          {dataSite.description}
        </p>
        <div className='flex gap-4'>
          <Link href='/#products'>
            <button className='bg-[#DD4D1F] text-white px-6 py-3 rounded-md font-medium'>
              Get Started
            </button>
          </Link>
          <Link href='/#services'>
            <button className='border border-gray-300 px-6 py-3 rounded-md font-medium'>
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className='relative bg-[#DD4D1F] flex items-end justify-center'>
        <div className='w-full max-w-md md:max-w-none md:w-[80%] h-[85%] mb-8 rounded-tl-[100px] overflow-hidden'>
          <Image
            src={dataSite.image_hero} // Asegúrate de tener esta imagen en public/images/
            alt='Team Meeting'
            width={800}
            height={600}
            className='w-full h-full object-cover rounded-tl-[100px]'
          />
        </div>
      </div>
    </section>
  );
}
