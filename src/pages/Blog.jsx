import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, Clock, ArrowRight, X, ChevronRight, BookOpen } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ['All', 'Maintenance', 'Automation', 'Engineering', 'Industry 4.0'];

  const articles = [
    {
      id: "spindle-checks",
      title: "5 Essential Checks for High-Speed Spindles",
      category: "Maintenance",
      date: "June 12, 2026",
      author: "Ramanathan Iyer",
      readTime: "6 min read",
      summary: "Spindle thermal drift and bearing failures are the primary causes of part tolerances issues. Learn how temperature management prevents downtime.",
      isFeatured: true,
      content: `
High-speed spindles are the heart of vertical milling stations and CNC lathes. Operating at speeds between 12,000 and 24,000 RPM, these precision assemblies generate significant frictional heat. Without proper care, this heat results in thermal expansion, bearing breakdown, and loss of dimensional accuracy.

### 1. Monitor Thermal Expansion
Spindles experience linear growth as they heat up. Even a 10-micron displacement can ruin a high-tolerance aerospace mold. Ensure your machine's liquid chiller unit is set to track ambient room temperature exactly, maintaining the spindle casing within ±0.5°C of environmental temperature.

### 2. Verify Lubrication Flow
High-speed ceramic hybrid bearings require minimal, but extremely consistent lubrication. Inspect the oil-air lubrication unit daily. Make sure the pressure regulator sits precisely at the manufacturer's specification (typically 1.5 to 2.0 bar) and that no air bubbles exist in the delivery lines.

### 3. Check for Harmonic Vibration
Vibration is the first indicator of spindle wear or imbalances. Run weekly accelerometer tests at various speeds. An increase in vibration levels at specific frequencies indicates bearing cage wear, tool holder imbalance, or spindle drawbar fatigue.

### 4. Inspect Drawbar Tension
The drawbar holds the tool holder in the spindle taper. Over time, Belleville springs inside the drawbar fatigue, reducing clamping force. If force drops, tool deflection occurs, leading to poor finish quality and premature tool breakage. Measure force biannually using a calibrated retention force gauge.

### 5. Check Taper Cleanliness
Any dust, chip, or oil film between the tool holder and the spindle taper causes runout. Clean the spindle taper manually using special lint-free taper cleaners once per shift. Ensure the automatic spindle air blast feature is operating at full pressure during tool changes.
      `
    },
    {
      id: "plc-integration",
      title: "Integrating PLC Data with Enterprise ERP Systems",
      category: "Automation",
      date: "May 28, 2026",
      author: "Sarah Jenkins",
      readTime: "8 min read",
      summary: "How manufacturing floors leverage automated Modbus/TCP relays to log parts count and predictive health checks directly into billing databases.",
      isFeatured: false,
      content: `
Modern manufacturing demands real-time visibility into production efficiency. Bridging the gap between the factory floor (Operational Technology) and corporate planning systems (Information Technology) is no longer a luxury—it is a core operational requirement.

### The Modbus/TCP Protocol Bridge
Most modern CNC units and hydraulic stations run PLC controllers (Programmable Logic Controllers) that log raw sensor states, motor currents, cycles, and fault logs. We can read this data using standard industrial protocols like Modbus/TCP or OPC Unified Architecture (OPC UA).

### Real-Time Efficiency Tracking
By routing PLC registers to an OPC UA server, operations teams can calculate Overall Equipment Effectiveness (OEE) in real-time. The parameters tracked include:
- **Availability**: Is the machine in cycle or halted due to an error?
- **Performance**: How close is the current feed-rate to the theoretical maximum?
- **Quality**: Are reject probes triggering post-cut?

### Seamless ERP Syncing
Once mapped, this data feeds directly into enterprise databases via secure APIs. When a machine completes a batch of 1,000 units, the PLC automatically decrements raw stock levels in the warehouse ERP, triggers automatic component re-orders, and logs electrical consumption metrics for carbon compliance reporting.
      `
    },
    {
      id: "hydraulic-fluid-care",
      title: "Hydraulic Fluid Degradation: Causes and Prevention",
      category: "Maintenance",
      date: "May 15, 2026",
      author: "Marcus Vance",
      readTime: "5 min read",
      summary: "Understanding chemical oxidation, particulate contamination, and water emulsification in high-pressure hydraulic circuits.",
      isFeatured: false,
      content: `
In high-pressure systems like our 400-Ton press, hydraulic fluid is more than a power transmission medium—it is a lubricant and cooling agent. Over 80% of hydraulic component failures can be traced directly to fluid degradation or contamination.

### Main Types of Contamination
1. **Particulate Matter**: Microscopic metal shavings, dust from seals, and environmental grit act as abrasives, wearing down close-tolerance pump pistons and valve spools.
2. **Water Emulsification**: Moisture enters via condensation or breathing. It reduces fluid film strength, accelerates rust, and leads to valve cavitation.
3. **Thermal Oxidation**: Operating at high temperatures causes the oil to combine with oxygen, forming varnishes and sludges that clog filters and lock spool valves.

### Preventative Protocols
Always use dual micro-filtration filters (10-micron or better) on your system's return line. Run annual oil diagnostic tests to check chemical integrity, viscosity, and wear-metal concentrations. Maintain reservoir temperatures below 55°C using air-cooled or water-cooled heat exchangers.
      `
    },
    {
      id: "custom-fabrication-standards",
      title: "Designing Machine Castings for Heavy Load Operations",
      category: "Engineering",
      date: "April 30, 2026",
      author: "Dr. Arjan Patel",
      readTime: "9 min read",
      summary: "Analyzing gray cast iron vs welded structural steel frames using Finite Element Analysis (FEA) for vibrational dampening.",
      isFeatured: false,
      content: `
When building heavy stamping presses or milling tables, structural rigidity is key. Any flex under load causes misalignments, tool damage, and safety hazards.

### Gray Cast Iron (GG25/GG30) vs Welded Steel
For years, heavy machine tools have relied on cast iron beds. Gray cast iron contains graphite flakes that absorb micro-vibrations far better than structural steel. This dampening is crucial during heavy interrupted cuts. However, casting requires custom molds and longer lead times.

Welded steel structures (A36 or similar structural grades) are faster to fabricate and allow for hollow sections that can be filled with polymer concrete for vibration dampening.

### Stress-Relieving Castings
Whether casting or welding, residual thermal stresses remain in the metal. If unaddressed, the frame will warp slowly over months, destroying alignment. We stress-relieve every Cobolt machine frame by heating it in a digital stress-relief kiln at 600°C for 12 hours, followed by slow, controlled cooling.
      `
    },
    {
      id: "industry-predictive-ai",
      title: "The Rise of Edge AI in Predictive Machinery Diagnostics",
      category: "Industry 4.0",
      date: "April 10, 2026",
      author: "Sarah Jenkins",
      readTime: "7 min read",
      summary: "How micro-controllers mounted directly on motor housings run light neural networks to predict bearing failures 100 hours in advance.",
      isFeatured: false,
      content: `
Industrial maintenance is shifting from reactive schedules to predictive models. By mounting vibration, temperature, and current sensors directly on mechanical joints, Edge AI chips can determine healthy baselines and predict anomalies before they arise.

### How Edge Diagnostics Work
Traditional setups send raw sensor telemetry to a remote cloud database for processing, which requires high bandwidth and introduces latency. Edge AI runs light, trained anomaly detection algorithms on local microprocessors mounted on the machine body.

### 100-Hour Safety Margins
These local edge modules monitor vibration frequencies. If the module detects high-frequency energy spikes in a bearing's defect frequency, it alerts maintenance teams, providing a 100-hour window to schedule a replacement during a planned shutdown.
      `
    }
  ];

  // Filtering logic
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find(a => a.isFeatured);
  const regularArticles = filteredArticles.filter(a => !a.isFeatured);

  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-[#F8FAFC] border-b border-[#E5E7EB]/60 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-[#DE1D3A] font-bold text-xs uppercase tracking-widest">
              Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111827] font-display leading-tight">
              Technical Journal & News
            </h1>
            <p className="text-[#6B7280] text-base md:text-lg max-w-2xl leading-relaxed">
              Read insights, guides, and engineering logs from our design specialists. Learn about machinery maintenance, IoT automation, and metalwork tips.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#FFFFFF] min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search and Filters Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-[#E5E7EB] pb-8">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 order-2 md:order-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-[#DE1D3A] text-white'
                      : 'bg-[#F8FAFC] text-[#6B7280] hover:bg-[#E5E7EB]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 order-1 md:order-2">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] text-sm text-[#111827] rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#DE1D3A]/50 focus:border-[#DE1D3A] transition-all duration-200"
              />
              <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-3.5" />
            </div>
          </div>

          {/* Featured Article Spot (only visible if search matches it and category is 'All' or matches) */}
          {selectedCategory === 'All' && !searchQuery && featuredArticle && (
            <div
              onClick={() => setActiveArticle(featuredArticle)}
              className="bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#DE1D3A]/20 hover:bg-[#FFFFFF] rounded-2xl p-6 md:p-10 mb-12 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer text-left group"
            >
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 bg-[#DE1D3A] text-white text-[10px] font-bold uppercase tracking-wider rounded">
                  Featured Article
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-display group-hover:text-[#DE1D3A] transition-colors duration-200 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
                  {featuredArticle.summary}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-xs text-[#6B7280] pt-2">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {featuredArticle.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredArticle.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredArticle.readTime}</span>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-end">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FFFFFF] border border-[#E5E7EB] group-hover:bg-[#DE1D3A] group-hover:text-white group-hover:border-[#DE1D3A] transition-all duration-300 shadow">
                  <ArrowRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center text-[#6B7280]">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-base font-semibold">No articles found matching your query.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-[#DE1D3A] font-semibold text-sm mt-2 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {regularArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#DE1D3A]/20 hover:shadow-xl rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-4">
                    <span className="text-[#DE1D3A] text-[10px] font-bold uppercase tracking-wider bg-[#FCE8EC] px-2.5 py-1 rounded">
                      {article.category}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#111827] group-hover:text-[#DE1D3A] transition-colors duration-205 mt-2">
                      {article.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                  
                  <div className="border-t border-[#E5E7EB] pt-6 mt-6 flex flex-wrap justify-between items-center gap-4 text-xs text-[#6B7280]">
                    <div className="flex gap-4">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <span className="inline-flex items-center text-[#DE1D3A] font-bold text-xs group-hover:text-[#B7152D] transition-colors">
                      Read Article <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F2937]/70 backdrop-blur-sm overflow-y-auto"
          >
            {/* Backdrop click to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveArticle(null)} />

            {/* Reader Card */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#FFFFFF] rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative z-10 border border-[#E5E7EB] flex flex-col text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 text-[#6B7280] hover:text-[#DE1D3A] rounded-lg bg-[#F8FAFC] hover:bg-[#E5E7EB] transition-colors z-10"
                aria-label="Close reader"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Reader Header */}
              <div className="p-6 md:p-10 border-b border-[#E5E7EB]">
                <span className="px-2.5 py-1 rounded bg-[#FCE8EC] text-[#DE1D3A] text-[10px] font-bold uppercase tracking-wider">
                  {activeArticle.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#111827] mt-3 mb-4 leading-tight">
                  {activeArticle.title}
                </h2>
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-6 text-xs text-[#6B7280] border-t border-[#E5E7EB] pt-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#FCE8EC] text-[#DE1D3A] font-bold flex items-center justify-center">
                      {activeArticle.author.charAt(0)}
                    </div>
                    <span className="font-semibold text-[#111827]">{activeArticle.author}</span>
                  </div>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {activeArticle.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {activeArticle.readTime}</span>
                </div>
              </div>

              {/* Reader Body */}
              <div className="p-6 md:p-10 overflow-y-auto text-[#6B7280] leading-relaxed font-sans text-sm sm:text-base space-y-6">
                {activeArticle.content.trim().split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h4 key={index} className="font-display font-bold text-lg sm:text-xl text-[#111827] pt-4">
                        {paragraph.replace('### ', '')}
                      </h4>
                    );
                  }
                  if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ') || paragraph.startsWith('5. ')) {
                    const match = paragraph.match(/^(\d\.\s)(.*?)(:\s)(.*)/);
                    if (match) {
                      return (
                        <p key={index} className="pl-4 border-l-2 border-[#DE1D3A] py-0.5">
                          <strong className="text-[#111827]">{match[2]}</strong>: {match[4]}
                        </p>
                      );
                    }
                  }
                  return (
                    <p key={index} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Reader Footer */}
              <div className="p-6 md:p-8 bg-[#F8FAFC] border-t border-[#E5E7EB] flex flex-wrap justify-between items-center gap-4">
                <span className="text-xs text-[#6B7280]">
                  Published by Cobolt Machineries Engineering Cell.
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 border border-[#E5E7EB] bg-[#FFFFFF] text-[#6B7280] hover:text-[#DE1D3A] text-xs font-semibold rounded-lg transition-colors"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
