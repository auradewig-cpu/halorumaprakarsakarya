import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'wouter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Services() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen text-[#0D0D0D]">
      <SEO 
        title="Layanan" 
        description="Layanan arsitektur, desain interior, dan kontraktor dari Haloruma Prakarsa Karya."
      />

      <section className="relative h-[60vh] flex items-center pt-20">
        <img src="/images/service-arsitektur.png" alt="Services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0D0D0D]/70"></div>
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-light text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Layanan <span className="font-accent italic text-[#C8963E]">Kami.</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-gray-300 font-sans max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Solusi desain menyeluruh dari konsep hingga pelaksanaan konstruksi yang presisi.
          </motion.p>
        </div>
      </section>

      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 space-y-32">
          
          {/* Arsitektur */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <h2 className="text-4xl font-display font-semibold">Arsitektur</h2>
              <p className="font-sans text-gray-600 leading-relaxed text-lg">
                Pendekatan perancangan bangunan yang kontekstual, merespon iklim tropis, dan mengedepankan fungsionalitas tanpa mengorbankan estetika monumental.
              </p>
              <ul className="space-y-3 font-sans text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8963E] rounded-full"></span> Desain Konseptual
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8963E] rounded-full"></span> Gambar Kerja (DED)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8963E] rounded-full"></span> 3D Visualisasi
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 aspect-[4/3] w-full"
            >
              <img src="/images/service-arsitektur.png" alt="Arsitektur" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Interior */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <h2 className="text-4xl font-display font-semibold">Desain Interior</h2>
              <p className="font-sans text-gray-600 leading-relaxed text-lg">
                Menerjemahkan karakter klien ke dalam harmoni material, pencahayaan, dan proporsi untuk menciptakan ruang yang nyaman dan personal.
              </p>
              <ul className="space-y-3 font-sans text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8963E] rounded-full"></span> Perencanaan Ruang
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8963E] rounded-full"></span> Pemilihan Material
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8963E] rounded-full"></span> Desain Custom Furniture
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 aspect-[4/3] w-full"
            >
              <img src="/images/service-interior.png" alt="Interior" className="w-full h-full object-cover shadow-2xl" />
            </motion.div>
          </div>

          {/* Kontraktor */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <h2 className="text-4xl font-display font-semibold">Kontraktor</h2>
              <p className="font-sans text-gray-600 leading-relaxed text-lg">
                Ekseskusi rancangan dengan akurasi tinggi, manajemen proyek yang profesional, dan pengawasan kualitas ketat di setiap fase pembangunan.
              </p>
              <ul className="space-y-3 font-sans text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8963E] rounded-full"></span> Pembangunan Sipil
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8963E] rounded-full"></span> Fit-out Interior
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C8963E] rounded-full"></span> Manajemen Proyek (RAB & Timeline)
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 aspect-[4/3] w-full"
            >
              <img src="/images/service-kontraktor.png" alt="Kontraktor" className="w-full h-full object-cover" />
            </motion.div>
          </div>

        </div>
      </section>

      <section className="bg-[#1C1C1C] py-24 text-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-semibold">Pertanyaan Umum (FAQ)</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/10">
              <AccordionTrigger className="font-sans hover:text-[#C8963E]">Apakah melayani proyek di luar Surabaya?</AccordionTrigger>
              <AccordionContent className="text-gray-400 font-sans leading-relaxed">
                Ya, kami melayani proyek di berbagai kota di Indonesia. Kami memiliki tim yang siap untuk dislokasi sesuai kebutuhan proyek.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-white/10">
              <AccordionTrigger className="font-sans hover:text-[#C8963E]">Berapa lama proses desain arsitektur?</AccordionTrigger>
              <AccordionContent className="text-gray-400 font-sans leading-relaxed">
                Durasi proses desain bervariasi bergantung pada skala dan kompleksitas proyek. Umumnya memakan waktu 2 hingga 4 bulan mulai dari konsep awal hingga gambar kerja (DED) selesai.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-white/10">
              <AccordionTrigger className="font-sans hover:text-[#C8963E]">Apakah klien bisa menggunakan desain dari arsitek lain untuk dibangun oleh Haloruma?</AccordionTrigger>
              <AccordionContent className="text-gray-400 font-sans leading-relaxed">
                Tentu. Kami dapat berperan murni sebagai kontraktor pelaksana (Design-Bid-Build) dengan mengeksekusi gambar kerja dari arsitek yang telah Anda tunjuk.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

    </div>
  );
}
