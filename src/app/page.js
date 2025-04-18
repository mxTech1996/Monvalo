'use client';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import Hero from '@/components/organisms/Hero';
import BestServicesCarousel from '@/components/organisms/Services';
import DynamicAboutSection from '@/components/organisms/About';
import WhyChooseUs from '@/components/organisms/WhyChooseUs';
import TestimonialHighlight from '@/components/organisms/Testimonials';
import ProductCarousel from '@/components/organisms/Products';
import EngineeringStepsSection from '@/components/organisms/Steps';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#fff',
      }}
    >
      <Navbar />
      <Hero />
      <BestServicesCarousel />
      <DynamicAboutSection />
      <ProductCarousel />
      <EngineeringStepsSection />
      <WhyChooseUs />
      <TestimonialHighlight />
      <Footer />
    </main>
  );
}
