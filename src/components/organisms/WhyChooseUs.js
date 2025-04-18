'use client';
import Link from 'next/link';
import {
  FaCogs,
  FaChartLine,
  FaUsersCog,
  FaHandsHelping,
  FaArrowRight,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaCogs className='text-3xl text-[#E2441D]' />,
    title: 'Engineering Precision',
    description:
      'We bring unmatched technical accuracy and process optimization to every project.',
  },
  {
    icon: <FaChartLine className='text-3xl text-[#E2441D]' />,
    title: 'Data-Driven Results',
    description:
      'Our strategies are built on robust analytics, performance metrics, and measurable KPIs.',
  },
  {
    icon: <FaUsersCog className='text-3xl text-[#E2441D]' />,
    title: 'Client-Centric Focus',
    description:
      'Your success is our priority. We align every solution with your unique business goals.',
  },
  {
    icon: <FaHandsHelping className='text-3xl text-[#E2441D]' />,
    title: 'Collaborative Execution',
    description:
      'Our engineers and consultants work side-by-side with your teams from idea to implementation.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id='why-choose-us'
      className='bg-[#E2441D] text-white rounded-xl px-6 py-16 md:px-20 max-w-7xl mx-auto mt-12'
    >
      <div className='grid md:grid-cols-2 gap-10 items-start'>
        {/* Left Side */}
        <div>
          <h4 className='uppercase text-sm font-semibold mb-2'>
            Why Choose Us
          </h4>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 leading-snug'>
            Why should you choose our engineering consultancy?
          </h2>
          <p className='text-white/90 mb-8'>
            When selecting an engineering consulting partner, choose one that
            understands your industry’s complexity, prioritizes quality, and
            drives innovation with a tailored approach to every technical
            challenge.
          </p>
          <Link href={'/more-information'}>
            <button className='bg-white text-[#E2441D] font-medium px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition'>
              Contact Us <FaArrowRight />
            </button>
          </Link>
        </div>

        {/* Right Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {features.map((f, i) => (
            <div
              key={i}
              className='bg-white text-[#111] p-6 rounded-xl shadow hover:shadow-lg transition'
            >
              <div className='mb-4'>{f.icon}</div>
              <h3 className='font-bold text-lg mb-2'>{f.title}</h3>
              <p className='text-sm text-gray-600 mb-4'>{f.description}</p>
              {/* <span className='text-sm text-[#E2441D] font-medium flex items-center gap-1 hover:underline'>
                Look More <FaArrowRight className='text-xs' />
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
