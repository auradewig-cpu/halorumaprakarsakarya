import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/tentang-kami', label: 'Tentang' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/portofolio', label: 'Portofolio' },
  { href: '/proses', label: 'Proses' },
  { href: '/kontak', label: 'Kontak' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className={`text-xl md:text-2xl font-display font-semibold tracking-wider text-white`}
          >
            ◈ HALORUMA <span className="hidden md:inline">PRAKARSA KARYA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-sans uppercase tracking-widest relative group ${
                  isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 left-1/2 w-0 h-0.5 bg-[#C8963E] transition-all duration-300 group-hover:w-full group-hover:left-0 ${location === link.href ? 'w-full left-0' : ''}`} />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://wa.me/6281234565694"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8963E] px-6 py-2.5 text-sm font-sans font-medium text-white hover:bg-[#B05B3B] transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0D0D0D] flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button
                className="text-white"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-display text-white hover:text-[#C8963E] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                className="mt-8"
              >
                <a
                  href="https://wa.me/6281234565694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8963E] px-8 py-3 text-lg font-sans font-medium text-white hover:bg-[#B05B3B] transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Konsultasi Gratis</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
