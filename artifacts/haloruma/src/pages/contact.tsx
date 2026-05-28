import { SEO } from '@/components/SEO';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="bg-[#FAFAF8] min-h-screen text-[#0D0D0D]">
      <SEO 
        title="Kontak" 
        description="Hubungi Haloruma Prakarsa Karya untuk konsultasi proyek Anda."
      />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-light">
              Mari <span className="font-accent italic text-[#C8963E]">Berdiskusi.</span>
            </h1>
            <p className="mt-6 text-gray-600 font-sans max-w-2xl mx-auto">
              Ceritakan visi Anda, dan mari kita mulai perjalanan mewujudkan ruang yang Anda impikan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Form */}
            <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold mb-8">Kirim Pesan</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-sm text-gray-600 uppercase tracking-wider">Nama Lengkap</label>
                    <input type="text" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#C8963E] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-sm text-gray-600 uppercase tracking-wider">Nomor WhatsApp</label>
                    <input type="tel" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#C8963E] transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm text-gray-600 uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#C8963E] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm text-gray-600 uppercase tracking-wider">Layanan yang Dibutuhkan</label>
                  <select className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#C8963E] transition-colors">
                    <option>Arsitektur</option>
                    <option>Desain Interior</option>
                    <option>Kontraktor</option>
                    <option>Konsultasi Desain</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm text-gray-600 uppercase tracking-wider">Pesan / Ceritakan Proyek Anda</label>
                  <textarea rows={4} className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-[#C8963E] transition-colors resize-none"></textarea>
                </div>
                <Button className="w-full bg-[#C8963E] hover:bg-[#B05B3B] text-white py-6 text-sm uppercase tracking-wider font-sans rounded-none">
                  Kirim Pesan
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1C1C1C] text-[#C8963E] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2">Kantor Studio</h3>
                    <p className="font-sans text-gray-600 leading-relaxed">
                      Jl. Keputih Tegal Bakti I No.51,<br />
                      Keputih, Sukolilo,<br />
                      Surabaya 60111
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1C1C1C] text-[#C8963E] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2">Kontak</h3>
                    <p className="font-sans text-gray-600">0812-3456-5694</p>
                    <p className="font-sans text-gray-600">hello@haloruma.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1C1C1C] text-[#C8963E] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2">Jam Operasional</h3>
                    <p className="font-sans text-gray-600">Senin - Jumat: 09.00 - 17.00</p>
                    <p className="font-sans text-gray-600">Sabtu: Dengan Perjanjian</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-[4/3] w-full bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.653424683072!2d112.8028751!3d-7.2929947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa71c26b2b63%3A0x608e92fec2e31505!2sJl.%20Keputih%20Tegal%20Bakti%20I%20No.51%2C%20Keputih%2C%20Kec.%20Sukolilo%2C%20Surabaya%2C%20Jawa%20Timur%2060111!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Haloruma"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
