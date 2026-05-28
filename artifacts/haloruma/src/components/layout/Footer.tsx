import { Link } from 'wouter';
import { Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold tracking-wider">◈ HALORUMA</h3>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
              Studio arsitektur dan interior yang merancang ruang yang bercerita. Mewujudkan visi Anda menjadi realitas spasial yang menginspirasi.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#C8963E] hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#C8963E] hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#C8963E] hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-6">
            <h4 className="font-sans font-semibold tracking-widest text-sm uppercase">Layanan</h4>
            <ul className="space-y-3 font-sans text-gray-400 text-sm">
              <li><Link href="/layanan" className="hover:text-[#C8963E] transition-colors">Arsitektur</Link></li>
              <li><Link href="/layanan" className="hover:text-[#C8963E] transition-colors">Desain Interior</Link></li>
              <li><Link href="/layanan" className="hover:text-[#C8963E] transition-colors">Kontraktor</Link></li>
              <li><Link href="/layanan" className="hover:text-[#C8963E] transition-colors">Renovasi</Link></li>
              <li><Link href="/layanan" className="hover:text-[#C8963E] transition-colors">Konsultasi Desain</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-6">
            <h4 className="font-sans font-semibold tracking-widest text-sm uppercase">Perusahaan</h4>
            <ul className="space-y-3 font-sans text-gray-400 text-sm">
              <li><Link href="/tentang-kami" className="hover:text-[#C8963E] transition-colors">Tentang Kami</Link></li>
              <li><Link href="/portofolio" className="hover:text-[#C8963E] transition-colors">Portofolio</Link></li>
              <li><Link href="/proses" className="hover:text-[#C8963E] transition-colors">Cara Kerja</Link></li>
              <li><Link href="/kontak" className="hover:text-[#C8963E] transition-colors">Karir</Link></li>
              <li><Link href="/kontak" className="hover:text-[#C8963E] transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-6">
            <h4 className="font-sans font-semibold tracking-widest text-sm uppercase">Hubungi Kami</h4>
            <ul className="space-y-4 font-sans text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C8963E] shrink-0" />
                <span>Jl. Keputih Tegal Bakti I No.51, Keputih, Sukolilo, Surabaya 60111</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C8963E] shrink-0" />
                <a href="tel:081234565694" className="hover:text-[#C8963E] transition-colors">0812-3456-5694</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C8963E] shrink-0" />
                <a href="mailto:hello@haloruma.com" className="hover:text-[#C8963E] transition-colors">hello@haloruma.com</a>
              </li>
            </ul>
            <a 
              href="https://wa.me/6281234565694" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 rounded border border-[#C8963E] text-[#C8963E] px-6 py-2 text-sm font-sans font-medium hover:bg-[#C8963E] hover:text-white transition-all duration-300"
            >
              Chat WhatsApp
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CV Haloruma Prakarsa Karya. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Syarat &amp; Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
