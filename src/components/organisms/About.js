'use client';
import { useState } from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { dataSite } from '@/data';

const sections = {
  about: {
    title: 'Strategic Engineering and Consulting',
    description:
      'We provide tailored engineering consulting services to optimize processes, increase efficiency, and foster sustainable innovation. Our team works closely with clients to understand their technical challenges and deliver reliable solutions backed by real-world experience.',
    bullets: [
      'Custom Engineering Solutions',
      'Cross-functional Technical Expertise',
      'Client-Centered Collaboration',
    ],
  },
  mission: {
    title: 'Our Mission',
    description:
      'To empower industries by delivering innovative engineering consulting that drives sustainable development, process improvement, and technological advancement. We strive to bridge the gap between complex challenges and practical solutions.',
    bullets: [
      'Engineering Excellence',
      'Sustainable Industrial Growth',
      'Result-Oriented Problem Solving',
    ],
  },
  vision: {
    title: 'Our Vision',
    description:
      'To be a leading force in engineering consultancy, recognized for transforming ideas into reliable, scalable, and future-proof technical systems. We aim to redefine engineering services through precision, trust, and impact.',
    bullets: [
      'Technological Leadership',
      'Global Engineering Impact',
      'Vision-Driven Design & Execution',
    ],
  },
};

export default function DynamicAboutSection() {
  const [currentTab, setCurrentTab] = useState('about');
  const active = sections[currentTab];

  return (
    <section
      id='about-us'
      className='bg-[#E2441D] text-white rounded-xl p-8 md:p-12 max-w-7xl mx-auto mt-10'
    >
      <h2 className='text-3xl md:text-4xl font-semibold text-center mb-6'>
        Let&apos;s shape a brighter future for your business together
      </h2>

      <div className='flex flex-wrap justify-center gap-4 mb-10'>
        <button
          onClick={() => setCurrentTab('about')}
          className={`px-6 py-2 rounded-lg border ${
            currentTab === 'about'
              ? 'bg-white text-[#E2441D]'
              : 'border-white text-white'
          } transition`}
        >
          About Us
        </button>
        <button
          onClick={() => setCurrentTab('mission')}
          className={`px-6 py-2 rounded-lg border ${
            currentTab === 'mission'
              ? 'bg-white text-[#E2441D]'
              : 'border-white text-white'
          } transition`}
        >
          Our Mission
        </button>
        <button
          onClick={() => setCurrentTab('vision')}
          className={`px-6 py-2 rounded-lg border ${
            currentTab === 'vision'
              ? 'bg-white text-[#E2441D]'
              : 'border-white text-white'
          } transition`}
        >
          Our Vision
        </button>
      </div>

      <div className='grid md:grid-cols-2 gap-8 items-center'>
        <div>
          <h3 className='text-2xl font-bold mb-4'>{active.title}</h3>
          <p className='mb-6 text-white/90'>{active.description}</p>
          <ul className='space-y-3 mb-6'>
            {active.bullets.map((point, i) => (
              <li key={i} className='flex items-center gap-2'>
                <FaCheckCircle className='text-white text-sm' />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          {/* <button className='bg-white text-[#E2441D] font-semibold px-6 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition'>
            Read More <FaArrowRight />
          </button> */}
        </div>

        <div className='w-full h-80 md:h-96 relative rounded-xl overflow-hidden'>
          <Image
            src={dataSite.image_hero2}
            alt={dataSite.image_hero2}
            fill
            className='object-cover'
          />
        </div>
      </div>
    </section>
  );
}
