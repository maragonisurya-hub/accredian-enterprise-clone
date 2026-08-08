import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Clients from '@/components/Clients';
import AccredianEdge from '@/components/AccredianEdge';
import Domains from '@/components/Domains';
import CourseSegmentation from '@/components/CourseSegmentation';
import CAT from '@/components/CAT';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <Domains />
      <CourseSegmentation />
      <CAT />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
