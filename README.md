This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Project Documentation

### Tech Stack (Detail)

- Framework: `Next.js 16.1.6` (App Router)
- Library UI: `React 19.2.3`
- Language: `TypeScript`
- Styling: `Tailwind CSS v4` + custom design token di `app/globals.css`
- Animation: `framer-motion`
- Icons: `react-icons` dan `lucide-react`
- Utility class management: `class-variance-authority`, `clsx`, `tailwind-merge`
- UI System: `shadcn/ui` (CLI `3.8.5`) + `radix-ui` primitives
- Image optimization: `next/image`

### Komponen shadcn yang Dipakai

- `Button`
- `Card`
- `Input`
- `Textarea`
- `Separator`
- `Dialog`

Implementasi komponen shadcn berada di folder `components/ui` dan dipakai di section utama seperti `Header`, `Hero`, `Services`, `Testimonials`, `ProfessionalWork`, `WorkingWithMe`, `ContactUs`, dan `Faq`.

### Flow Singkat Implementasi

1. Menentukan design system (color, font-size, line-height, spacing) di `globals.css`.
2. Membangun halaman secara modular per section (Hero, About, Skills, Services, dst) menggunakan komponen React terpisah.
3. Menyesuaikan layout mobile dan desktop agar sesuai Figma.
4. Menambahkan interaksi utama: smooth scroll navigation, mobile menu, hover states, dan CTA actions.
5. Menambahkan animasi (scroll reveal, hover card, progress bar skills).
6. Menambahkan validasi form di Contact + feedback dialog.
7. Refactor elemen UI primitive ke komponen shadcn tanpa mengubah tampilan visual.

### Error Log Singkat + Solusi yang Dicoba

- Error: transisi scroll nav terasa kasar/tidak smooth.  
  Solusi: intercept klik anchor menu, hitung offset header, lalu pakai `window.scrollTo({ behavior: "smooth" })`.

- Error: layer timeline (garis antar bulatan) terputus saat ada gap antar card.  
  Solusi: pisahkan garis atas/bawah per node timeline dengan posisi `absolute`, tampilkan garis hanya di item tengah (bukan first/last).

- Error: progress bar skills terlihat bergerigi/garis diagonal terlalu tebal.  
  Solusi: tuning `repeating-linear-gradient` (alpha, jarak, ketebalan stroke) agar lebih halus.

- Error: image blend mode pada section hero/contact terlihat terlambat apply (sekilas berwarna dulu).  
  Solusi: paksa blend dan overlay langsung di initial render layer (container + image), serta atur ulang urutan layer.

- Error: muncul horizontal overflow (ada space kosong kanan) setelah penambahan animasi/wrapper.  
  Solusi: audit elemen absolute/transform yang melebar, rapikan lebar wrapper, dan batasi overflow horizontal di root container.

- Error: lint gagal dengan pesan `Cannot find module eslint-config-next/core-web-vitals`.  
  Solusi yang dicoba: sinkronkan versi `eslint` dan `eslint-config-next`, lalu reinstall dependencies sebelum menjalankan lint lagi.
