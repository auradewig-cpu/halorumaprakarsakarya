import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '@/components/SEO';

const projects = [
  { id: 1, title: 'Tropical Brutalist House', category: 'Arsitektur', type: 'Residensial', img: '/images/portfolio-1.png' },
  { id: 2, title: 'Modern Office Space', category: 'Interior', type: 'Komersial', img: '/images/portfolio-2.png' },
  { id: 3, title: 'Marble Luxury Kitchen', category: 'Interior', type: 'Residensial', img: '/images/portfolio-3.png' },
  { id: 4, title: 'Terracotta Boutique Cafe', category: 'Interior', type: 'Hospitality', img: '/images/portfolio-4.png' },
  { id: 5, title: 'Concrete Villa', category: 'Arsitektur', type: 'Residensial', img: '/images/portfolio-1.png' },
  { id: 6, title: 'Executive Boardroom', category: 'Interior', type: 'Komersial', img: '/images/portfolio-2.png' },
];

const filters = ['Semua', 'Arsitektur', 'Interior', 'Kontraktor', 'Residensial', 'Komersial', 'Hospitality'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filteredProjects = projects.filter(p => 
    activeFilter === 'Semua' || p.category === activeFilter || p.type === activeFilter
  );

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white">
      <SEO 
        title="Portofolio" 
        description="Jelajahi karya arsitektur dan interior pilihan dari Haloruma Prakarsa Karya."
      />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-light mb-12">
            Karya <span className="font-accent italic text-[#C8963E]">Pilihan.</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-sans text-sm tracking-wider uppercase transition-colors ${
                  activeFilter === filter 
                    ? 'bg-[#C8963E] text-white' 
                    : 'border border-white/20 text-gray-400 hover:text-white hover:border-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group relative aspect-square overflow-hidden cursor-pointer"
                >
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center">
                    <p className="text-[#C8963E] font-mono text-xs tracking-widest uppercase mb-3">
                      {project.category} · {project.type}
                    </p>
                    <h3 className="text-2xl font-serif text-white">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
