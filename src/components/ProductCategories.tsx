
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export const ProductCategories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: "Electronic Components",
      description: "High-quality resistors, capacitors, semiconductors, and integrated circuits",
      features: ["Resistors & Capacitors", "Semiconductors", "Integrated Circuits", "Connectors"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    },
    {
      title: "Electronic Devices",
      description: "Professional-grade electronic devices and measurement instruments",
      features: ["Measurement Tools", "Testing Equipment", "Control Systems", "Display Units"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop"
    },
    {
      title: "Power Inverters",
      description: "Reliable power inverters for industrial and residential applications",
      features: ["Pure Sine Wave", "Modified Sine Wave", "Grid-Tie Inverters", "Battery Chargers"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section ref={sectionRef} id="products" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Product Range</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive selection of premium electronic components and devices for all your trading needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`bg-slate-700/50 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                transitionDuration: '800ms'
              }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                <CardDescription className="text-gray-300">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="text-blue-400 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
