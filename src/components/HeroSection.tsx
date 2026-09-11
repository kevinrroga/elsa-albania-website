import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-8">
          <div className="text-sm text-slate-300 tracking-wider uppercase">
            The International Legal Students' Network
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <div className="text-white">SCHOLARLY.</div>
              <div className="text-amber-400">COLLABORATIVE.</div>
              <div className="text-orange-500">GLOBAL.</div>
            </h1>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-white space-y-6">
          <p className="text-lg leading-relaxed">
            The German chapter of the <span className="text-amber-400 font-semibold">International Legal Students' Network (LSA)</span> comprises over 15,000 members, including law students and emerging legal practitioners. As members of the world's premier legal education network, they engage in collaborative learning across universities, throughout Germany, and across Europe. Academic excellence and professional development serve as the foundation of our mission.
          </p>
        </div>
      </div>
      
      {/* Background Image Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 opacity-20">
        <div className="h-full bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg')] bg-cover bg-center opacity-60"></div>
      </div>
    </section>
  );
};

export default HeroSection;