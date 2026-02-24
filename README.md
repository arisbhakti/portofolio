## Project Documentation

> [!NOTE]
> Dokumentasi ini merangkum arsitektur teknis, alur implementasi, struktur komponen, dan daftar kendala yang sudah ditangani selama pengembangan.

### Quick Overview

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.34.3-0055FF)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Enabled-111111)

### Tech Stack (Detail)

| Layer           | Tools                                                | Catatan                                  |
| --------------- | ---------------------------------------------------- | ---------------------------------------- |
| Framework       | `Next.js 16.1.6`                                     | App Router                               |
| UI Library      | `React 19.2.3`                                       | Component-driven architecture            |
| Language        | `TypeScript`                                         | Type safety untuk UI + state             |
| Styling         | `Tailwind CSS v4`                                    | Custom design token di `app/globals.css` |
| Motion          | `framer-motion`                                      | Scroll reveal, hover, transition         |
| Icon            | `react-icons`, `lucide-react`                        | Icon utility dan sosial                  |
| UI System       | `shadcn/ui`, `radix-ui`                              | Primitive components yang bisa dikustom  |
| Utilities       | `class-variance-authority`, `clsx`, `tailwind-merge` | Variants + merge class                   |
| Asset Rendering | `next/image`                                         | Optimasi image Next.js                   |

### Komponen shadcn yang Dipakai

| Komponen    | Status    | Area Penggunaan                                                         |
| ----------- | --------- | ----------------------------------------------------------------------- |
| `Button`    | Digunakan | `Header`, `Hero`, `Testimonials`, `ContactUs`, `WorkingWithMe`, dialogs |
| `Card`      | Digunakan | `Hero`, `Services`, `Portofolio`, `ProfessionalWork`, `Testimonials`    |
| `Input`     | Digunakan | `ContactUs` form field                                                  |
| `Textarea`  | Digunakan | `ContactUs` message field                                               |
| `Separator` | Digunakan | `Faq`, `Services`, `WorkingWithMe`, `ProfessionalWork`                  |
| `Dialog`    | Digunakan | `SuccessDialog`, `ErrorDialog`                                          |

> [!TIP]
> Seluruh refactor ke shadcn dilakukan dengan prinsip: **struktur boleh berubah, tampilan visual tidak boleh berubah**.

### Struktur Halaman di `app/page.tsx` (12 Komponen)

| Urutan | Komponen           | Fungsi Utama                                                |
| ------ | ------------------ | ----------------------------------------------------------- |
| 1      | `Header`           | Branding owner, nav desktop, mobile full-screen menu        |
| 2      | `Hero`             | Headline utama, CTA `HIRE ME`, visual portrait, rating card |
| 3      | `Services`         | Daftar layanan berbasis array data                          |
| 4      | `AboutMe`          | Profil singkat dan value proposition                        |
| 5      | `Skills`           | Icon tech stack + progress bar animatif                     |
| 6      | `WorkingWithMe`    | Perbandingan “Working With Me” vs “Another Talent”          |
| 7      | `ProfessionalWork` | Timeline pengalaman kerja zig-zag                           |
| 8      | `Portofolio`       | Grid project terpilih                                       |
| 9      | `Testimonials`     | Testimoni client + navigasi prev/next                       |
| 10     | `Faq`              | FAQ dengan layout desktop/mobile berbeda                    |
| 11     | `ContactUs`        | Form contact, validasi, social links, feedback dialog       |
| 12     | `Footer`           | Penutup halaman (copyright)                                 |

> [!IMPORTANT]
> Selain `Header`, seluruh section dibungkus `AnimatedSection` berbasis `framer-motion` untuk efek reveal on scroll.

### Flow Implementasi (klik icon arrow untuk melihat detail nya)

<details>
<summary><strong>Phase 1 — Foundation & Design System (1–8)</strong></summary>

1. Mengumpulkan referensi Figma per section (hero, skills, timeline, testimonials, faq, contact).
2. Menyusun token warna primer/netral/base ke `globals.css`.
3. Menyusun token tipografi: `font-size` dan `line-height` custom.
4. Menetapkan font utama `Red Hat Display`.
5. Menambahkan utility class global seperti `common-padding`.
6. Menyusun struktur halaman berbasis komponen per section.
7. Menetapkan rule responsive mobile-first lalu override desktop.
8. Menyesuaikan border header agar hanya di sisi bawah.

</details>

<details>
<summary><strong>Phase 2 — Hero, Header, Services, Skills (9–19)</strong></summary>

9. Menambahkan efek drop shadow CTA `HIRE ME` sesuai parameter Figma.
10. Menyetel gradient hero (arah bawah ke atas) + dark fade.
11. Mengatur blend mode image hero ke `luminosity`.
12. Menyesuaikan split-color wajah (half dark, half green overlay).
13. Menata z-index garis vertikal agar lewat header tapi di belakang tombol.
14. Menambahkan state header saat scroll (desktop non-transparent menjadi hitam).
15. Merapikan `Services` agar data source berbentuk array dan render looping.
16. Merapikan `Skills` icon layout agar gap horizontal/vertikal sesuai Figma.
17. Membuat data progress bar berbasis array object + render dinamis.
18. Menambahkan pattern diagonal dalam progress bar dengan opacity halus.
19. Menambahkan animasi progress bar dari 0 saat section masuk viewport.

</details>

<details>
<summary><strong>Phase 3 — Timeline, Portfolio, Testimonials, FAQ (20–28)</strong></summary>

20. Menyusun `ProfessionalWork` berbasis timeline data array.
21. Menambahkan konektor garis antar node timeline (desktop + mobile).
22. Menjaga pola card zig-zag kiri/kanan untuk timeline desktop.
23. Menyusun `Testimonials` berbasis pagination client-side.
24. Menetapkan jumlah card berbeda: mobile 3, desktop 4.
25. Menambahkan kontrol prev/next dan state disabled sesuai batas data.
26. Menambah data testimonial tambahan (Facebook, Google, Netflix, Amazon).
27. Menata FAQ desktop dengan garis horizontal antar baris + garis vertikal tengah.
28. Menjaga implementasi FAQ mobile tetap terpisah agar tidak berubah.

</details>

<details>
<summary><strong>Phase 4 — Interaction, Motion, Contact, UI Polish (29–39)</strong></summary>

29. Menambahkan mobile full-screen menu pada header dengan animasi.
30. Menambahkan smooth scroll untuk semua menu section.
31. Menambahkan behavior klik `owner-div` menuju section `#home`.
32. Menambahkan animasi scroll reveal berbeda antar komponen halaman.
33. Menambahkan hover animation pada card (portfolio, timeline, testimonial).
34. Menambahkan hover animation pada tombol navigasi testimonial.
35. Menambahkan hover animation pada icons skill dan progress row.
36. Menambahkan pulse animation pada indikator `Available for Work`.
37. Menambahkan validasi form `Contact Us` + state error per field.
38. Menambahkan feedback dialog sukses kirim pesan.
39. Menambahkan hover interaction icon social media di `Contact Us`.

</details>

<details>
<summary><strong>Phase 5 — shadcn Refactor (40)</strong></summary>

40. Refactor elemen UI ke komponen `shadcn` (`Button`, `Card`, `Input`, `Textarea`, `Separator`, `Dialog`) tanpa mengubah CSS visual existing.

</details>

### Error Log Singkat + Solusi yang Dicoba

<details>
<summary><strong>Navigation & Layout Issues</strong></summary>

- Error: transisi scroll nav terasa kasar/tidak smooth.  
  Solusi: intercept klik anchor menu, hitung offset header, lalu pakai `window.scrollTo({ behavior: "smooth" })`.

- Error: klik `owner-div` tidak mengarah ke `#home`.  
  Solusi: hubungkan handler nav yang sama dengan link owner di header.

- Error: mobile menu belum full-screen dan belum punya transisi.  
  Solusi: gunakan overlay fixed `inset-0`, kontrol state open/close, dan animasi opacity/translate.

- Error: muncul horizontal overflow (ada space kosong kanan) setelah penambahan animasi/wrapper.  
  Solusi: audit elemen absolute/transform yang melebar, rapikan lebar wrapper, dan batasi overflow horizontal di root container.

</details>

<details>
<summary><strong>Visual Fidelity vs Figma</strong></summary>

- Error: garis vertikal menabrak tombol `HIRE ME` dan foto hero.  
  Solusi: atur stacking context/z-index per layer (header, line, button, image).

- Error: hasil gradient hero terlalu gelap dibanding Figma.  
  Solusi: tuning opacity stop gradient + level overlay hitam.

- Error: arah gradient hero tidak sesuai (harus dari bawah ke atas).  
  Solusi: ubah arah gradient dan urutan stop color.

- Error: blend mode image tidak sesuai (harus luminosity).  
  Solusi: gunakan `mix-blend-luminosity` di elemen image.

- Error: split wajah hijau kurang terlihat/terlalu kuat.  
  Solusi: tuning layer overlay hijau (posisi 50%, opacity, dan background split).

- Error: FAQ desktop belum punya garis vertikal/horizontal sesuai Figma.  
  Solusi: pakai layout dua kolom + separator vertikal tengah + separator horizontal antar row.

</details>

<details>
<summary><strong>Skills & Timeline Details</strong></summary>

- Error: jarak icon skills terlalu renggang saat pakai grid.  
  Solusi: ganti ke `flex-wrap` dengan `gap-6` agar jarak lebih presisi.

- Error: pattern garis diagonal progress terlalu tebal.  
  Solusi: kecilkan alpha, sesuaikan step gradient, dan rapikan ketebalan garis.

- Error: progress bar skills terlihat bergerigi.  
  Solusi: tuning `repeating-linear-gradient` agar lebih halus dan mendekati anti-aliasing.

- Error: animasi progress bar terlambat saat section `Skills` terlihat.  
  Solusi: turunkan threshold trigger viewport (`useInView`) agar animasi lebih cepat.

- Error: timeline desktop ada garis di atas node pertama.  
  Solusi: render garis atas hanya jika node bukan item pertama.

- Error: timeline desktop tidak ada garis di bawah node terakhir.  
  Solusi: render garis bawah hanya jika node bukan item terakhir.

- Error: garis timeline mobile putus saat card diberi gap antar item.  
  Solusi: buat connector per node dengan segment atas/bawah absolut agar tetap tersambung.

- Error: garis timeline desktop tampak bengkok/tidak lurus.  
  Solusi: samakan titik center garis terhadap center bulatan di seluruh row.

- Error: setelah menambah item timeline, posisi card tidak zig-zag benar.  
  Solusi: gunakan parity index (`index % 2`) untuk penentuan kiri/kanan card desktop.

</details>

<details>
<summary><strong>Testimonials, Contact, Tooling</strong></summary>

- Error: transisi next/previous testimonial terasa kasar.  
  Solusi: tambah `AnimatePresence` + slide/fade animation per pergantian halaman card.

- Error: state tombol testimonial (active vs disabled) kurang jelas.  
  Solusi: bedakan warna icon/text (`primary-200` vs `neutral-800`) dan state interaksi.

- Error: image blend mode pada section hero/contact terlihat terlambat apply (sekilas berwarna dulu).  
  Solusi: paksa blend dan overlay sejak initial paint melalui urutan layer.

- Error: form `Contact Us` mobile sempat menutupi area footer saat semua field error.  
  Solusi: perbaiki alur layout tinggi container dan distribusi spacing saat error message muncul.

- Error: tiga green boxes di `Contact Us` hilang saat validasi aktif.  
  Solusi: atur ulang anchor position + z-index agar tetap terlihat di belakang tombol.

- Error: favicon/icon tab browser tidak muncul sesuai metadata baru.  
  Solusi: periksa path icon metadata, validasi file di `public`, lalu hard refresh cache browser.

- Error: lint gagal dengan pesan `Cannot find module eslint-config-next/core-web-vitals`.  
  Solusi yang dicoba: sinkronkan versi `eslint` dan `eslint-config-next`, lalu reinstall dependencies.

</details>

---

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
