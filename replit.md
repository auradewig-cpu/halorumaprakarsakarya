# HALORUMA PRAKARSA KARYA

Website company profile untuk CV Haloruma Prakarsa Karya — studio arsitektur, desain interior, dan kontraktor profesional di Surabaya.

## Run & Operate

- `pnpm --filter @workspace/haloruma run dev` — jalankan website (port 20628)
- `pnpm --filter @workspace/api-server run dev` — jalankan API server (port 8080)
- `pnpm run typecheck` — full typecheck semua packages
- `pnpm run build` — typecheck + build semua packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS
- Routing: wouter
- Animasi: Framer Motion
- SEO: react-helmet-async
- Carousel: embla-carousel-react
- Icons: lucide-react

## Where things live

- Frontend: `artifacts/haloruma/src/`
  - Pages: `src/pages/` (home, about, services, portfolio, process, contact)
  - Components: `src/components/layout/` (Navbar, Footer, WhatsAppButton), `src/components/SEO.tsx`
  - Images: `artifacts/haloruma/public/images/` (AI-generated)
  - SEO files: `artifacts/haloruma/public/robots.txt`, `sitemap.xml`
- API: `artifacts/api-server/src/` (health check only)
- API spec: `lib/api-spec/openapi.yaml`

## Product

Website company profile 6 halaman yang fully responsive:
- **Home** — Hero, stats, layanan, portofolio, proses, testimonial, CTA
- **Tentang Kami** — Story, visi/misi, tim, values
- **Layanan** — Arsitektur, Interior, Kontraktor + FAQ
- **Portofolio** — Grid terfilter dengan detail proyek
- **Proses** — 6 langkah kerja dengan scroll storytelling
- **Kontak** — Form + info + Google Maps embed
- WhatsApp floating bubble (bottom-right, green, pulse animation)

## Brand

- Warna utama: Copper Gold #C8963E, Obsidian Black #0D0D0D, Warm Ivory #F4EFE6
- Font: Cormorant Garamond (display), Syne (nav), Lato (body), Playfair Display (accent), DM Mono (stats)
- WhatsApp: wa.me/6281234565694
- Alamat: Jl. Keputih Tegal Bakti I No.51, Keputih, Sukolilo, Surabaya 60111

## Architecture decisions

- Presentation-first (no backend) — pure static React SPA
- react-helmet-async untuk SEO meta tags per halaman
- Framer Motion untuk semua animasi dan transisi
- wouter untuk routing ringan (tanpa React Router overhead)
- Semua gambar AI-generated disimpan di `public/images/`

## User preferences

- Website dalam Bahasa Indonesia
- WhatsApp bubble harus ada di semua halaman
- Responsive untuk mobile, tablet, dan desktop
- SEO-friendly dengan meta tags dan JSON-LD structured data

## Gotchas

- wouter v3: `<Link>` sudah render sebagai `<a>` — jangan tambahkan `<a>` di dalam `<Link>` (menyebabkan nested anchor warning)
- Google Fonts `@import url()` HARUS di baris pertama index.css sebelum `@import "tailwindcss"`
- `react-helmet-async` ada di dependencies (bukan catalog), install via `pnpm add` di artifact haloruma

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
