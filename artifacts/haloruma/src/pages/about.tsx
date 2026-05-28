import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'wouter';

export default function About() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen text-[#0D0D0D]">
      <SEO 
        title="Tentang Kami" 
        description="Mengenal lebih dekat CV Haloruma Prakarsa Karya. Visi, misi, dan tim di balik karya arsitektur kami."
      />

      <section className="relative h-[60vh] flex items-center pt-20">
        <img src="/images/portfolio-2.png" alt="Office Space" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0D0D0D]/60"></div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-light text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cerita <span className="font-accent italic text-[#C8963E]">Kami.</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-gray-300 font-sans max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Didirikan pada tahun 2020 di Surabaya, Haloruma Prakarsa Karya lahir dari passion mendalam terhadap bagaimana manusia berinteraksi dengan ruang.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-display font-semibold">Visi & Misi</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-[#C8963E]">Visi</h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Menjadi studio arsitektur dan interior terkemuka di Indonesia yang diakui karena inovasi desain, kualitas pelaksanaan, dan kemampuan menciptakan ruang yang memiliki 'jiwa'.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-[#C8963E]">Misi</h3>
                <ul className="font-sans text-gray-600 leading-relaxed space-y-2 list-disc pl-5">
                  <li>Menghadirkan solusi desain yang tidak hanya estetik tapi juga fungsional.</li>
                  <li>Menjaga standar kualitas tertinggi dalam setiap tahap pelaksanaan konstruksi.</li>
                  <li>Membangun kolaborasi yang transparan dan jujur dengan setiap klien.</li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square relative"
            >
              <img src="/images/about-team.png" alt="Architect" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#1C1C1C] py-24 text-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-display font-semibold">Nilai Inti Kami</h2>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Integritas", desc: "Transparansi dan kejujuran adalah fondasi setiap hubungan kami." },
            { title: "Inovasi", desc: "Selalu mencari solusi baru yang cerdas dan relevan." },
            { title: "Kolaborasi", desc: "Bekerja sama dengan klien untuk mewujudkan visi mereka." },
            { title: "Kualitas", desc: "Presisi dan standar tinggi dalam setiap detail pengerjaan." }
          ].map((val, i) => (
            <motion.div 
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 p-8 hover:border-[#C8963E] transition-colors"
            >
              <h3 className="text-xl font-serif text-[#C8963E] mb-4">{val.title}</h3>
              <p className="font-sans text-gray-400 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[#F4EFE6]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-semibold text-[#0D0D0D]">Tim Kami</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-6 shadow-sm group"
              >
                <div className="aspect-square bg-gray-200 mb-6 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[#0D0D0D]/10 group-hover:bg-transparent transition-colors"></div>
                   <img src={`/images/about-team.png`} alt={`Team ${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0D0D0D]">Nama Anggota {i + 1}</h3>
                <p className="font-sans text-[#C8963E] text-sm mt-1 uppercase tracking-wider">Arsitek Utama</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
