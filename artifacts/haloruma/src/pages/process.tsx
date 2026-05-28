import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';

const steps = [
  { num: '01', title: 'KONSULTASI', desc: 'Diskusi awal mengenai kebutuhan, visi, budget, dan timeline proyek.' },
  { num: '02', title: 'KONSEP', desc: 'Pengembangan ide besar, moodboard, dan perencanaan ruang dasar.' },
  { num: '03', title: 'DESAIN', desc: 'Pembuatan 3D visualisasi dan Detail Engineering Design (DED).' },
  { num: '04', title: 'PELAKSANAAN', desc: 'Proses konstruksi dan fit-out interior dengan pengawasan ketat.' },
  { num: '05', title: 'SERAH TERIMA', desc: 'Final inspection dan penyerahan kunci (Handover).' },
];

export default function Process() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen text-[#0D0D0D]">
      <SEO 
        title="Proses Kami" 
        description="Langkah demi langkah mewujudkan ruang impian Anda bersama Haloruma Prakarsa Karya."
      />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-light mb-8">
            Cara Kami <span className="font-accent italic text-[#C8963E]">Bekerja.</span>
          </h1>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Sebuah proses terstruktur yang dirancang untuk memastikan setiap visi tereksekusi dengan presisi, dari ide pertama hingga sentuhan akhir.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#C8963E]/30">
            {steps.map((step, index) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FAFAF8] bg-[#C8963E] text-white font-mono text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  {step.num}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white shadow-sm border border-gray-100 rounded-sm">
                  <h3 className="font-serif font-bold text-xl text-[#0D0D0D] mb-2">{step.title}</h3>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
