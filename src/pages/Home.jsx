import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Settings, ShieldCheck, Cpu, Clock, Award, Users, ChevronLeft, ChevronRight, Quote, Landmark, Zap, Layers, Phone, Truck } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

// Asset imports
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpeg';
import hmAbout1 from '../assets/hm_about1.jpg';

import hereVideo from '../assets/herovideo.mp4';



import brandimg1 from '../assets/brand_img01.png';
import brandimg2 from '../assets/brand_img02.png';
import brandimg3 from '../assets/brand_img03.png';
import brandimg4 from '../assets/brand_img04.png';
import brandimg5 from '../assets/brand_img05.png';
import brandimg6 from '../assets/brand_img06.png';
import brandimg7 from '../assets/brand_img07.png';
import brandimg8 from '../assets/brand_img08.png';
import brandimg9 from '../assets/brand_img09.png';
import brandimg10 from '../assets/brand_img10.png';
import brandimg11 from '../assets/brand_img11.png';
import brandimg12 from '../assets/brand_img12.png';
import brandimg13 from '../assets/brand_img13.png';


import icecream from '../assets/icecream.jpg';
import DHf from '../assets/DH-F.jpeg';
import docota from '../assets/docota 4.jpg';
import tabletop1 from '../assets/TableTopFoodMixer.jpeg';
import tabletop2 from '../assets/TableTopFoodMixer2.jpeg';



const brandLogos = [

  brandimg8,
  brandimg6,
  brandimg10,
  brandimg11,
  brandimg12,
  brandimg13,
];


const brandLogos2 = [
  brandimg9,
  brandimg1,
  brandimg2,
  brandimg3,
  brandimg4,
  brandimg5,

  brandimg7,

];



const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Home() {



  const features = [
    {
      icon: Cpu,
      title: "High-Precision Systems",
      description: "Calibrated down to micron levels to deliver flawless part tolerances and repeatability."
    },
    {
      icon: ShieldCheck,
      title: "Certified Safety & Quality",
      description: "Full ISO-9001 and CE compliance across all fabricated rigs and machinery components."
    },
    {
      icon: Settings,
      title: "Custom Machining Rigs",
      description: "Bespoke engineering from blueprinting to stress-testing tailored to your manufacturing floor."
    },
    {
      icon: Clock,
      title: "24/7 Deployment Support",
      description: "Dedicated rapid-response service crew for zero-disruption installation and emergency repairs."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Optimized logistics and rapid-dispatch pipelines ensuring prompt site delivery and assembly timelines."
    },
    {
      icon: Award,
      title: "100% Material Quality",
      description: "Premium food-grade SUS304/316 steels and heavy-duty alloys sourced from certified global foundries."
    }
  ];

  const featuredProducts = [
    {
      id: "cnc-lathe",
      name: "COBOLT-X5 Vertical CNC Lathe",
      category: "CNC Machinery",
      image: slider1,
      specs: "5-Axis Milling | 12000 RPM Spindle | Auto-Tool Changer",
      description: "Designed for high-tolerance complex geometries in automotive and aerospace parts."
    },
    {
      id: "hydraulic-press",
      name: "COBOLT-H400 Heavy Duty Press",
      category: "Hydraulics",
      image: slider2,
      specs: "400 Tons Capacity | Smart PLC Control | Low-Vibration Bed",
      description: "Engineered for deep-drawing, progressive stamping, and metal-forming operations."
    },
    {
      id: "precision-milling",
      name: "COBOLT-M3 Ultra-Milling Station",
      category: "Precision Tools",
      image: slider3,
      specs: "High-Speed Linear Guides | Heidenhain Scales | Dust Containment",
      description: "Unmatched finishing for die making and micro-mechanical component prototyping."
    }
  ];

  const latestProducts = [
    {
      id: "icecream-freezer",
      name: "COBOLT IC-500 Continuous Freezer",
      category: "Confectionery Rig",
      image: icecream,
      specs: "500 L/Hr | Touchscreen PLC | Auto Overrun",
      description: "Industrial continuous ice cream freezer designed for consistent overrun calibration and rapid heat extraction."
    },
    {
      id: "dhf-homogenizer",
      name: "COBOLT DH-F High-Shear Homogenizer",
      category: "Fluid Machinery",
      image: DHf,
      specs: "2000 L/Hr | 400 Bar Max Pressure | Dual Stage",
      description: "Premium micron-level liquid particle disperser, optimized for emulsifying sauces, dairy mixtures, and cosmetic gels."
    },
    {
      id: "docota-filler",
      name: "COBOLT DOCOTA-4 Rotary Packaging Line",
      category: "Packaging Machinery",
      image: docota,
      specs: "4 Head Filling | 3600 Cups/Hr | Foil Heat Sealing",
      description: "Automatic rotary cup filling and heat sealing line with integrated batch printing and container discharge."
    },
    {
      id: "tabletop-mixer-1",
      name: "COBOLT TableTop-1 Pro Food Mixer",
      category: "Food Processing",
      image: tabletop1,
      specs: "10L Bowl | 3-Speed Planetary Gear | Safety Guard",
      description: "Industrial-grade commercial stand mixer with stainless steel components for bakeries and test kitchens."
    },
    {
      id: "tabletop-mixer-2",
      name: "COBOLT TableTop-2 High-Output Mixer",
      category: "Food Processing",
      image: tabletop2,
      specs: "20L Bowl | Digital Timer | Reinforced Motor",
      description: "High-capacity planetary mixer with speed control and automatic bowl lifting mechanism for thick batters."
    },
    {
      id: "tabletop-mixer-2",
      name: "COBOLT TableTop-2 High-Output Mixer",
      category: "Food Processing",
      image: tabletop2,
      specs: "20L Bowl | Digital Timer | Reinforced Motor",
      description: "High-capacity planetary mixer with speed control and automatic bowl lifting mechanism for thick batters."
    }
   



  ];


  const servicesHighlights = [
    {
      title: "Precision Installation",
      desc: "Millwright services, site inspection, electrical alignment, and calibration."
    },
    {
      title: "Predictive Maintenance",
      desc: "Vibration analysis, thermal imaging, and fluid wear tracking for peak reliability."
    },
    {
      title: "Emergency Repairs",
      desc: "On-site troubleshooting with standard structural spares to minimize workflow shutdowns."
    }
  ];

  const expertises = [
    { icon: Landmark, name: "Aerospace & Defense", desc: "Rigid structures supporting close-tolerance component fabrication." },
    { icon: Zap, name: "Energy & Infrastructure", desc: "Heavy components for wind power hubs, turbines, and pipeline systems." },
    { icon: Layers, name: "Automotive & Logistics", desc: "Press lines and assembly setups for high-capacity vehicle production." }
  ];

  const testimonials = [
    {
      quote: "Cobolt Machineries transformed our factory throughput. Their vertical CNC lathe runs 20 hours a day with zero calibration drift in nine months.",
      author: "Vikram Singhania",
      designation: "VP of Operations, AeroSteel India",
      rating: 5
    },
    {
      quote: "The team's millwright accuracy during the installation of our 400-ton hydraulic press was impressive. Their AMC keeps our uptime at 99.8%.",
      author: "Marcus Vance",
      designation: "Plant Manager, Kinetix Heavy Industries",
      rating: 5
    }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-screen  min-h-[600px] w-full overflow-hidden bg-[#1F2937]">
        {/* Background Image or Video with Zoom/Autoplay */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            src={hereVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center  animate-slow-zoom"
          />
        </div>

        {/* Dark Gradient Overlay for readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" /> */}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-left">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1.5 bg-transparent border border-[#DE1D3A]/40 text-[#DE1D3A]  text-xs font-thin uppercase tracking-widest rounded-md mb-6"
              >
                Advanced Engineering Systems
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight font-display mb-6"
              >
                Precision Engineering & Machinery Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-sans max-w-2xl"
              >
                Delivering innovative industrial machinery and engineering excellence for modern industries.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                {/* Laptop/Desktop Buttons (Hidden on mobile/tablet) */}
                <Link
                  to="/products"
                  className="hidden lg:flex px-8 py-3.5 bg-[#DE1D3A] hover:bg-[#B7152D] text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 items-center group font-sans"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="hidden lg:flex px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 font-sans"
                >
                  Contact Us
                </Link>

                {/* Mobile/Tablet Call Button (Fixed Floating on Bottom Right, Hidden on Laptop/Desktop) */}
                <a
                  href="tel:7592084226"
                  className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#DE1D3A] to-[#F59E0B] hover:from-[#B7152D] hover:to-[#F59E0B] text-white rounded-full shadow-2xl shadow-[#DE1D3A]/40 transition-all duration-300 flex items-center justify-center animate-pulse-glow hover:scale-105 active:scale-95"
                  aria-label="Call Now"
                >
                  <Phone className="w-6 h-6 text-white" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section (Logo Strip) */}
      <section className="bg-[#F8FAFC]    py-6 sm:py-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-1 bg-red-000  sm:px-6 lg:px-8">
          <p className="text-center text-[13px] font-thin text-[#6B7280] uppercase tracking-widest mb-4 sm:mb-8 sm:text-[20px] font-sans">
            Our Esteemed Clients
          </p>

          {/* Logo Marquee Wrapper 1 */}
          <div className="relative w-full ">
            {/* Left and Right side soft fade gradients for premium aesthetic */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />


            {/* Marquee Track (Left to Right) */}
            <div className="flex w-max items-center  bg-red-00 gap-0  sm:gap-16 animate-marquee py-2 select-none">
              {/* First Track Set */}
              {brandLogos.map((logo, idx) => (
                <div
                  key={`client-logo-1-${idx}`}
                  className="flex items-center  justify-center w-28 sm:w-36 h-12 sm:h-16 flex-shrink-0 transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${idx + 1}`}
                    className="max-w-full  max-h-full object-contain filter grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  />
                </div>
              ))}
              {/* Second Track Set (Duplicate for Infinite Loop) */}
              {brandLogos.map((logo, idx) => (
                <div
                  key={`client-logo-1-dup-${idx}`}
                  className="flex items-center  justify-center w-28 sm:w-36 h-12 sm:h-16 flex-shrink-0 transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${idx + 1} Dup`}
                    className="max-w-full max-h-full  object-contain filter grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Logo Marquee Wrapper 2 */}   {/* row2 */}
          <div className="relative w-full  hidden lg:block overflow-hidden mt-8">
            {/* Left and Right side soft fade gradients for premium aesthetic */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

            {/* Marquee Track (Right to Left) */}
            <div className="flex w-max items-center gap-1 sm:gap-16 animate-marquee-reverse py-2 select-none">
              {/* First Track Set */}
              {brandLogos2.map((logo, idx) => (
                <div
                  key={`client-logo-2-${idx}`}
                  className="flex items-center justify-center w-28 sm:w-36 h-12 sm:h-16 flex-shrink-0 transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${idx + 1}`}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  />
                </div>
              ))}
              {/* Second Track Set (Duplicate for Infinite Loop) */}
              {brandLogos2.map((logo, idx) => (
                <div
                  key={`client-logo-2-dup-${idx}`}
                  className="flex items-center justify-center w-28 sm:w-36 h-12 sm:h-16 flex-shrink-0 transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${idx + 1} Dup`}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-4 sm:py-24   bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Images Column */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB] max-h-[500px]">
                <img
                  src={hmAbout1}
                  alt="Industrial Engineering Team"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#DE1D3A]/30 to-transparent" />
              </div>
              {/* Overlay Stat Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="absolute -bottom-6 -right-6 hidden sm:block"
              >
                <div className="bg-[#FFFFFF] border border-[#E5E7EB] shadow-xl rounded-xl p-6 max-w-xs animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#FCE8EC] rounded-lg flex items-center justify-center text-[#DE1D3A]">
                      <Award className="w-6 h-6 text-[#DE1D3A]" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-2xl text-[#DE1D3A]">10+</h4>
                      <p className="text-[#6B7280]  text-xs font-medium uppercase tracking-wider">Years Engineering Experience</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#DE1D3A] font-bold text-xs uppercase tracking-widest">
                Company Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] font-display leading-tight">
                Pioneering Precision & Manufacturing Excellence Since 2001
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed">
                Cobolt Machineries is a premium global manufacturer of high-end industrial machinery. We bridge the gap between complex engineering concepts and reliable physical manufacturing equipment, delivering solutions that scale operations while preserving razor-sharp accuracy.
              </p>
              <p className="text-[#6B7280] text-base leading-relaxed">
                With a dedicated state-of-the-art foundry and high-precision CNC toolsets, our in-house engineers design, construct, and calibrate CNC setups, hydraulics, stamping stations, and automated conveyor lines.
              </p>
              <div className="pt-4 flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FCE8EC] flex items-center justify-center text-[#DE1D3A]">
                    <Award className="w-5 h-5 text-[#DE1D3A]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#111827] text-sm font-display">ISO 9001:2015</h5>
                    <p className=" text-[#6B7280]  text-xs">Quality Management Certified</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FCE8EC] flex items-center justify-center text-[#DE1D3A]">
                    <Users className="w-5 h-5 text-[#DE1D3A]" />
                  </div>
                  <div>
                    <h5 className="font-bold  text-[#111827] text-sm font-display">120+ Active Clients</h5>
                    <p className=" text-[#6B7280] text-xs">Heavy Manufacturing Sectors</p> 
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center text-[#DE1D3A] hover:text-[#B7152D] font-semibold text-sm transition-colors duration-200 group"
                >
                  Discover Our Story
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#F8FAFC]/50 border-y border-[#E5E7EB]/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#DE1D3A]/5 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16  space-y-4">
            <span className="font-sans font-semibold tracking-wider text-xs text-[#DE1D3A] uppercase px-3.5 py-1.5 bg-[#FCE8EC]/50 rounded-full border border-[#DE1D3A]/20 inline-block">
              Our Core Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] font-display tracking-tight">
              Why Heavy Manufacturers Partner with Cobolt
            </h2>
            <p className="text-[#6B7280] text-base max-w-2xl mx-auto leading-relaxed">
              We understand that even a single minute of machine downtime represents massive loss. We engineer stability into every joint and code reliability into every system.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 bg-[#F8FAFC] gap-4 sm:gap-10"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative border border-[#E5E7EB]   shadow-xs shadow-[#DE1D3A]/60  hover:border-[#DE1D3A]/20 hover:shadow-[0_20px_40px_rgba(222,29,58,0.06)] rounded-2xl p-4 md:p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col items-start text-left overflow-hidden"
              >
                {/* Large Background Card Number */}
                <div className=" hidden md:block absolute top-6 right-8 text-3xl  font-extrabold font-display text-[#E5E7EB] select-none pointer-events-none group-hover:text-[#DE1D3A]/10 transition-colors duration-500">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Glowing Icon Container */}
                <div className=" w-12 h-12  md:w-14 md:h-14  bg-[#DE1D3A]/5 text-[#DE1D3A]   group-hover:bg-[#DE1D3A] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 shadow-sm shadow-[#DE1D3A]/5 group-hover:shadow-[#DE1D3A]/25 transition-all duration-500">
                  <feature.icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 " />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold md:font-bold text-sm  md:text-lg  bg-yellow-000 md:bg-red-000 text-[#6B7280] mb-3 group-hover:text-[#DE1D3A] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280]  text-[12px] md:text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Premium Hover Accent Line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#DE1D3A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Latest Products Section (Premium Showcase) */}
      <section className="py-1 sm:py-32 bg-[#FFFFFF] text-[#6B7280] relative overflow-hidden">
        {/* Subtle grid pattern at very low opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a02_1px,transparent_1px),linear-gradient(to_bottom,#0f172a02_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        {/* Soft radial glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#DE1D3A]/5 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#E5E7EB]/60 via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Animated background glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#DE1D3A]/5 rounded-full blur-[130px] pointer-events-none"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          {/* Section Headers */}
          <motion.div variants={cardVariants} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
            <span className="font-sans font-semibold tracking-wider text-xs text-[#DE1D3A] uppercase px-3.5 py-1.5 bg-[#DE1D3A]/5 rounded-full border border-[#DE1D3A]/10 inline-block">
              New Engineering Arrivals
            </span>
            <h2 className="text-2xl md:text-4xl sm:text-5xl font-bold md:font-extrabold text-[#111827] font-display tracking-tight leading-[1.12]">
              Latest Food Processing & Packaging Machinery
            </h2>
            <p className="text-[#6B7280] font-light   px-4 md:px-0 text-sm  md:text-sm  md:font-light  leading-relaxed font-sans max-w-xl mx-auto">
              Engineered with food-grade SUS304/SUS316 stainless steel, smart PLC automation, and high-throughput reliability.
            </p>
             <div className="pt-4">
    <Link
      to="/products"
      className="
        inline-flex
        items-center
        gap-2
        px-6
        py-3
        bg-[#DE1D3A]
        hover:bg-[#B7152D]
        text-white
        text-sm
        font-semibold
        rounded-full
        transition-all
        duration-300
        shadow-lg
        shadow-[#DE1D3A]/20
        hover:shadow-xl
        hover:shadow-[#DE1D3A]/30
        hover:-translate-y-1
      "
    >
      View All Products
      <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {latestProducts.slice(0, 3).map((product) => (
              <motion.div
                variants={cardVariants}
                key={product.id}
                className="
        group relative
        bg-[#FFFFFF]
        border border-[#E5E7EB]
        rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        hover:border-[#DE1D3A]/20
        transition-all duration-500
        hover:-translate-y-1
        flex flex-col h-full
      "
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#DE1D3A]" />

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F8FAFC]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute top-4 left-4 bg-[#FFFFFF] text-[#DE1D3A] border border-[#DE1D3A]/20 px-3 py-1 rounded-full text-[10px] font-semibold uppercase shadow-sm">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-xl text-[#111827] mb-3 group-hover:text-[#DE1D3A] transition-colors">
                    {product.name}
                  </h3>

                  <div className="inline-flex w-fit text-[11px] font-medium text-[#DE1D3A] bg-[#FCE8EC] px-3 py-1 rounded-full mb-4">
                    {product.specs}
                  </div>

                  <p className="text-[#6B7280] text-sm leading-relaxed flex-grow mb-6">
                    {product.description}
                  </p>

                  <Link
                    to="/contact"
                    className="
            w-full
            py-3
            border border-[#DE1D3A]
            text-[#DE1D3A]
            hover:bg-[#B7152D]
            hover:border-[#B7152D]
            hover:text-white
            rounded-xl
            text-sm
            font-semibold
            transition-all duration-300
            flex items-center justify-center gap-2
          "
                  >
                    Get Product Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>


          {/* Second Row: 2 cards centered */}
            <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {latestProducts.slice(0, 3).map((product) => (
              <motion.div
                variants={cardVariants}
                key={product.id}
                className="
        group relative
        bg-[#FFFFFF]
        border border-[#E5E7EB]
        rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        hover:border-[#DE1D3A]/20
        transition-all duration-500
        hover:-translate-y-1
        flex flex-col h-full
      "
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#DE1D3A]" />

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F8FAFC]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute top-4 left-4 bg-[#FFFFFF] text-[#DE1D3A] border border-[#DE1D3A]/20 px-3 py-1 rounded-full text-[10px] font-semibold uppercase shadow-sm">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-xl text-[#111827] mb-3 group-hover:text-[#DE1D3A] transition-colors">
                    {product.name}
                  </h3>

                  <div className="inline-flex w-fit text-[11px] font-medium text-[#DE1D3A] bg-[#FCE8EC] px-3 py-1 rounded-full mb-4">
                    {product.specs}
                  </div>

                  <p className="text-[#6B7280] text-sm leading-relaxed flex-grow mb-6">
                    {product.description}
                  </p>

                  <Link
                    to="/contact"
                    className="
            w-full
            py-3
            border border-[#DE1D3A]
            text-[#DE1D3A]
            hover:bg-[#B7152D]
            hover:border-[#B7152D]
            hover:text-white
            rounded-xl
            text-sm
            font-semibold
            transition-all duration-300
            flex items-center justify-center gap-2
          "
                  >
                    Get Product Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Premium Bottom Conversion CTA Section */}
          <motion.div
            variants={cardVariants}
            className="mt-20 sm:mt-24 border border-[#E5E7EB] bg-[#F8FAFC]/50 rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-left space-y-2">
              <h4 className="font-display font-bold text-xl text-[#111827] tracking-tight">Need a custom engineering solution?</h4>
              <p className="text-[#6B7280] text-sm max-w-lg font-sans">Our master fabricators can tailor dimensions, capacities, and PLC programs to your factory floor.</p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#DE1D3A] hover:bg-[#B7152D] hover:-translate-y-0.5 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 flex-shrink-0"
            >
              Talk to an Engineer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      

  
     
      {/* Customer Testimonials Section */}
      <section className="py-24 bg-[#F8FAFC] border-t border-[#E5E7EB]/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#DE1D3A] font-bold text-xs uppercase tracking-widest">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] font-display">
              Trusted by Top Operators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-8 shadow-sm flex flex-col justify-between text-left relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#E5E7EB] flex-shrink-0" />
                <div className="space-y-4 z-10">
                  <div className="flex gap-0.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-[#6B7280] italic text-sm leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>
                <div className="border-t border-[#E5E7EB] pt-6 mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FCE8EC] flex items-center justify-center text-[#DE1D3A] font-display font-bold text-sm">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-[#111827] text-sm font-display">{test.author}</h5>
                    <p className="text-[#6B7280] text-xs font-medium">{test.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="space-y-4 text-left max-w-2xl">
              <span className="text-[#DE1D3A] font-bold text-xs uppercase tracking-widest">
                Technical Journals
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] font-display">
                Latest Machinery Updates & Trends
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#E5E7EB] hover:border-[#DE1D3A] text-sm font-semibold rounded-lg text-[#DE1D3A] hover:bg-[#F8FAFC] transition-all duration-200 flex-shrink-0 group"
            >
              Visit Blog
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[#E5E7EB] bg-[#F8FAFC] hover:bg-[#FFFFFF] rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group">
              <div>
                <span className="text-[#DE1D3A] text-xs font-semibold uppercase tracking-wider">Maintenance Guide</span>
                <h3 className="font-display font-bold text-xl text-[#111827] group-hover:text-[#DE1D3A] transition-colors duration-200 mt-3 mb-2">
                  5 Essential Checks for High-Speed Spindles
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                  Spindle thermal drift is the primary cause of dimension errors. Learn how oil cooling systems and vibration sensing prevent spindle failure.
                </p>
              </div>
              <Link to="/blog" className="text-[#DE1D3A] hover:text-[#B7152D] font-bold text-xs flex items-center gap-1.5 transition-colors duration-200">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="border border-[#E5E7EB] bg-[#F8FAFC] hover:bg-[#FFFFFF] rounded-xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group">
              <div>
                <span className="text-[#DE1D3A] text-xs font-semibold uppercase tracking-wider">Industrial IoT</span>
                <h3 className="font-display font-bold text-xl text-[#111827] group-hover:text-[#DE1D3A] transition-colors duration-200 mt-3 mb-2">
                  Integrating PLC Data with Enterprise ERP Systems
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
                  How manufacturing floors leverage automated Modbus/TCP relays to log parts count and predictive health checks directly into billing databases.
                </p>
              </div>
              <Link to="/blog" className="text-[#DE1D3A] hover:text-[#B7152D] font-bold text-xs flex items-center gap-1.5 transition-colors duration-200">
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="py-20 bg-[#DE1D3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1F2937] via-[#DE1D3A] to-[#DE1D3A] opacity-60" />

        {/* Fine grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            Ready to Optimize Your Production Output?
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Discuss your machinery specifications, structural tolerances, or maintenance schedules with our lead system designers today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#DE1D3A]/70 hover:bg-[#B7152D] text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group"
            >
              Consult an Engineer
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/917987654321"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
