
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

export const About = () => {
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

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Products" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-blue-400">Blazior</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Blazior is a leading trading company specializing in high-quality electric and electronic 
              components. With years of experience in the industry, we have built a reputation for 
              reliability, quality, and exceptional customer service.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our expertise spans across electronic components, sophisticated devices, and power inverters. 
              We serve businesses across various industries, providing them with the components they need 
              to power their innovations and operations.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className={`bg-slate-800/50 border-slate-600 text-center transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '300ms' }}>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
              alt="Electronic components and devices"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
