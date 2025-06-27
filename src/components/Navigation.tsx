
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              BLAZIOR
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</a>
              <a href="#products" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Products</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 rounded-lg mt-2">
              <a href="#home" className="block text-gray-300 hover:text-blue-400 px-3 py-2">Home</a>
              <a href="#products" className="block text-gray-300 hover:text-blue-400 px-3 py-2">Products</a>
              <a href="#about" className="block text-gray-300 hover:text-blue-400 px-3 py-2">About</a>
              <a href="#contact" className="block text-gray-300 hover:text-blue-400 px-3 py-2">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
