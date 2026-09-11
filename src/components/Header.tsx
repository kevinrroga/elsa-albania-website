import React from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-xl">
            LSA
          </div>
          <div className="text-sm">
            <div className="font-semibold">The International Legal Students' Network</div>
            <div className="text-slate-300">GERMANY</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
            Homepage
          </a>
          
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-slate-300 transition-colors">
              <span>About LSA</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-slate-300 transition-colors">
              <span>Our Initiatives</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          
          {/* Language Flags */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
            <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;