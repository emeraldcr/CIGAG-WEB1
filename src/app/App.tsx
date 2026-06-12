import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { CTAFinal } from "./components/sections/CTAFinal";
import { GeneticCatalog } from "./components/sections/GeneticCatalog";
import { Hero } from "./components/sections/Hero";
import { HowWeWork } from "./components/sections/HowWeWork";
import { Institutional } from "./components/sections/Institutional";
import { Services } from "./components/sections/Services";
import { Stats } from "./components/sections/Stats";
import { Testimonials } from "./components/sections/Testimonials";
import { ScrollProgress } from "./components/shared/ScrollProgress";
import { WhatsAppButton } from "./components/shared/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-sand font-sans text-brand-forest antialiased">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <HowWeWork />
        <Institutional />
        <GeneticCatalog />
        <Testimonials />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
