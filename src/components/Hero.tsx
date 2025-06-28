
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Zap, Shield, Award } from "lucide-react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const features = [
    { icon: Zap, text: "High Performance" },
    { icon: Shield, text: "Quality Assured" },
    { icon: Award, text: "Industry Leading" }
  ];

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background with mouse tracking */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}
      ></div>
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
          style={{
            top: `${20 + (i * 10)}%`,
            left: `${10 + (i * 12)}%`,
            animationDelay: `${i * 0.5}s`,
            transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`,
          }}
        ></div>
      ))}

      {/* Enhanced floating elements */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"
        style={{ 
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20 + scrollY * 0.2}px)`,
          animationDuration: '3s'
        }}
      ></div>
      <div 
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-l from-cyan-500/20 to-blue-400/20 rounded-full blur-xl animate-pulse"
        style={{ 
          transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15 + scrollY * 0.4}px)`,
          animationDuration: '4s'
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-1/4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"
        style={{ 
          transform: `translate(${mousePosition.x * 10}px, ${scrollY * 0.6}px)`,
          animationDuration: '2.5s'
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className="opacity-0 animate-fade-in"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px)`,
            animationDelay: '0.2s',
            animationFillMode: 'forwards'
          }}
        >
          {/* Enhanced title with glowing effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 relative">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent blur-sm">
              BLAZIOR
            </span>
            <span className="relative bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              BLAZIOR
            </span>
          </h1>
          
          {/* Tagline with typing effect */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed font-light">
            Your Premier Partner for 
            <span className="text-blue-400 font-semibold"> Electric & Electronic Components</span>
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/20"
                style={{
                  animationDelay: `${0.8 + index * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <feature.icon className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <p className="text-xl md:text-2xl text-blue-400 mb-10 font-medium">
            Specializing in Electronic Components, Devices & Power Inverters
          </p>
          
          {/* Enhanced buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Products
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-10 py-4 text-lg backdrop-blur-sm bg-slate-800/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-blue-400 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ArrowDown className="w-4 h-4 text-blue-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </section>
  );
};
