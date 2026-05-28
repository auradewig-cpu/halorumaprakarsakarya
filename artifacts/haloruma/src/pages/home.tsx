import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'wouter';
import { ArrowRight, Quote } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback } from 'react';

const testimonials = [
  { text: "Haloruma benar-benar menerjemahkan apa yang ada di kepala kami menjadi kenyataan. Detailnya luar biasa.", author: "Bpk. Hendra", role: "Klien Residensial" },
  { text: "Profesional, on-time, dan kualitas pengerjaannya melebihi ekspektasi. Sangat direkomendasikan.", author: "Ibu Amanda", role: "Owner Cafe" },
  { text: "Pendekatan desain mereka sangat unik. Kantor kami kini menjadi tempat yang sangat nyaman untuk bekerja.", author: "Bpk. Budi", role: "Klien Komersial" }
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, scrollNext]);

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white">
      <SEO 
        title="Beranda" 
        description="Studio arsitektur dan desain interior premium di Surabaya. Merancang ruang yang bercerita."
      />

      {/* HERO SECTION */}
      <section className="relative h-[100dvh] flex items-center pt-20">
        <div className="absolute inset-0 z-0 flex">
          <div className="w-full md:w-[55%] bg-[#0D0D0D]"></div>
          <div className="hidden md:block md:w-[45%] relative">
            <img 
              src="/images/hero.png" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-12 -left-16 bg-[#F4EFE6] text-[#0D0D0D] p-6 shadow-2xl z-10 hidden lg:block"
            >
              <p className="font-mono text-4xl font-bold text-[#C8963E]">50+</p>
              <p className="font-sans font-bold tracking-widest text-sm mt-1 uppercase">Proyek Selesai</p>
            </motion.div>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#C8963E] font-sans tracking-[0.2em] text-sm uppercase">Surabaya · Est. 2020</span>
            </motion.div>

            <motion.h1 
              className="mt-6 text-5xl md:text-7xl lg:text-8xl font-display font-light leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Merancang<br />Ruang yang<br /><span className="font-accent italic text-[#F4EFE6]">Bercerita.</span>
            </motion.h1>

            <motion.p 
              className="mt-8 text-lg text-gray-400 font-sans max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Studio multidisiplin yang memadukan kekuatan arsitektur brutalis, kehangatan estetika, dan presisi tinggi untuk menciptakan ruang bersoul.
            </motion.p>

            <motion.div 
              className="mt-12 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/portofolio" className="inline-flex items-center justify-center gap-2 bg-[#C8963E] text-white px-8 py-4 font-sans font-medium uppercase tracking-wider text-sm hover:bg-[#B05B3B] transition-colors">
                Lihat Portofolio <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/kontak" className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 font-sans font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-[#0D0D0D] transition-colors">
                Hubungi Kami
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#1C1C1C] py-16 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-[#C8963E]/30">
            <div className="text-center px-4">
              <p className="font-mono text-4xl md:text-5xl text-[#F4EFE6]">50+</p>
              <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mt-2">Proyek Selesai</p>
            </div>
            <div className="text-center px-4">
              <p className="font-mono text-4xl md:text-5xl text-[#F4EFE6]">8+</p>
              <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mt-2">Tahun Pengalaman</p>
            </div>
            <div className="text-center px-4">
              <p className="font-mono text-4xl md:text-5xl text-[#F4EFE6]">100%</p>
              <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mt-2">Klien Puas</p>
            </div>
            <div className="text-center px-4">
              <p className="font-mono text-4xl md:text-5xl text-[#F4EFE6]">15+</p>
              <p className="font-sans text-xs text-gray-400 uppercase tracking-widest mt-2">Kota Dikerjakan</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-0 flex flex-col md:flex-row bg-[#FAFAF8] text-[#0D0D0D]">
        <div className="md:w-1/2 aspect-square md:aspect-auto md:h-auto relative">
          <img src="/images/about-team.png" alt="Team" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <span className="text-[#B05B3B] font-sans tracking-[0.2em] text-sm uppercase">Tentang Haloruma</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold mb-6">Kami merancang dengan jiwa, membangun dengan presisi.</h2>
          <p className="font-sans text-gray-600 leading-relaxed mb-8">
            Lebih dari sekadar biro desain, kami adalah partner kolaboratif yang percaya bahwa ruang yang baik mampu meningkatkan kualitas hidup. Pendekatan multidisiplin kami memastikan setiap ide tereksekusi sempurna hingga menjadi realitas spasial.
          </p>
          <div>
            <Link href="/tentang-kami" className="inline-flex items-center gap-2 text-[#0D0D0D] font-sans text-sm uppercase tracking-wider hover:text-[#C8963E] transition-colors font-semibold border-b border-[#0D0D0D] hover:border-[#C8963E] pb-1">
              Cerita Kami <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F4EFE6] text-[#0D0D0D] py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#B05B3B] font-sans tracking-[0.2em] text-sm uppercase">Apa Yang Kami Lakukan</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">Tiga Pilar Keahlian Kami</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Arsitektur */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] mb-6 overflow-hidden">
                <img src="/images/service-arsitektur.png" alt="Arsitektur" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">ARSITEKTUR</h3>
              <div className="flex gap-2 mb-6">
                <span className="text-[10px] font-sans px-2 py-1 bg-[#4A5E4E]/10 text-[#4A5E4E] uppercase tracking-wider">Residensial</span>
                <span className="text-[10px] font-sans px-2 py-1 bg-[#4A5E4E]/10 text-[#4A5E4E] uppercase tracking-wider">Komersial</span>
              </div>
              <p className="font-sans text-[#6E6C68] text-sm leading-relaxed mb-6">
                Perancangan bangunan dari nol dengan pendekatan kontekstual dan fungsional yang merespon lingkungan sekitar.
              </p>
            </motion.div>

            {/* Interior - Featured */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-[#0D0D0D] text-white p-8 shadow-xl lg:scale-105 z-10 transition-all duration-300"
            >
              <div className="aspect-[4/3] mb-6 overflow-hidden">
                <img src="/images/service-interior.png" alt="Interior" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-[#F4EFE6]">INTERIOR</h3>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="text-[10px] font-sans px-2 py-1 border border-white/20 text-white uppercase tracking-wider">Residensial</span>
                <span className="text-[10px] font-sans px-2 py-1 border border-white/20 text-white uppercase tracking-wider">Komersial</span>
                <span className="text-[10px] font-sans px-2 py-1 border border-white/20 text-white uppercase tracking-wider">Hospitality</span>
              </div>
              <p className="font-sans text-gray-400 text-sm leading-relaxed mb-6">
                Menciptakan harmoni antara manusia dan ruang di dalamnya melalui pemilihan material, pencahayaan, dan detail yang presisi.
              </p>
            </motion.div>

            {/* Kontraktor */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] mb-6 overflow-hidden">
                <img src="/images/service-kontraktor.png" alt="Kontraktor" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">KONTRAKTOR</h3>
              <div className="flex gap-2 mb-6">
                <span className="text-[10px] font-sans px-2 py-1 bg-[#4A5E4E]/10 text-[#4A5E4E] uppercase tracking-wider">Pelaksanaan</span>
                <span className="text-[10px] font-sans px-2 py-1 bg-[#4A5E4E]/10 text-[#4A5E4E] uppercase tracking-wider">Manajemen</span>
              </div>
              <p className="font-sans text-[#6E6C68] text-sm leading-relaxed mb-6">
                Eksekusi desain ke dunia nyata dengan standar konstruksi terbaik, menjaga kualitas, waktu, dan anggaran.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="bg-[#0D0D0D] py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#C8963E] font-sans tracking-[0.2em] text-sm uppercase">Karya Pilihan</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">Portofolio yang<br/>Berbicara Sendiri</h2>
            </div>
            <Link href="/portofolio" className="inline-flex items-center gap-2 text-white font-sans text-sm uppercase tracking-wider hover:text-[#C8963E] transition-colors border-b border-white hover:border-[#C8963E] pb-1">
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            <div className="group relative aspect-square overflow-hidden cursor-pointer">
              <img src="/images/portfolio-1.png" alt="House" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-[#C8963E] font-mono text-sm mb-2">ARSITEKTUR</p>
                <h3 className="text-2xl font-serif text-white">Tropical Brutalist House</h3>
              </div>
            </div>
            <div className="group relative aspect-square overflow-hidden cursor-pointer">
              <img src="/images/portfolio-2.png" alt="Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-[#C8963E] font-mono text-sm mb-2">INTERIOR</p>
                <h3 className="text-2xl font-serif text-white">Modern Office Space</h3>
              </div>
            </div>
            <div className="group relative aspect-square overflow-hidden cursor-pointer">
              <img src="/images/portfolio-3.png" alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-[#C8963E] font-mono text-sm mb-2">INTERIOR</p>
                <h3 className="text-2xl font-serif text-white">Marble Luxury Kitchen</h3>
              </div>
            </div>
            <div className="group relative aspect-square overflow-hidden cursor-pointer">
              <img src="/images/portfolio-4.png" alt="Cafe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-[#C8963E] font-mono text-sm mb-2">HOSPITALITY</p>
                <h3 className="text-2xl font-serif text-white">Terracotta Boutique Cafe</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="py-24 bg-[#1C1C1C] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">Cara Kami Bekerja</h2>
            <p className="font-sans text-gray-400 max-w-xl mx-auto">Dari konsep abstrak hingga sentuhan akhir fisik yang presisi.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-[#C8963E]/30 -z-0 -translate-y-1/2 border-dashed border-b border-[#C8963E]/50"></div>
            
            {["KONSULTASI", "KONSEP", "DESAIN", "PELAKSANAAN", "SERAH TERIMA"].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center mb-8 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-[#0D0D0D] border-2 border-[#C8963E] flex items-center justify-center font-mono text-sm mb-4 text-[#C8963E]">
                  0{idx + 1}
                </div>
                <h4 className="font-serif font-bold text-center tracking-wider">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#FAFAF8] text-[#0D0D0D]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Quote className="w-16 h-16 mx-auto text-[#C8963E] opacity-20 mb-8" />
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 px-4">
                  <p className="text-2xl md:text-3xl font-accent italic text-[#0D0D0D] leading-relaxed mb-8">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-serif font-bold text-lg">{t.author}</p>
                    <p className="font-sans text-sm text-[#C8963E] tracking-widest uppercase mt-1">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#0D0D0D] border-t border-white/10 py-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8 text-[#FAFAF8]">Siap Mewujudkan Ruang Impian Anda?</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://wa.me/6281234565694" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#C8963E] text-white px-8 py-4 font-sans font-medium uppercase tracking-wider text-sm hover:bg-[#B05B3B] transition-colors">
              Chat WhatsApp
            </a>
            <Link href="/kontak" className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 font-sans font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-[#0D0D0D] transition-colors">
              Kirim Pesan
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
