/* =====================================================
   ISI SEMUA KONTEN KAMU DI FILE INI SAJA.
   Ganti teks di dalam tanda kutip "..." lalu simpan.
   ===================================================== */
const DATA = {
  name: "Sri Bintang Muksin",                       // tampil besar di hero
  role: "INFORMATIKA",                  // profesi
  photo: "images/bintang.png",                
  location: "Based in Indonesia",
  intro: "Saya lulusan Informatika yang memiliki pengalaman dalam mengembangkan website dan aplikasi web, serta membangun model klasifikasi citra menggunakan Convolutional Neural Network (CNN). Saya tertarik untuk terus mengembangkan kemampuan dan menerapkan teknologi dalam menyelesaikan berbagai permasalahan.",
 tagline: "Terus belajar dan mengembangkan solusi melalui teknologi.",

points: [
  "Pengembangan Website dan Aplikasi Web",
  "Pemahaman Dasar Teknologi Informasi",
  "Kemampuan Beradaptasi dan Belajar"
],

  about: {
    text: "Saya adalah lulusan Program Studi Informatika dari Universitas Mercu Buana Yogyakarta dengan minat pada pengembangan teknologi dan solusi digital.\n\nSelama kuliah, saya mengerjakan berbagai proyek, terutama pengembangan website dan aplikasi web. Saya juga pernah melakukan penelitian klasifikasi citra menggunakan CNN sebagai bagian dari skripsi.\n\nSaya senang belajar melalui praktik langsung, mencoba hal baru, dan mengembangkan kemampuan secara bertahap. Saya terbuka untuk mengeksplorasi berbagai bidang teknologi informasi serta ingin terus meningkatkan keterampilan melalui pengalaman dan proyek nyata.",
    stats: []
  },

  education: [
  {
    title: "Universitas Mercu Buana Yogyakarta",
    sub: "S1 Informatika",
    year: "2022–2026",
    gpa: "3,36/4,00"
  },
  {
    title: "Coding Camp 2025",
    sub: "Front-End & Back-End Development · Dicoding Indonesia, didukung DBS Foundation",
    year: "Februari–Juli 2025"
  },
  {
    title: "Coding Camp",
    sub: "Intro to Software Engineering · RevoU",
    year: "12–16 Oktober 2026"
  }
],

// Pengalaman kerja dan organisasi
experience: [
  {
    title: "Liaison Officer (LO)",
    place: "PKKMB Fakultas Teknologi Informasi",
    year: "September 2023",
    desc: "Membantu koordinasi dan penyampaian informasi kepada peserta selama kegiatan PKKMB."
  },
  {
    title: "Barista, Waitress & Kasir",
    place: "Laksmi Coffee and Eatery · Yogyakarta",
    year: "November–Desember 2022",
    desc: "Melayani pelanggan, mengoperasikan kasir, membantu penyajian minuman, dan mendukung operasional kafe."
  }
],

  skills: {
  technical: [
    { name: "HTML",       icon: "devicon-html5-plain colored" },
    { name: "CSS",        icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "MySQL",      icon: "devicon-mysql-plain colored" },
    { name: "Python",     icon: "devicon-python-plain colored" },
    { name: "GitHub",     icon: "devicon-github-original" },
    { name: "Netlify",    icon: "devicon-netlify-plain colored" }
  ],
  soft: [
    "Problem Solving",
    "Adaptability",
    "Teamwork",
    "Continuous Learning"
  ]
},

  projects: [
  {
    title: "Story App — Cerita Kita",
    type: "Dicoding · Story App",
    image: "images/projek1.png",
    link: "https://ceritaa-kitaa.netlify.app/"
  },
  {
    title: "Starlight Cafe",
    type: "Cafe Website",
    image: "images/projek2.png",
    link: "https://starlight-cafe.bintangsri787.workers.dev"
  },
  {
    title: "Starlight Cafe Admin",
    type: "Admin Dashboard",
    image: "images/projek3.png",
    link: "https://starlight-cafe.bintangsri787.workers.dev/admin/"
  },
  {
    title: "Note App",
    type: "Notes Application",
    image: "images/projek4.png",
    link: "https://tourmaline-youtiao-c1d823.netlify.app"
  },
  {
    title: "To-Do List Life Dashboard",
    type: "Coding Camp · Productivity Web App",
    image: "images/projek5.png",
    link: "https://sribintang17.github.io/CodingCamp-12October26-sribintang17/"
  },
  {
    title: "TravelNesia",
    type: "Capstone Project · Travel Website",
    image: "images/projek6.png",
    link: "https://travelnesia.netlify.app/"
  }
],

  certificates: [
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft / Certiport",
    year: "2026",
    file: "certificates/Azure AI Fundamentals.pdf"
  },
  {
    title: "Coding Camp — Intro to Software Engineering",
    issuer: "RevoU",
    year: "2026",
    file: "certificates/CCSE_bintangsri787@gmail.com_CCSE-121026-01-1-00069.pdf"
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    year: "2025",
    file: "certificates/sertifikat_course_123_3282793_060325084933.pdf"
  },
  {
    title: "Belajar Fundamental Front-End Web Development",
    issuer: "Dicoding Indonesia",
    year: "2025",
    file: "certificates/sertifikat_course_163_3282793_010525111503.pdf"
  },
  {
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    year: "2025",
    file: "certificates/sertifikat_course_237_3282793_060325152035.pdf"
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2025",
    file: "certificates/sertifikat_course_256_3282793_060325135811.pdf"
  },
  {
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    year: "2025",
    file: "certificates/sertifikat_course_302_3282793_010325141318.pdf"
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2025",
    file: "certificates/sertifikat_course_315_3282793_070325105220.pdf"
  },
  {
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    year: "2025",
    file: "certificates/sertifikat_course_317_3282793_280225214234.pdf"
  },
  {
    title: "Financial Literacy 101",
    issuer: "Dicoding Indonesia · Coding Camp powered by DBS Foundation",
    year: "2025",
    file: "certificates/sertifikat_course_852_3282793_010525111636.pdf"
  },
  {
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2025",
    file: "certificates/sertifikat_course_belajar back end pemula dengan js.pdf"
  }
],

  contact: {
  text: "Sedang terbuka untuk peluang dan kolaborasi baru.",
  list: [
    {
      label: "Email",
      value: "bintangsri787@gmail.com",
      href: "mailto:bintangsri787@gmail.com",
      icon: "fa-solid fa-envelope"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/sri-bintang-muksin",
      href: "https://linkedin.com/in/sri-bintang-muksin",
      icon: "fa-brands fa-linkedin-in"
    },
    {
      label: "GitHub",
      value: "github.com/sribintang17",
      href: "https://github.com/sribintang17",
      icon: "fa-brands fa-github"
    },
    {
      label: "WhatsApp",
      value: "+6282332193962",
      href: "https://wa.me/6282332193962",
      icon: "fa-brands fa-whatsapp"
    }
  ]
}
};
