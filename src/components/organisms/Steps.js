'use client';
import React from 'react';

const engineeringSteps = [
  {
    title: 'Initial Technical Assessment',
    description:
      'We conduct a comprehensive evaluation of your engineering requirements and operational challenges to tailor our approach accordingly.',
    icon: '🧰',
  },
  {
    title: 'Feasibility Study & Analysis',
    description:
      'We perform in-depth feasibility studies, site evaluations, and data analysis to ensure project viability and alignment with your goals.',
    icon: '📊',
  },
  {
    title: 'Strategic Planning',
    description:
      'We craft strategic technical roadmaps, taking into account timelines, resources, compliance, and innovation.',
    icon: '📈',
  },
  {
    title: 'Engineering Implementation',
    description:
      'Our experts oversee and manage hands-on execution of engineering designs, construction phases, or system deployments.',
    icon: '🏗️',
  },
  {
    title: 'Performance Monitoring',
    description:
      'We establish KPIs and reporting tools to track engineering progress, identify risks, and optimize performance.',
    icon: '📡',
  },
  {
    title: 'Continuous Optimization',
    description:
      'We iterate solutions through user feedback and data analytics to ensure peak system and process efficiency.',
    icon: '🔄',
  },
];

export default function EngineeringStepsSection() {
  return (
    <section className='py-20 px-40 bg-[#F5E9E3]'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
          Engineering Consulting Process
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {engineeringSteps.map((step, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'
            >
              <div className='text-4xl mb-4'>{step.icon}</div>
              <h3 className='text-xl font-bold mb-2'>{step.title}</h3>
              <p className='text-gray-600'>{step.description}</p>
              {/* <button className='mt-4 text-sm text-[#E74C1D] font-semibold inline-flex items-center gap-1 hover:underline'>
                Learn More →
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
