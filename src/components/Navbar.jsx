import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, MapPin, Youtube, Facebook, Instagram, Mail } from 'lucide-react';
import logonew from '../assets/cobolt logo.png';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <>
      {/* Top Info Bar (Desktop Only) */}
      <div className="hidden md:block w-full bg-slate-50/80 backdrop-blur-sm border-b border-slate-100 py-2.5 text-xs relative z-50">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center  gap-6">
            <Link to="/contact?loc=veepoor" className="flex  items-center gap-2 hover:text-accent transition-colors text-slate-600 font-sans">
              <MapPin className="w-3.5 h-3.2 text-[#DE1D3A]" />
              <span className="text-xs font-semibold text-slate-700">Veembur, Manjeri, Kerala</span>
            </Link>
            <a
              href="mailto:info@coboltmachineries.com?subject=Enquiry&body=Hello COBOLT Machineries,"
              className="flex items-center gap-2 hover:text-accent transition-colors text-slate-600 font-sans"
            >
              <Mail className="w-3.5 h-3.5 text-[#DE1D3A]" />
              <span className="text-xs font-semibold text-slate-700">info@coboltmachineries.com</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center  gap-3 border-l border-slate-200 pl-4">
              <a
                href="https://www.youtube.com/@coboltmachineries"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent text-slate-400 hover:scale-105 transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5 text-[#DE1D3A]" />
              </a>
              <a
                href="https://www.facebook.com/people/Cobolt-Machineries/pfbid0gxTrWUxQHVPqtLuogLtgoc1uMcM2FDJkFQueQfYoxopVvW3wzneqV2bq1EBBWsRFl/?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent text-slate-400 hover:scale-105 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3 text-[#DE1D3A]" />
              </a>
              <a
                href="https://www.instagram.com/coboltmachineries"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent text-slate-400 hover:scale-105 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3 text-[#DE1D3A]" />
              </a>
            </div>
          </div>

          <a
            href="tel:7592084226"
            className="flex items-center gap-1.5 px-4 py-1 bg-red/10 hover:bg-accent text-[#2596be] hover:text-white text-xs font-poppins font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 animate-pulse-glow"
          >
            <Phone className="w-3 h-3 text-[#DE1D3A]" />
            <span className='text-[#DE1D3A]'>Call Now</span>
          </a>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500  ease-in-out ${isScrolled
            ? 'top-0.5 px-0'
            : 'top-5 sm:top-14 px-4 sm:px-6 lg:px-8'
          }`}
      >
        <div
          className={`mx-auto w-full transition-all duration-500    ease-in-out ${isScrolled
              ? 'max-w-none rounded-none bg-white/90 backdrop-blur-lg shadow-[0_4px_25px_rgba(15,23,42,0.06)] border-b border-slate-100 py-3 px-4 sm:px-6 lg:px-8'
              : 'max-w-7xl rounded-2xl bg-white/80 backdrop-blur-lg border border-slate-200/30 shadow-[0_8px_30px_rgba(15,23,42,0.04)] py-4 px-6 md:px-8'
            }`}
        >
          <div className="flex items-center  justify-between ">
            {/* Logo Brand Block */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center group gap-2">
                <img
                  className="h-8 md:h-10  w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  src={logo}
                  alt="Cobolt Machineries Logo"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/120x40/0F172A/FFFFFF?text=Cobolt';
                  }}
                />
              </Link>
            </div>

            {/* Navigation links (Desktop) */}
            <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-[13px] font-sans font-medium uppercase  tracking-wider transition-all duration-300 relative group block ${isActive
                      ? 'text-[#DE1D3A] font-semibold'
                      : 'text-slate-800 hover:text-[#DE1D3A] font-medium'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative block">
                      <span className="relative z-10 block d transition-transform duration-300 group-hover:-translate-y-[2px]">
                        {link.name}
                      </span>
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] bg-[#DE1D3A] transition-all duration-300 ease-out ${isActive
                            ? 'w-full opacity-100'
                            : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                          }`}
                      />
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Action CTA Block (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/contact"
                className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-[#DE1D3A] text-white font-poppins font-semibold text-xs uppercase tracking-wider shadow-lg shadow-[#DE1D3A]/25 hover:shadow-[#DE1D3A]/40 hover:bg-[#c51831] hover:-translate-y-0.5 transition-all duration-300 ease-out active:translate-y-0 text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  Get Quote
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                <span className="absolute inset-0 bg-[#c51831] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex  md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center  justify-center p-2.5 rounded-full text-slate-700 hover:text-accent hover:bg-slate-100/80 focus:outline-none transition-all duration-200"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="block h-5.5 w-5.5" />
                ) : (
                  <Menu className="block h-5.5 w-5.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slatebackdrop-blur-sm md:hidden transition-opacity duration-300 animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Screen Mobile Overlay Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[400px] bg-white border-l border-slate-100 md:hidden transition-all duration-500 ease-in-out transform flex flex-col justify-between p-8 pt-24 shadow-2xl ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
      >
        {/* Close Button in drawer */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all duration-200"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Large Links List */}
        <div className="space-y-2 text-left relative z-10 flex-grow mt-6">
          {navLinks.map((link, idx) => (
            <div
              key={link.name}
              style={{ transitionDelay: `${idx * 40}ms` }}
              className={`transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block py-3.5 px-4 text-xs font-poppins font-bold uppercase tracking-widest rounded-xl transition-all duration-300 ${isActive
                    ? 'text-accent bg-accent/5 border-l-4 border-accent pl-5'
                    : 'text-slate-700 hover:text-accent hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </div>
          ))}
        </div>

        {/* Mobile Info Footer */}
        <div
          className={`space-y-6 border-t border-slate-100 pt-6 text-left relative z-10 transform transition-all duration-500 delay-200 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
        >
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                24/7 Hotline Support
              </span>
              <a
                href="tel:7592084226"
                className="block text-sm font-sora font-semibold tracking-wider text-slate-800 hover:text-accent transition-colors duration-200"
              >
                +91 75920 84226
              </a>
            </div>

            <div className="space-y-2 border-t border-slate-100 pt-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                Branch Facilities
              </span>
              <div className="flex flex-col gap-2 text-xs text-slate-600">
                <Link to="/contact?loc=gujarat" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  <span>Gujarat Headquarters (Gandhinagar)</span>
                </Link>
                <Link to="/contact?loc=veepoor" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  <span>Veepoor Foundry Center (Kerala)</span>
                </Link>
                <Link to="/contact?loc=manjeri" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  <span>Manjeri Outlet Center (Kerala)</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-accent to-amber-500 hover:from-accent-hover hover:to-orange-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md shadow-accent/20 text-center"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            {/* Social Icons for Mobile */}
            <div className="flex justify-center gap-6 pt-2 border-t border-slate-100 mt-2">
              <a
                href="https://www.youtube.com/@coboltmachineries"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-accent transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Cobolt-Machineries/pfbid0gxTrWUxQHVPqtLuogLtgoc1uMcM2FDJkFQueQfYoxopVvW3wzneqV2bq1EBBWsRFl/?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-accent transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/coboltmachineries"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-accent transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@coboltmachineries.com"
                className="text-slate-400 hover:text-accent transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
