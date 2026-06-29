import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldAlert, FileSliders, Settings2, Hammer, Landmark, ArrowRight, CheckCircle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.jpg';
import service5 from '../assets/service5.jpg';
import service6 from '../assets/service6.jpg';

export default function Services() {
  const servicesList = [
    {
      id: "installation",
      icon: Hammer,
      image: service1,
      title: "Steel fabrication",
      tagline: "Millwright services, foundation design, and mechanical alignment.",
      description: "Experience the pinnacle of kitchen innovation with our steel fabrication. Impeccably crafted stainless steel equipment, tailored to elevate your culinary space. Precision, durability, and style converge to redefine your kitchen experience. Explore excellence in every detail.",
      points: [
        "Custom kitchen layout planning and 3D modeling",
        "High-grade food-safe 304/316 stainless steel fabrication",
        "Seamless TIG/MIG welding and satin finish polishing",
        "Precision on-site installation and alignment"
      ]
    },
   {
  id: "import-export",
  icon: Settings2,
  image: service2,
  title: "Import & Export",
  tagline: "Connecting businesses to global markets with confidence.",
  description:
    "Our import and export services are designed to streamline cross-border trade while ensuring compliance, efficiency, and cost-effectiveness. We manage procurement, customs procedures, international logistics, and delivery, allowing businesses to focus on growth while we handle the complexities of global commerce.",

  points: [
    "Worldwide sourcing and supplier management",
    "Customs compliance and regulatory documentation",
    "Air, sea, and land freight solutions",
    "Secure, timely, and cost-effective global deliveries"
  ]
},
    {
  id: "manufacturing",
  icon: ShieldAlert,
  image: service3,
  title: "Machinery Manufacturing",
  tagline: "Innovative manufacturing solutions engineered for industrial excellence.",
  description:
    "From concept and design to production and final testing, we manufacture robust industrial machinery that meets international quality standards. Our team focuses on precision engineering, operational efficiency, and long-term reliability to provide equipment that supports sustainable business growth.",

  points: [
    "End-to-end machinery design and development",
    "Advanced manufacturing with precision engineering",
    "Rigorous quality assurance and safety compliance",
    "After-sales support, maintenance, and spare parts availability"
  ]
},{
  id: "consultation",
  icon: FileSliders,
  image: service4,
  title: "Consulting",
  tagline: "Strategic engineering expertise for smarter industrial operations.",
  description:
    "We provide comprehensive consulting services tailored to the unique needs of manufacturers and industrial businesses. Our experts deliver strategic guidance on process optimization, equipment planning, technology integration, and operational excellence to help organizations achieve sustainable growth and long-term success.",

  points: [
    "Engineering and technical consulting",
    "Industrial process optimization",
    "Equipment planning and technology integration",
    "Risk assessment and operational improvement"
  ]
},
    {
  id: "amc",
  icon: Landmark,
  image: service5,
  title: "Annual Maintenance Contracts (AMC)",
  tagline: "Reliable maintenance solutions designed for maximum uptime.",
  description:
    "Our AMC services deliver complete maintenance management through scheduled servicing, preventive inspections, emergency support, and performance monitoring. We ensure your equipment operates efficiently throughout the year, helping you reduce operational risks, improve productivity, and achieve long-term cost savings.",

  points: [
    "Customized maintenance schedules based on operational needs",
    "Preventive inspections to reduce unexpected breakdowns",
    "Priority on-site support from experienced service engineers",
    "Detailed maintenance reports and performance recommendations"
  ]
},{
      id: "custom-solutions",
      icon: CheckCircle,
      image: service6,
      title: "Custom Machinery Design & Fabrication",
      tagline: "Bespoke engineering from concept blueprints to shopfloor integration.",
      description: "Crafting culinary solutions tailored to you. Our custom machine manufacturing turns your kitchen dreams into reality. Impeccable precision and innovation meet as we design and create bespoke machinery for a unique cooking experience.",
      points: [
        "Full 3D CAD modeling and dynamic load simulation",
        "Bespoke hydraulic manifold and pneumatic layouts",
        "Multi-language custom touch HMI programming",
        "Full CE & OSHA safety compliance integration"
      ]
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
              Engineering Support
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary font-display leading-tight">
              Machinery Support & Services
            </h1>
            <p className="text-text-light text-base md:text-lg max-w-2xl leading-relaxed">
              We back our hardware with certified technicians and proactive service packages. Keep your production floor operating at maximum capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div
                key={service.id}
                className="bg-bg-section border border-slate-100 hover:border-slate-200 hover:bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-left group"
              >
                <div>
                  {/* Service Image Banner */}
                  <div className="relative">
                    <div className="h-48 overflow-hidden bg-slate-100 rounded-t-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    
                    {/* Overlapping Floating Icon */}
                    <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white border border-slate-150 text-accent group-hover:bg-accent group-hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-md z-10">
                      <service.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 pt-10">
                    <h3 className="font-display font-bold text-lg text-primary mb-2 mt-2">
                      {service.title}
                    </h3>
                    <p className="text-accent text-[10px] font-semibold tracking-wide uppercase mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-text text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Points */}
                    {service.points && (
                      <div className="space-y-3 mb-4">
                        <h5 className="font-display font-bold text-xs uppercase tracking-wider text-primary">
                          What's Included:
                        </h5>
                        <ul className="space-y-2">
                          {service.points.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-text-light">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                              <span className="leading-relaxed">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mx-6 pb-6 pt-4 border-t border-slate-150/60">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center text-primary font-bold text-xs group-hover:text-accent transition-colors duration-200"
                  >
                    Inquire About This Service
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust banner */}
      <section className="py-16 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <h3 className="font-display font-bold text-2xl">Need Emergency Service Callout?</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our priority AMC hotline operates 24/7. Average technician response time is under 4 hours for local manufacturing zones.
          </p>
          <div className="pt-4">
            <a
              href="tel:+917987654321"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-accent hover:bg-accent-hover text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors duration-200 shadow-md"
            >
              Call 24/7 Hotline: +91 79 8765 4321
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
