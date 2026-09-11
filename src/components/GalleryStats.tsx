import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { EMAIL_USER, EMAIL_DOMAIN, EMAIL } from '../lib/organization';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-4xl font-bold italic mb-2">lsa</div>
              <div className="text-sm text-gray-300">
                The International Legal Students' Network
              </div>
              <div className="text-sm text-gray-300 font-semibold">
                GERMANY
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wide">Contact</h3>
            <div className="space-y-4">
              <div className="font-semibold">LSA-Germany e.V.</div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <div>Friedrichstraße 15</div>
                  <div>10117 Berlin</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>+49 30 12345678</div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <button
                  onClick={() => { window.location.href = `mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`; }}
                  className="hover:text-orange-400 transition-colors"
                >
                  {EMAIL}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wide">Quick Links</h3>
            <div className="space-y-3">
              <div><a href="#" className="text-gray-300 hover:text-white transition-colors">Board and Team</a></div>
              <div><a href="#" className="text-gray-300 hover:text-white transition-colors">Regulations of LSA-Germany e.V.</a></div>
              <div><a href="#" className="text-gray-300 hover:text-white transition-colors">Location Overview</a></div>
              <div><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Form</a></div>
              <div><a href="#" className="text-gray-300 hover:text-white transition-colors">Projects</a></div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wide">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              A fair world in which there is respect for human dignity and cultural diversity.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center text-gray-400 text-sm">
            © LSA-Germany e.V. – Legal Notice – Privacy Policy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;