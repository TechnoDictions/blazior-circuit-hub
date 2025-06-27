
import { useEffect, useState } from "react";

export const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-800">
      {/* Parallax background layers */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900/30 to-slate-900"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      
      <div 
        className="absolute inset-0 opacity-30"
        style={{ 
          transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366F1' fill-opacity='0.1'%3E%3Cpolygon points='40,10 50,30 70,30 55,45 60,65 40,55 20,65 25,45 10,30 30,30'/%3E%3C/g%3E%3C/svg%3E")` 
        }}
      ></div>

      {/* Floating geometric elements */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        style={{ transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-500/10 rotate-45"
        style={{ transform: `translateY(${scrollY * -0.2}px) rotate(${45 + scrollY * 0.1}deg)` }}
      ></div>
      <div 
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-400/10 rounded-full"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">BLAZIOR</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leading the industry in premium electronic components and innovative solutions for over a decade.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-8"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
            <p className="text-gray-300">Every component undergoes rigorous testing to ensure maximum reliability and performance.</p>
          </div>
          
          <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Our technical team provides comprehensive support for all your electronic component needs.</p>
          </div>
          
          <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
            <p className="text-gray-300">Constantly evolving with the latest technology trends and industry standards.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
