
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronRight, Star, Users, Award, Globe } from "lucide-react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Globe, number: "25+", label: "Countries Served" },
    { icon: Star, number: "4.9", label: "Client Rating" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background layers with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
      
      <div 
        className="absolute inset-0 opacity-40"
        style={{ 
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}
      ></div>

      {/* Floating elements with different parallax speeds */}
      <div 
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full blur-xl"
        style={{ transform: `translateY(${scrollY * 0.6}px)` }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className="animate-fade-in"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              BLAZIOR
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Your Premier Partner for Electric & Electronic Components
          </p>
          <p className="text-lg md:text-xl text-blue-400 mb-6 font-medium">
            Specializing in Electronic Components, Devices & Power Inverters
          </p>
          
          {/* Additional hero content */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg mb-4">
              Trusted by businesses worldwide for high-quality electronic solutions. 
              From small startups to Fortune 500 companies, we deliver excellence in every component.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-400">
              <span className="flex items-center gap-1">
                <ChevronRight size={16} />
                ISO 9001 Certified
              </span>
              <span className="flex items-center gap-1">
                <ChevronRight size={16} />
                24/7 Technical Support
              </span>
              <span className="flex items-center gap-1">
                <ChevronRight size={16} />
                Global Shipping
              </span>
              <span className="flex items-center gap-1">
                <ChevronRight size={16} />
                Quality Guaranteed
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Explore Products
            </Button>
            <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 text-lg">
              Get Quote
            </Button>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
