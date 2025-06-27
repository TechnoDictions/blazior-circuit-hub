
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Contact = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
      {/* Parallax background with circuit pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{ 
          transform: `translateY(${scrollY * 0.25}px)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%234F46E5' stroke-width='1' opacity='0.2'%3E%3Cpath d='M10,10 L30,10 L30,30 L50,30 L50,50 L70,50 L70,70 L90,70'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%234F46E5'/%3E%3Ccircle cx='30' cy='30' r='2' fill='%234F46E5'/%3E%3Ccircle cx='50' cy='50' r='2' fill='%234F46E5'/%3E%3Ccircle cx='70' cy='70' r='2' fill='%234F46E5'/%3E%3Ccircle cx='90' cy='70' r='2' fill='%234F46E5'/%3E%3C/g%3E%3C/svg%3E")` 
        }}
      ></div>

      {/* Animated floating elements */}
      <div 
        className="absolute top-16 left-16 w-24 h-24 bg-blue-400/10 rounded-full blur-lg"
        style={{ transform: `translateY(${scrollY * -0.1}px) translateX(${scrollY * 0.05}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-20 w-32 h-8 bg-cyan-400/10 rotate-45"
        style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${45 + scrollY * 0.1}deg)` }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/10 transform rotate-45"
        style={{ transform: `translateY(${scrollY * -0.2}px) rotate(${45 + scrollY * -0.1}deg)` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to power your next project? Contact our expert team for personalized solutions.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 gap-12 items-center"
          style={{ transform: `translateY(${scrollY * 0.04}px)` }}
        >
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-xl">📧</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Email Us</h3>
                <p className="text-gray-300">info@blazior.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-xl">📞</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Call Us</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-xl">📍</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Visit Us</h3>
                <p className="text-gray-300">123 Electronics Ave<br />Tech City, TC 12345</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
