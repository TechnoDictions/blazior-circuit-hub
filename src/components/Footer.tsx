
import { useEffect, useState } from "react";

export const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-slate-900 text-white py-16 overflow-hidden">
      {/* Parallax background layers with reverse scroll effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-slate-800 to-slate-900"
        style={{ transform: `translateY(${scrollY * -0.3}px)` }}
      ></div>
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          transform: `translateY(${scrollY * -0.5}px) scale(1.1)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Cpath d='M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z'/%3E%3C/g%3E%3C/svg%3E")` 
        }}
      ></div>

      {/* Floating geometric shapes with reverse parallax */}
      <div 
        className="absolute top-10 right-10 w-24 h-24 bg-blue-400/20 rotate-45"
        style={{ transform: `translateY(${scrollY * -0.4}px) rotate(${scrollY * 0.1}deg)` }}
      ></div>
      <div 
        className="absolute bottom-16 left-16 w-16 h-16 bg-cyan-400/20 rounded-full"
        style={{ transform: `translateY(${scrollY * -0.6}px)` }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/3 w-8 h-8 bg-blue-300/30 transform -translate-y-1/2"
        style={{ transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * 0.1}px)` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="grid md:grid-cols-4 gap-8"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                BLAZIOR
              </span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for premium electric and electronic components. 
              We deliver quality, reliability, and innovation in every product.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span className="text-sm font-bold">B</span>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span className="text-sm font-bold">L</span>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span className="text-sm font-bold">I</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Electronic Components</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Power Inverters</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Circuit Boards</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Semiconductors</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <p>📧 info@blazior.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Electronics Ave<br />Tech City, TC 12345</p>
            </div>
          </div>
        </div>

        <div 
          className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          <p>&copy; 2024 Blazior. All rights reserved. | Powering innovation through quality components.</p>
        </div>
      </div>
    </footer>
  );
};
