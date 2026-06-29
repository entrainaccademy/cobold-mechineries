import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Youtube, CheckCircle2 } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Blog Articles', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const servicesLinks = [
    { name: 'Installation & Setup', path: '/services' },
    { name: 'Preventive Maintenance', path: '/services' },
    { name: 'Expert Repair Services', path: '/services' },
    { name: 'Engineering Consultation', path: '/services' },
    { name: 'Annual Maintenance (AMC)', path: '/services' },
    { name: 'Custom Machinery Solutions', path: '/services' },
  ];

  return (
    <footer className="bg-bg-section border-t border-slate-200/80">
      {/* Top Banner / Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-200/60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-primary">
              Subscribe to our Industrial Insights
            </h3>
            <p className="text-text-light text-sm mt-1">
              Stay updated with the latest engineering advancements, machinery launches, and expert industry advice.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md md:ml-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 text-green-600 font-semibold bg-green-50 px-4 py-3 rounded-lg border border-green-200 w-full animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Subscription successful! Thank you.</span>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate email"
                    required
                    className="flex-grow px-4 py-3 bg-white text-sm text-primary rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center p-3 text-white bg-primary hover:bg-accent rounded-lg transition-colors duration-200 shadow"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                className="h-9 w-auto object-contain"
                src={logo}
                alt="Cobolt Machineries Logo"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/120x40/0F172A/FFFFFF?text=Cobolt';
                }}
              />
             
            </Link>
            <p className="text-text-light text-sm leading-relaxed">
              Delivering precision engineering and high-performance industrial machinery designed to optimize efficiency and build future-proof infrastructure.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-text-light hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-text-light hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-text-light hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-text-light hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest text-primary uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-light hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest text-primary uppercase mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-text-light hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-widest text-primary uppercase mb-6">
              Contact Info
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-4.5 h-4.5 text-[#DE1D3A] mt-0.5 flex-shrink-0" />
              <span className="text-text-light text-sm leading-relaxed">
                Plot 104, GIDC Industrial Estate, Sector 26, Gandhinagar, Gujarat 382028, India
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4.5 h-4.5 text-[#DE1D3A] flex-shrink-0" />
              <a href="tel:7592084226" className="text-text-light hover:text-accent text-sm transition-colors duration-200">
                +91 75920 84226
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4.5 h-4.5 text-[#DE1D3A] flex-shrink-0" />
              <a href="mailto:info@coboltmachineries.com" className="text-text-light hover:text-accent text-sm transition-colors duration-200">
                info@coboltmachineries.com
              </a>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
                Support Hours: 24/7 Hotline
              </span>
            </div>
          </div>
        </div>
      </div>
 
      {/* Bottom Copyright */}
      <div className="bg-slate-100/50 py-6 border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-light text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Cobolt Machineries Private Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-text-light">
            <a href="#privacy" className="hover:text-accent transition-colors duration-200">Privacy Policy</a>
            <a href="#terms" className="hover:text-accent transition-colors duration-200">Terms of Service</a>
            <a href="#sitemap" className="hover:text-accent transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
