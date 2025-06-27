
import { Hero } from "@/components/Hero";
import { ProductCategories } from "@/components/ProductCategories";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <ProductCategories />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
