import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281234565694"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5c] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#0D0D0D] text-white text-sm font-sans px-3 py-1.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Chat WhatsApp
      </span>
      <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-75"></span>
    </a>
  );
}
