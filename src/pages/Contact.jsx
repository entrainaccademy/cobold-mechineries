import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

export default function Contact() {
  const location = useLocation();
  
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: 'Machinery Purchase',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [highlightedLoc, setHighlightedLoc] = useState(null);

  // Read query params on load (e.g. ?product=COBOLT-X5 or ?service=AMC or ?loc=veepoor)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productParam = params.get('product');
    const serviceParam = params.get('service');
    const locParam = params.get('loc');
    
    if (productParam) {
      setFormData(prev => ({
        ...prev,
        serviceType: 'Machinery Purchase',
        subject: `Inquiry: ${productParam}`,
        message: `I would like to request technical documentation, catalog specs, and pricing details for the ${productParam}.`
      }));
    } else if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        serviceType: 'Engineering Service',
        subject: `Inquiry: ${serviceParam}`,
        message: `I would like to discuss our requirements regarding your ${serviceParam} program.`
      }));
    }

    if (locParam) {
      setHighlightedLoc(locParam);
      // Wait for components to mount fully
      setTimeout(() => {
        const element = document.getElementById(`loc-${locParam}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
      
      // Clear highlight after 5 seconds for smooth restoration
      const timer = setTimeout(() => setHighlightedLoc(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [location.search]);

  // Form Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Contact name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid corporate email';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Mobile or telephone number is required';
    } else if (!/^[0-9+\s-]{8,20}$/.test(formData.phone)) {
      errors.phone = 'Please provide a valid contact number';
    }
    if (!formData.message.trim()) errors.message = 'Inquiry message details are required';
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Mock API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: 'Machinery Purchase',
        subject: '',
        message: ''
      });
      // Reset success banner after 8 seconds
      setTimeout(() => setIsSubmitted(false), 8000);
    }, 1500);
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Call Our Hotline",
      details: "+91 79 8765 4321",
      sub: "Mon - Sat: 9:00 AM - 6:00 PM IST",
      action: "tel:+917987654321",
      actionText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Our Engineers",
      details: "info@coboltmachineries.com",
      sub: "Send specifications for bidding",
      action: "mailto:info@coboltmachineries.com",
      actionText: "Email Us"
    },
    {
      icon: MessageSquare,
      title: "Chat on WhatsApp",
      details: "+91 79 8765 4321",
      sub: "Instant technical support routing",
      action: "https://wa.me/917987654321",
      actionText: "Start Chat"
    }
  ];

  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-bg-section border-b border-slate-200/60 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-accent font-bold text-xs uppercase tracking-widest">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary font-display leading-tight">
              Connect with Cobolt
            </h1>
            <p className="text-text-light text-base md:text-lg max-w-2xl leading-relaxed">
              Have questions about machinery specs, structural ratings, or customized setups? Our operations crew and engineering desks are ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Contact Info and Support metrics */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-4">
                <h3 className="font-display font-bold text-2xl text-primary">
                  Industrial Support Desk
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  We maintain full support networks across main industrial parks. For bidding details, tender documents, or structural reviews, send details directly to our engineering cells.
                </p>
              </div>

              {/* Quick Contact Cards */}
              <div className="space-y-4">
                {contactCards.map((card, idx) => (
                  <div key={idx} className="flex items-center justify-between p-5 border border-slate-100 rounded-xl bg-bg-section hover:bg-white hover:border-slate-200 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-lg bg-white border border-slate-150 text-accent flex items-center justify-center shadow-sm">
                        <card.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-primary">{card.title}</h4>
                        <p className="text-text-dark font-semibold text-xs mt-0.5">{card.details}</p>
                        <p className="text-text-light text-[10px]">{card.sub}</p>
                      </div>
                    </div>
                    <a
                      href={card.action}
                      target={card.action.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="px-4 py-2 border border-slate-350 hover:bg-primary hover:text-white hover:border-primary text-xs font-semibold rounded-lg transition-all duration-200"
                    >
                      {card.actionText}
                    </a>
                  </div>
                ))}
              </div>

              {/* Branch Locations Cards */}
              <div className="space-y-4 pt-4 border-t border-slate-100/60">
                <h4 className="font-display font-bold text-base text-primary mb-3">Our Facilities & Branches</h4>
                
                {/* Gujarat HQ */}
                <div
                  id="loc-gujarat"
                  className={`p-5 border rounded-xl bg-bg-section space-y-3 transition-all duration-505 ${
                    highlightedLoc === 'gujarat'
                      ? 'border-accent ring-2 ring-accent/30 bg-accent/5'
                      : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-display font-bold text-sm text-primary">Corporate Headquarters (Gujarat)</h5>
                      <p className="text-text-light text-xs leading-relaxed mt-1">
                        Plot 104, GIDC Industrial Estate, Sector 26, Gandhinagar, Gujarat 382028, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pl-8 text-[10px] text-text-light">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Visits: Mon - Fri (10:00 AM - 5:00 PM)</span>
                  </div>
                </div>

                {/* Veepoor Kerala */}
                <div
                  id="loc-veepoor"
                  className={`p-5 border rounded-xl bg-bg-section space-y-3 transition-all duration-505 ${
                    highlightedLoc === 'veepoor'
                      ? 'border-accent ring-2 ring-accent/30 bg-accent/5'
                      : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-display font-bold text-sm text-primary">Kerala Regional Foundry (Veepoor)</h5>
                      <p className="text-text-light text-xs leading-relaxed mt-1">
                        Veepoor Industrial Zone, Calicut Bypass Road, Kozhikode, Kerala 673661, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pl-8 text-[10px] text-text-light">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Foundry visits by technical appointment</span>
                  </div>
                </div>

                {/* Manjeri Kerala */}
                <div
                  id="loc-manjeri"
                  className={`p-5 border rounded-xl bg-bg-section space-y-3 transition-all duration-505 ${
                    highlightedLoc === 'manjeri'
                      ? 'border-accent ring-2 ring-accent/30 bg-accent/5'
                      : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-display font-bold text-sm text-primary">Kerala Machinery Outlet (Manjeri)</h5>
                      <p className="text-text-light text-xs leading-relaxed mt-1">
                        Nilambur Road, Near Industrial Estate, Manjeri, Malappuram, Kerala 676121, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pl-8 text-[10px] text-text-light">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Showroom: Mon - Sat (9:00 AM - 6:00 PM)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-bg-section border border-slate-100 rounded-2xl p-6 md:p-10 shadow-sm text-left">
              <h3 className="font-display font-bold text-xl text-primary mb-6">
                Request Specifications Callback
              </h3>

              {isSubmitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-green-800 space-y-3 animate-fade-in mb-6">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Inquiry Submitted Successfully</span>
                  </div>
                  <p className="text-xs leading-relaxed">
                    Thank you for connecting with Cobolt Machineries. Our system engineers will review your specifications and contact you at the provided email within 12-24 business hours.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white text-sm text-primary rounded-lg border ${
                        formErrors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-accent/50'
                      } focus:outline-none focus:ring-2 focus:border-accent transition-all duration-200`}
                      placeholder="e.g. Vikram Singhania"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-[10px] font-semibold mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Corporate/Entity Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white text-sm text-primary rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                      placeholder="e.g. AeroSteel Inc"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white text-sm text-primary rounded-lg border ${
                        formErrors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-accent/50'
                      } focus:outline-none focus:ring-2 focus:border-accent transition-all duration-200`}
                      placeholder="e.g. vsinghania@aerosteel.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-[10px] font-semibold mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white text-sm text-primary rounded-lg border ${
                        formErrors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-accent/50'
                      } focus:outline-none focus:ring-2 focus:border-accent transition-all duration-200`}
                      placeholder="e.g. +91 98765 43210"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-[10px] font-semibold mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Type Dropdown */}
                  <div>
                    <label htmlFor="serviceType" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Inquiry Category
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white text-sm text-primary rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                    >
                      <option value="Machinery Purchase">Machinery Purchase</option>
                      <option value="Engineering Service">Engineering Service</option>
                      <option value="AMC Pricing Request">AMC Pricing Request</option>
                      <option value="Custom Fabrication Consulting">Custom Fabrication Consulting</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Subject Title
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white text-sm text-primary rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                      placeholder="e.g. COBOLT-X5 CNC specifications query"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    Inquiry Message Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white text-sm text-primary rounded-lg border ${
                      formErrors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-accent/50'
                    } focus:outline-none focus:ring-2 focus:border-accent transition-all duration-200`}
                    placeholder="Provide details about structural thickness parameters, axis speeds requirements, or materials characteristics."
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-[10px] font-semibold mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-primary hover:bg-accent text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 shadow"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING DETAILS...</span>
                    ) : (
                      <>
                        <span>TRANSMIT SPECIFICATIONS INQUIRY</span>
                        <Send className="w-4.5 h-4.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Google Maps Location Area */}
      <section className="bg-bg-section py-16 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-10 text-center max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-2xl text-primary">Plant Infrastructure Layout</h3>
            <p className="text-text-light text-sm">
              We welcome custom design visits by appointment. Located in the heart of GIDC Sector 26, Gandhinagar.
            </p>
          </div>
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-md border border-slate-250 bg-slate-100">
            <iframe
              title="Cobolt Gandhinagar Facility Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.653429307044!2d72.6394541760447!3d23.237482808269784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b2938a1cfd5%3A0xe54d92cd029e0839!2sGIDC%20Sector%2026%2C%20Gandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703248364821!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
