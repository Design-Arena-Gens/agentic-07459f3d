import { Changelog } from '@/components/Changelog';
import { FAQ } from '@/components/FAQ';
import { FeatureGrid } from '@/components/FeatureGrid';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { SolutionShowcase } from '@/components/SolutionShowcase';
import { Testimonials } from '@/components/Testimonials';
import { WorkflowTimeline } from '@/components/WorkflowTimeline';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <SolutionShowcase />
        <WorkflowTimeline />
        <Testimonials />
        <FAQ />
        <Changelog />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
