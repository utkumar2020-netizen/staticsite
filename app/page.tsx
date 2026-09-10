import { Hero } from '@/components/home/Hero';
import { ServicesSection } from '@/components/home/ServicesSection';
import { PortfolioSection } from '@/components/home/PortfolioSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { PricingSection } from '@/components/home/PricingSection';
import { FAQSection } from '@/components/home/FAQSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}