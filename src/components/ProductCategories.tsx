
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Settings } from "lucide-react";

export const ProductCategories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
      description: "High-quality resistors, capacitors, semiconductors, and integrated circuits for all your project needs",
      features: ["Resistors & Capacitors", "Semiconductors", "Integrated Circuits", "Connectors & Cables"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      stats: "10,000+ Components"
    },
    {
      title: "Electronic Devices",
      description: "Professional-grade electronic devices and precision measurement instruments for industry standards",
      features: ["Measurement Tools", "Testing Equipment", "Control Systems", "Display Units"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      icon: Settings,
      color: "from-purple-500 to-blue-500",
      stats: "500+ Devices"
    },
    {
      title: "Power Inverters",
      description: "Reliable and efficient power inverters for industrial and residential applications worldwide",
      features: ["Pure Sine Wave", "Modified Sine Wave", "Grid-Tie Inverters", "Battery Chargers"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      icon: Zap,
      color: "from-green-500 to-blue-500",
      stats: "50+ Models"
    }
  ];

  return (
    <section ref={sectionRef} id="products" className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Product Range</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive selection of premium electronic components and devices for all your trading and project needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-8 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`bg-slate-700/50 border-slate-600 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 group cursor-pointer relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                transitionDuration: '800ms'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-sm rounded-full p-3">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                
                {/* Stats badge */}
                <div className="absolute bottom-4 left-4 bg-blue-600/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">{category.stats}</span>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-white text-2xl flex items-center justify-between">
                  {category.title}
                  <ArrowRight className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                    hoveredCard === index ? 'translate-x-1' : ''
                  }`} />
                </CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {category.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="text-blue-400 flex items-center group/item">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"></span>
                      <span className="group-hover/item:text-blue-300 transition-colors duration-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-6 border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
