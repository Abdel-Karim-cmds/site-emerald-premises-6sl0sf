import React, { useState } from 'react';
import {
  ArrowUpRight,
  Phone,
  Mail,
  Compass,
  Maximize2,
  X,
  CheckCircle2,
  ChevronRight,
  Shield,
  Building2,
  SlidersHorizontal,
  ArrowRight
} from 'lucide-react';

const portfolioItems = [
  {
    id: '01',
    title: 'The Sovereign Sky Penthouse',
    category: 'Penthouse',
    specs: '6,450 sq. ft • 4 Suites • 360° Skyline Views',
    location: 'Upper Hill Promenade',
    price: 'Guide: $3.85M',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'Curated execution and advisory aligned with modern leadership requirements. Double-height floor-to-ceiling panoramic glass with private biometric elevator and cantilevered terrace infinity pool.'
  },
  {
    id: '02',
    title: 'The Terraced Verdana Residences',
    category: 'Apartments',
    specs: '3,200 sq. ft • 3 Suites • Private Courtyard',
    location: 'Westlands Ridge',
    price: 'Guide: $1.95M',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Curated execution and advisory aligned with modern leadership requirements. Biophilic stone-wrapped living modules tailored for high-profile privacy, ambient air filtering, and acoustic insulation.'
  },
  {
    id: '03',
    title: 'The Obsidian Pavilion Estate',
    category: 'Private Estate',
    specs: '10,800 sq. ft • 6 Suites • Acreage Reserve',
    location: 'Karen Valley',
    price: 'Guide: $6.20M',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Monumental architectural concrete and aged cedar blend into native woodland. Fully off-grid capability with intelligent geothermal management and concealed subterranean collector gallery.'
  }
];

const philosophies = [
  {
    number: 'I',
    title: 'Precision Structural Integrity',
    detail: 'Engineered beyond generational horizons using sustainably harvested basalt composite, high-thermal glass, and unyielding steel armature.'
  },
  {
    number: 'II',
    title: 'Uncompromised Confidentiality',
    detail: 'Autonomous discreet access lanes, vetted private concierges, and non-disclosure architectural blueprints reserved strictly for verified owners.'
  },
  {
    number: 'III',
    title: 'Adaptive Living Infrastructure',
    detail: 'Intuitive environmental automation synchronized to circadian rhythms, solar trajectory, and biometric wellness monitoring.'
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setIsModalOpen(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2800);
  };

  return (
    <div className="bg-[#faf8f5] text-[#1c1917] min-h-screen flex flex-col justify-between selection:bg-[#1c1917] selection:text-[#00ff88]">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md py-6 px-6 sm:px-12 border-b border-[#e7e5e4] flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-pulse inline-block shadow-[0_0_12px_#00ff88]"></span>
          <a href="#" className="text-2xl serif italic tracking-wide font-bold text-[#1c1917] hover:opacity-85 transition group">
            Emerald <span className="text-[#1c1917] font-semibold not-italic group-hover:text-[#5e5e5e] transition">Premises</span>
          </a>
        </div>

        <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.25em] text-[#78716c] font-medium">
          <a href="#portfolio" className="hover:text-[#1c1917] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#1c1917] after:transition-all">Portfolio</a>
          <a href="#expertise" className="hover:text-[#1c1917] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#1c1917] after:transition-all">Expertise</a>
          <a href="#dialogue" className="hover:text-[#1c1917] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#1c1917] after:transition-all">Dialogue</a>
        </nav>

        <div className="flex items-center gap-6">
          <a 
            href="tel:+254743796606" 
            className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-widest text-[#78716c] hover:text-[#1c1917] transition"
          >
            <Phone className="w-3.5 h-3.5 text-[#5e5e5e]" />
            <span>+254 743 796 606</span>
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs uppercase tracking-widest border-b border-[#1c1917] pb-1 hover:text-[#5e5e5e] hover:border-[#5e5e5e] transition duration-200 font-semibold"
          >
            Inquire
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24 flex-1 flex flex-col items-center text-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0ece5] border border-[#e2ddd5] mb-6 text-xs uppercase tracking-[0.3em] text-[#78716c]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]"></span>
          <span>real_estate • Private Practice</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-normal leading-[1.08] serif mb-8 max-w-4xl tracking-tight text-[#1c1917]">
          Building a home <br className="hidden sm:inline" />
          <span className="italic font-light text-[#5e5e5e]">for the future</span>
        </h1>

        <p className="text-base sm:text-lg text-[#57534e] font-light max-w-2xl mb-14 leading-relaxed">
          Dedicated to bespoke excellence and discerning standards. Experience perfection engineered for those who demand distinction.
        </p>

        {/* CTA ROW */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-[#1c1917] text-[#faf8f5] hover:bg-[#000000] text-xs uppercase tracking-[0.2em] font-medium transition duration-300 flex items-center justify-center gap-3 group border border-transparent shadow-md hover:border-[#00ff88]"
          >
            <span>Request Private Dossier</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition text-[#00ff88]" />
          </button>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#1c1917] hover:bg-[#f3eee8] text-xs uppercase tracking-[0.2em] font-medium transition duration-300 border border-[#d6d3d1] flex items-center justify-center gap-2"
          >
            <span>Explore Portfolio</span>
          </a>
        </div>

        {/* FILTER BAR */}
        <div id="portfolio" className="w-full pt-10 border-t border-[#e7e5e4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 text-left">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#a8a29e] block">Curated Index</span>
            <h2 className="text-2xl serif font-medium text-[#1c1917]">Distinguished Enclaves</h2>
          </div>

          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider">
            {['All', 'Penthouse', 'Apartments', 'Private Estate'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-4 py-2 border transition duration-200 ${
                  activeCategory === tab
                    ? 'bg-[#1c1917] text-white border-[#1c1917]'
                    : 'bg-white text-[#78716c] border-[#e7e5e4] hover:border-[#a8a29e] hover:text-[#1c1917]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3-COLUMN FEATURE CARDS (Preserving Approved Template Structure + Rich Polish) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-24">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProperty(item)}
              className="group cursor-pointer p-8 bg-white border border-[#e7e5e4] shadow-sm hover:shadow-xl hover:border-[#1c1917]/20 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle accent hover indicator */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="serif italic text-lg text-[#5e5e5e]">
                    Feature № {item.id}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#a8a29e] bg-[#faf8f5] px-2.5 py-1 border border-[#e7e5e4]">
                    {item.category}
                  </span>
                </div>

                <div className="relative overflow-hidden mb-6 aspect-[16/10] bg-[#f5f5f4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-105 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white p-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 tracking-tight group-hover:text-[#1c1917] flex items-center justify-between">
                  <span>{item.category}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#a8a29e] group-hover:text-[#00ff88] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </h3>
                
                <p className="text-xs text-[#78716c] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f5f5f4] flex justify-between items-center text-[11px] text-[#5e5e5e]">
                <span className="font-serif italic">{item.location}</span>
                <span className="font-medium text-[#1c1917]">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* EDITORIAL EXPERTISE SECTION */}
        <section id="expertise" className="w-full text-left py-16 border-t border-[#e7e5e4]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-[#a8a29e] mb-3 block">The Manifesto</span>
              <h2 className="text-3xl sm:text-4xl serif font-light text-[#1c1917] leading-snug mb-6">
                Architecture crafted for eternal relevance.
              </h2>
              <p className="text-sm text-[#78716c] leading-relaxed mb-6">
                Emerald Premises does not merely construct volumes; we curate generational landmarks. Every detail is calibrated against light, spatial acoustic balance, and environmental autonomy.
              </p>
              <div className="p-4 border-l-2 border-[#00ff88] bg-[#f6fbf7] text-xs text-[#1c1917] font-serif italic">
                "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {philosophies.map((phil) => (
                <div key={phil.number} className="bg-white p-6 border border-[#e7e5e4] shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="serif text-2xl italic font-bold text-[#5e5e5e] mb-4 block">
                      {phil.number}.
                    </span>
                    <h4 className="text-sm font-semibold tracking-wide uppercase mb-3 text-[#1c1917]">
                      {phil.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#78716c] leading-relaxed mt-4">
                    {phil.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRIVATE DIALOGUE / INQUIRY BANNER */}
        <section id="dialogue" className="w-full mt-16 p-10 sm:p-14 bg-white border border-[#e7e5e4] text-left relative overflow-hidden shadow-sm">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#00ff88]/10 blur-3xl pointer-events-none"></div>
          
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#5e5e5e] mb-2 block">Direct Consultation</span>
            <h3 className="text-3xl sm:text-4xl serif font-normal text-[#1c1917] mb-4">
              Initiate a discreet dialogue with our senior partners.
            </h3>
            <p className="text-sm text-[#78716c] leading-relaxed mb-8">
              Whether acquiring an established sanctuary or commissioning an off-market custom build, our partners stand ready to assist your estate office.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 bg-[#1c1917] text-white text-xs uppercase tracking-widest hover:bg-[#5e5e5e] transition duration-200"
              >
                Schedule Briefing
              </button>
              <a
                href="tel:+254743796606"
                className="text-xs uppercase tracking-wider text-[#1c1917] font-medium border-b border-[#1c1917] pb-1 hover:text-[#5e5e5e] hover:border-[#5e5e5e] transition flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#00ff88]" />
                <span>+254 743 796 606</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-8 px-6 sm:px-12 border-t border-[#e7e5e4] flex flex-col sm:flex-row justify-between items-center text-xs text-[#a8a29e] gap-4 bg-[#faf8f5]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
          <span className="font-medium text-[#78716c]">Emerald Premises</span>
          <span>•</span>
          <a href="tel:+254743796606" className="hover:text-[#1c1917] transition">+254743796606</a>
        </div>
        <div className="serif italic tracking-wide text-[#78716c]">
          Crafted for Distinction
        </div>
      </footer>

      {/* DETAIL MODAL */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white max-w-2xl w-full border border-[#e7e5e4] shadow-2xl relative max-h-[90vh] overflow-y-auto p-6 sm:p-10 text-left">
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-6 right-6 p-2 text-[#78716c] hover:text-[#1c1917] hover:bg-[#faf8f5] transition rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="serif italic text-sm text-[#5e5e5e] mb-2 block">
              Feature № {selectedProperty.id} • {selectedProperty.category}
            </span>
            <h2 className="text-2xl sm:text-3xl serif font-bold text-[#1c1917] mb-4">
              {selectedProperty.title}
            </h2>
            <img
              src={selectedProperty.image}
              alt={selectedProperty.title}
              className="w-full aspect-[16/9] object-cover mb-6 border border-[#e7e5e4]"
            />

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#e7e5e4] mb-6 text-xs">
              <div>
                <span className="text-[#a8a29e] uppercase tracking-wider block">Specifications</span>
                <span className="font-medium text-[#1c1917]">{selectedProperty.specs}</span>
              </div>
              <div>
                <span className="text-[#a8a29e] uppercase tracking-wider block">Acquisition Guide</span>
                <span className="font-medium text-[#1c1917]">{selectedProperty.price}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed mb-8">
              {selectedProperty.description}
            </p>

            <div className="flex justify-between items-center">
              <button
                onClick={() => {
                  setSelectedProperty(null);
                  setIsModalOpen(true);
                }}
                className="px-6 py-3 bg-[#1c1917] text-white text-xs uppercase tracking-widest hover:bg-[#5e5e5e] transition duration-200"
              >
                Inquire on this Property
              </button>
              <button
                onClick={() => setSelectedProperty(null)}
                className="text-xs uppercase tracking-wider text-[#78716c] hover:text-[#1c1917] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* INQUIRY / CONTACT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white max-w-lg w-full border border-[#e7e5e4] shadow-2xl relative p-6 sm:p-10 text-left">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#78716c] hover:text-[#1c1917] hover:bg-[#faf8f5] transition rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#00ff88] font-bold block mb-1">
                Private Acquisition Office
              </span>
              <h2 className="text-2xl serif font-normal text-[#1c1917]">
                Register Your Requirement
              </h2>
              <p className="text-xs text-[#78716c] mt-1">
                Direct advisory line: <a href="tel:+254743796606" className="font-medium text-[#1c1917] underline">+254 743 796 606</a>
              </p>
            </div>

            {contactSuccess ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#00ff88] mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl serif font-medium text-[#1c1917] mb-2">Dossier Request Received</h4>
                <p className="text-xs text-[#78716c]">A senior private client advisor will connect with you securely within 4 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#78716c] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Lord / Ambassador / Dr. / M."
                    className="w-full px-3 py-2.5 text-xs bg-[#faf8f5] border border-[#e7e5e4] focus:outline-none focus:border-[#1c1917] text-[#1c1917]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#78716c] mb-1.5">
                      Confidential Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="principal@estate.com"
                      className="w-full px-3 py-2.5 text-xs bg-[#faf8f5] border border-[#e7e5e4] focus:outline-none focus:border-[#1c1917] text-[#1c1917]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#78716c] mb-1.5">
                      Direct Telephone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 ..."
                      className="w-full px-3 py-2.5 text-xs bg-[#faf8f5] border border-[#e7e5e4] focus:outline-none focus:border-[#1c1917] text-[#1c1917]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#78716c] mb-1.5">
                    Parameters / Interest
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="E.g., Penthouse requirement with helipad access and high privacy..."
                    className="w-full px-3 py-2.5 text-xs bg-[#faf8f5] border border-[#e7e5e4] focus:outline-none focus:border-[#1c1917] text-[#1c1917]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1c1917] hover:bg-[#000000] text-white text-xs uppercase tracking-[0.2em] font-medium transition duration-200 mt-2 flex items-center justify-center gap-2"
                >
                  <span>Transmit Confidential Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00ff88]" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}