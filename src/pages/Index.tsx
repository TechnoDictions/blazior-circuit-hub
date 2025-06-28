
import { Hero } from "@/components/Hero";
import { ProductCategories } from "@/components/ProductCategories";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <ProductCategories />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
