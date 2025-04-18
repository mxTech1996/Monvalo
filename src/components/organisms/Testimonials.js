'use client';
import { useState } from 'react';
import Image from 'next/image';

const stats = [
  { label: 'Years of Experience', value: '2+' },
  { label: 'Certified specialists in various fields', value: '+10' },
  { label: 'Happy clients', value: '55+' },
];

const testimonials = [
  {
    id: 1,
    name: 'Carlos Méndez',
    role: 'Project Manager',
    avatar: '/images/avatar1.png',
    message:
      'The engineering consultancy team streamlined our plant’s entire production line. Their precision and process improvements helped us reduce costs by 18% in the first quarter.',
  },
  {
    id: 2,
    name: 'Lucía Torres',
    role: 'Operations Director',
    avatar: '/images/avatar2.png',
    message:
      'Their structured approach to industrial engineering projects is unmatched. We now have a scalable framework for expansion thanks to their expertise.',
  },
  {
    id: 3,
    name: 'Andrés Salgado',
    role: 'Manufacturing Engineer',
    avatar: '/images/avatar3.png',
    message:
      'Thanks to their tailored engineering solutions, we improved our equipment uptime and created a more agile operations workflow. Exceptional service!',
  },
];

export default function TestimonialHighlight() {
  const [selected, setSelected] = useState(0);
  const testimonial = testimonials[selected];

  return (
    <section
      id='testimonials'
      className='bg-white py-16 px-6 max-w-7xl mx-auto'
    >
      {/* Stats */}
      <div className='bg-[#F8E7DC] rounded-xl p-6 md:p-10 flex flex-col md:flex-row justify-around text-center md:text-left items-center gap-6 mb-16'>
        {stats.map((stat, i) => (
          <div key={i}>
            <p className='text-[#E2441D] font-bold text-3xl'>{stat.value}</p>
            <p className='text-sm text-gray-700'>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className='text-center max-w-4xl mx-auto'>
        <p className='text-sm text-[#E2441D] font-medium uppercase mb-4 tracking-wide'>
          Testimonials
        </p>
        <blockquote className='text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-12'>
          “{testimonial.message}”
        </blockquote>

        {/* Avatars */}
        <div className='flex justify-center gap-6'>
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setSelected(i)}
              className={`rounded-full border-4 ${
                selected === i ? 'border-[#E2441D]' : 'border-transparent'
              } transition`}
            >
              <Image
                src={t.avatar}
                alt={t.name}
                width={48}
                height={48}
                className='rounded-full'
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
