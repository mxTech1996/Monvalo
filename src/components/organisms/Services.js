'use client';
import { useRef } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { dataSite } from '@/data';

export default function BestServicesCarousel() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * 0.8;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id='services' className='bg-[#f4e3d6] py-20 px-6 md:px-12'>
      <div className='flex justify-between items-center mb-8'>
        <div>
          <p className='text-sm text-[#DD4D1F] uppercase mb-2'>Services</p>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Our best services
          </h2>
        </div>
        <div className='flex gap-4'>
          <button
            onClick={() => scroll('left')}
            className='w-10 h-10 border border-[#DD4D1F] rounded-md flex items-center justify-center text-[#DD4D1F]'
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll('right')}
            className='w-10 h-10 border border-[#DD4D1F] rounded-md flex items-center justify-center text-[#DD4D1F]'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className='flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar'
      >
        {dataSite.services.map((service, index) => (
          <div
            key={index}
            className='min-w-[300px] max-w-sm bg-white rounded-xl shadow-sm flex-shrink-0'
          >
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                {service.title}
              </h3>
              <p className='text-sm text-gray-600 mb-4'>
                {service.description}
              </p>
              {/* <div className='text-sm font-medium text-[#DD4D1F] inline-flex items-center gap-1 mb-3'>
                Look More <FaArrowRight className='text-xs' />
              </div> */}
              <div className='bg-[#f4e3d6] text-gray-800 px-3 py-1 text-xs rounded'>
                Consulting
              </div>
            </div>
            <div className='w-full h-[180px] relative rounded-b-xl overflow-hidden'>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className='object-cover'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
