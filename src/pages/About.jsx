import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Eye, ShieldCheck, Zap, Users, Factory, Globe } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import hmAbout1 from '../assets/hm_about1.jpg';

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Engineering Excellence",
      desc: "We make zero compromises on build tolerances, steel grades, and micro-component calibration. Precision is our fundamental standard."
    },
    {
      icon: ShieldCheck,
      title: "Reliability First",
      desc: "Our machinery is designed to perform in intense continuous production cycles. We prioritize structural strength and uptime assurance."
    },
    {
      icon: Zap,
      title: "Client-Centric Customization",
      desc: "Every assembly floor is unique. We adapt layouts, controls, and technical parameters to match our client's exact operational requirements."
    }
  ];

  const milestones = [
    {
      year: "2001",
      title: "Company Founded",
      desc: "Cobolt Machineries started as a custom toolmaker and component foundry in Gandhinagar, serving regional manufacturing plants."
    },
    {
      year: "2008",
      title: "National Quality Recognition",
      desc: "Achieved domestic ISO-9001 certification. Upgraded factory to semi-automated lathe centers and doubled foundry output."
    },
    {
      year: "2015",
      title: "Export Launch & CNC Expansion",
      desc: "Launched our first proprietary line of 3-axis and 5-axis vertical CNC milling centers. Established distribution channels in Southeast Asia."
    },
    {
      year: "2022",
      title: "IoT-Enabled Smart Automation",
      desc: "Inaugurated our second 150,000 sq ft smart manufacturing hub in Gujarat. Integrated cloud analytics for predictive machine health diagnostics."
    }
  ];

  const team = [
    {
      name: "Dr. Arjan Patel",
      role: "Founder & Managing Director",
      bio: "Ph.D. in Metallurgy from IIT Bombay. Over 30 years of industrial design experience.",
      initials: "AP"
    },
    {
      name: "Sarah Jenkins",
      role: "Chief Systems Architect",
      bio: "Formerly Senior Robotics Designer at Siemens. Leads the CNC automation & IoT division.",
      initials: "SJ"
    },
    {
      name: "Ramanathan Iyer",
      role: "Director of Operations & AMC",
      bio: "20 years managing millwright and maintenance setups. Controls customer satisfaction loops.",
      initials: "RI"
    }
  ];

  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-bg-section border-b border-slate-200/60 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 max-w-3xl"
          >
            <span className="text-accent font-bold text-xs uppercase tracking-widest">
              Who We Are
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-primary font-display leading-tight">
              About Cobolt Machineries
            </h1>
            <p className="text-text-light text-base md:text-lg max-w-2xl leading-relaxed">
              We engineer state-of-the-art machinery that powers modern manufacturing, supporting precision parts creation and infrastructure reliability globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Info */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary font-display">
                Building the Future of Heavy Machinery
              </h2>
              <p className="text-text text-sm sm:text-base leading-relaxed">
                Cobolt Machineries was established with a singular vision: to build reliable, high-end, heavy-duty industrial systems that push manufacturing efficiency forward. What began as a local foundry has expanded into a global industrial engineering vendor.
              </p>
              <p className="text-text text-sm sm:text-base leading-relaxed">
                Our operations today span across multiple departments: mechanical design, metallurgical research, automation software integration, and heavy structure assembly. We construct our components out of stress-relieved steel and run rigorous static and dynamic load simulations before any shipment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                <div>
                  <h4 className="font-display font-bold text-3xl text-accent">2001</h4>
                  <p className="text-text-light text-xs mt-1 font-semibold uppercase tracking-wider">Inception Year</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-3xl text-accent">350+</h4>
                  <p className="text-text-light text-xs mt-1 font-semibold uppercase tracking-wider">Machines Installed</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-3xl text-accent">45+</h4>
                  <p className="text-text-light text-xs mt-1 font-semibold uppercase tracking-wider">Global Exporters</p>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 max-h-[420px]">
                <img
                  src={hmAbout1}
                  alt="Industrial factory floor"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg hidden sm:flex items-center gap-4 border border-slate-800">
                <Factory className="w-8 h-8 text-accent flex-shrink-0" />
                <div className="text-left">
                  <h5 className="font-bold text-sm">Industrial Hub</h5>
                  <p className="text-slate-400 text-xs">Gandhinagar, Gujarat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission dual grids */}
      <section className="py-24 bg-bg-section border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200/50 shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-primary mb-4">Our Vision</h3>
                <p className="text-text text-sm sm:text-base leading-relaxed">
                  To be the global benchmark for high-precision manufacturing solutions, transforming how heavy industries design and produce products by bridging structural engineering with cloud diagnostics.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8 text-xs font-bold text-accent uppercase tracking-wider">
                <Globe className="w-4 h-4" /> Global Leadership Standards
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200/50 shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-primary mb-4">Our Mission</h3>
                <p className="text-text text-sm sm:text-base leading-relaxed">
                  To supply durable, zero-defect machines and rapid engineering maintenance programs that enhance operator safety, reduce power consumption, and maintain production continuity for our clients.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8 text-xs font-bold text-accent uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> Uncompromising Safety Rules
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent font-bold text-xs uppercase tracking-widest">Principles We Live By</span>
            <h2 className="text-3xl font-extrabold text-primary font-display">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="border border-slate-100 hover:border-slate-200 bg-white rounded-xl p-8 text-left hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-6">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-3">{val.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-bg-section border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-accent font-bold text-xs uppercase tracking-widest">Our Progress Journey</span>
            <h2 className="text-3xl font-extrabold text-primary font-display">Company Timeline</h2>
          </div>

          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto text-left">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-16">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                  {/* Timeline Point */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow -translate-x-1/2 z-10" />

                  {/* Left Column (empty on even, content on odd in desktop) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 text-left md:text-right ${
                    idx % 2 === 0 ? 'md:order-1' : 'md:order-3'
                  }`}>
                    {idx % 2 === 0 && (
                      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <span className="text-accent font-display font-extrabold text-2xl">{milestone.year}</span>
                        <h4 className="font-display font-bold text-lg text-primary mt-1 mb-2">{milestone.title}</h4>
                        <p className="text-text-light text-sm leading-relaxed">{milestone.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Spacer */}
                  <div className="w-0 md:w-1/12 md:order-2" />

                  {/* Right Column (content on even, empty on odd in desktop) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-12 text-left ${
                    idx % 2 === 0 ? 'md:order-3' : 'md:order-1'
                  }`}>
                    {idx % 2 !== 0 && (
                      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <span className="text-accent font-display font-extrabold text-2xl">{milestone.year}</span>
                        <h4 className="font-display font-bold text-lg text-primary mt-1 mb-2">{milestone.title}</h4>
                        <p className="text-text-light text-sm leading-relaxed">{milestone.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent font-bold text-xs uppercase tracking-widest">Board of Directors</span>
            <h2 className="text-3xl font-extrabold text-primary font-display">Leadership Team</h2>
            <p className="text-text-light text-base max-w-xl mx-auto">
              Our directors bring combining skills in structural engineering, corporate administration, and robotics controls to push Cobolt ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="group border border-slate-100 hover:border-slate-200 bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col items-center">
                {/* Minimal Avatar */}
                <div className="w-20 h-20 rounded-2xl bg-accent text-white flex items-center justify-center font-display font-extrabold text-2xl mb-6 shadow-md transition-all duration-300 group-hover:scale-110">
                  {member.initials}
                </div>
                <h4 className="font-display font-bold text-lg text-primary">{member.name}</h4>
                <span className="text-accent text-xs font-semibold uppercase tracking-wider mt-1 mb-4 block">
                  {member.role}
                </span>
                <p className="text-text-light text-sm leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
