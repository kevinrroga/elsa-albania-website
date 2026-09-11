import React from 'react';

const PhilosophySection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Quote Mark */}
            <div className="text-orange-500 text-8xl font-bold leading-none">
              "
            </div>
            
            {/* Title */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                THE MISSION<br />
                STATEMENT OF LSA
              </h2>
              
              <div className="text-blue-600 font-semibold text-sm tracking-wider">
                SINCE MARCH 15TH, 1995
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quote Text */}
            <blockquote className="text-xl font-medium text-gray-900 leading-relaxed">
              A fair world in which there is respect for human dignity and cultural diversity.
            </blockquote>
            
            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-lg">
              Our mission is to advance legal education, to foster mutual understanding and to promote social responsibility of law students and young lawyers, by means of providing opportunities for law students and young lawyers to learn about other cultures and legal systems in a spirit of critical dialogue and scientific cooperation, assisting law students and young lawyers to be internationally minded and professionally skilled, and encouraging law students and young lawyers to act for the good of society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;