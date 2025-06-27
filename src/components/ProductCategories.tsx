
import { useEffect, useState } from "react";

export const ProductCategories = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    {
      title: "Electronic Components",
      description: "High-quality resistors, capacitors, and semiconductors",
      icon: "🔌",
    },
    {
      title: "Power Inverters",
      description: "Efficient DC to AC power conversion solutions",
      icon: "⚡",
    },
    {
      title: "Circuit Boards",
      description: "Custom PCB design and manufacturing services",
      icon: "🖥️",
    },
    {
      title: "Sensors & Controls",
      description: "Advanced sensing and automation components",
      icon: "📡",
    },
  ];

  return (
    <section id="products" className="py-20 relative overflow-hidden bg-slate-900">
      {/* Parallax background with hexagonal pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          transform: `translateY(${scrollY * -0.2}px) scale(1.1)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Cpolygon points='60,10 90,30 90,70 60,90 30,70 30,30'/%3E%3C/g%3E%3C/svg%3E")` 
        }}
      ></div>

      {/* Floating tech elements */}
      <div 
        className="absolute top-10 right-1/4 w-20 h-20 bg-cyan-400/10 rotate-12"
        style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${12 + scrollY * 0.2}deg)` }}
      ></div>
      <div 
        className="absolute bottom-32 left-1/3 w-28 h-28 bg-blue-500/10 rounded-full"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      ></div>
      <div 
        className="absolute top-1/3 left-10 w-12 h-12 bg-blue-300/20 transform"
        style={{ transform: `translateY(${scrollY * 0.4}px) translateX(${scrollY * 0.05}px)` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of electronic components and solutions for all your technical needs
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
              style={{ 
                transform: `translateY(${scrollY * (0.02 + index * 0.01)}px)`,
                transitionDelay: `${index * 50}ms` 
              }}
            >
              <div className="text-4xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {category.title}
              </h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
