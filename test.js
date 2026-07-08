const escHtmlGs = (str) => str;
const SITE_URL = 'https://faminisbarokah.my.id';
const LOGO_URL = 'https://faminisbarokah.my.id/logofaminis.png';

// ── FALLBACK DATA ─────────────────────────────────────────────
const FALLBACK_BLOGS = [
  {
    id: 'B001', kategori: 'Tips Dagang',
    judul: 'Tips Memilih Supplier Daster, Mukena, dan Gamis yang Terpercaya',
    penulis: 'Tim Faminis Barokah', tanggal: '2 Juli 2026', menit_baca: 5,
    gambar: 'logofaminis.png',
    ringkasan: 'Memilih supplier daster, supplier mukena, dan supplier gamis yang terpercaya menjadi langkah penting bagi siapa saja yang ingin menjalankan bisnis fashion muslim maupun pakaian rumahan.',
    isi: '<p>Memilih supplier daster, supplier mukena, dan supplier gamis yang terpercaya...</p>',
    aktif: true, keywords: 'supplier daster, supplier mukena, supplier gamis'
  },
  {
    id: 'B002', kategori: 'Supplier',
    judul: 'Supplier Fashion Kota Surakarta',
    penulis: 'Tim Faminis Barokah', tanggal: '2 Juli 2026', menit_baca: 7,
    gambar: 'logofaminis.png',
    ringkasan: 'Faminis Barokah, Supplier Mukena, Daster, Gamis, dan Setelan Berkualitas untuk Bisnis Fashion Muslim',
    isi: '<h1>Faminis Barokah, Supplier Mukena, Daster, Gamis, dan Setelan Berkualitas</h1>...',
    aktif: true, keywords: 'supplier daster, supplier mukena, supplier gamis'
  },
  {
    id: 'b1', kategori: 'Tips Busana',
    judul: 'Panduan Memilih Gamis Wolfis Premium yang Tepat untuk Tubuhmu',
    penulis: 'Tim Faminis Barokah', tanggal: '10 Juni 2025', menit_baca: 5,
    gambar: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&w=800&q=70',
    ringkasan: 'Gamis wolfis kini menjadi favorit banyak muslimah. Temukan panduan memilih gamis wolfis premium yang tepat untuk tubuhmu dari Faminis Barokah Solo.',
    isi: '<p>Gamis wolfis premium kini menjadi pilihan utama bagi muslimah yang mendambakan penampilan anggun sekaligus nyaman. Dalam <strong>panduan memilih gamis wolfis premium</strong> ini, kita akan membahas cara memilih potongan yang tepat. Untuk produk terbaik, Anda bisa mendapatkannya langsung dari <a href="index.html"><strong>supplier gamis di Solo (Surakarta)</strong></a>, Faminis Barokah.</p>',
    aktif: true, keywords: 'supplier daster, supplier mukena, supplier gamis'
  },
  {
    id: 'b2', kategori: 'Panduan Ibadah',
    judul: 'Memilih Mukena yang Nyaman untuk Ibadah Sholat Sehari-hari',
    penulis: 'Tim Faminis Barokah', tanggal: '22 Mei 2025', menit_baca: 4,
    gambar: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=70',
    ringkasan: 'Mukena yang nyaman membuat ibadah semakin khusyuk. Tips memilih mukena yang nyaman untuk sholat sehari-hari dari Faminis Barokah Surakarta.',
    isi: '<p>Dalam <strong>memilih mukena yang nyaman untuk sholat</strong> sehari-hari, bahan katun rayon yang sejuk adalah kuncinya. Faminis Barokah, selaku <a href="index.html"><strong>supplier mukena Solo/Surakarta</strong></a>, menghadirkan pilihan mukena adem dan nyaman untuk menyempurnakan ibadah Anda.</p>',
    aktif: true, keywords: 'supplier daster, supplier mukena, supplier gamis'
  },
  {
    id: 'b3', kategori: 'Inspirasi Gaya',
    judul: '5 Inspirasi Outfit Muslimah Elegan untuk Lebaran dan Hari Istimewa',
    penulis: 'Tim Faminis Barokah', tanggal: '5 April 2025', menit_baca: 6,
    gambar: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=70',
    ringkasan: 'Mencari inspirasi outfit muslimah lebaran? Simak tips padu padan busana muslimah premium dan elegan dari Faminis Barokah Solo/Surakarta.',
    isi: '<p>Mencari <strong>inspirasi outfit muslimah lebaran</strong> yang elegan? Paduan gamis syar\'i dan mukena indah adalah pilihan tepat. Tenang saja, semua koleksi tersedia di Faminis Barokah, <a href="index.html"><strong>supplier daster &amp; mukena kota Solo (Surakarta)</strong></a>.</p>',
    aktif: true, keywords: 'supplier daster, supplier mukena, supplier gamis'
  }
];

const FALLBACK_PRODUCTS = [
  {
    id: "P001", kategori: "Mukena", nama: "Mukena Dewasa Premium Kawira",
    deskripsi: "Ibadah lebih khusyuk dengan mukena berpotongan super jumbo. Bahan Rayon Premium.",
    harga: 150000, harga_grosir: 135000, gambar: "https://lh3.googleusercontent.com/d/16Nx_5WwDy1XqAqKOsvUf6dZvLN7HCpnB",
    warna: ["Mocca:20", "Putih:30"], ukuran: ["All Size"], stok: 50, bahan: "Rayon Premium"
  },
  {
    id: "P002", kategori: "Mukena", nama: "Mukena Dewasa Premium Anyara",
    deskripsi: "Ibadah lebih khusyuk dengan mukena berpotongan super jumbo. Bahan Rayon Premium.",
    harga: 150000, harga_grosir: 135000, gambar: "https://lh3.googleusercontent.com/d/13zllHOLohYxpn7gQslkchjTBRXRAQdoV",
    warna: ["Navy:15", "Hitam:25", "Maroon:10"], ukuran: ["All Size"], stok: 50, bahan: "Rayon Premium"
  },
  {
    id: "P014", kategori: "Daster", nama: "Daster batik jumbo Raras",
    deskripsi: "Pilihan tepat untuk santai di rumah dengan ruang gerak yang super lega.",
    harga: 45000, harga_grosir: 40000, gambar: "https://lh3.googleusercontent.com/d/14PuXK76D89Y0ddbcaTX7NAhf1UT3L5u-",
    warna: ["Biru:10", "Merah:5", "Sage:20", "Orange:0", "Ungu:15"], ukuran: ["All Size"], stok: 50, bahan: "Rayon Bali"
  },
  {
    id: "P026", kategori: "Gamis", nama: "Gamis Wanita Dewasa Arunika",
    deskripsi: "Gamis wanita dewasa berkualitas premium, sejuk dan nyaman dipakai.",
    harga: 95000, harga_grosir: 85000, gambar: "https://lh3.googleusercontent.com/d/1G4EanbkOwIopSnVPaZyx5VHfhR47jg-K",
    warna: ["G1:10", "G2:15", "G3:8", "G4:12", "G5:5"], ukuran: ["All Size"], stok: 50, bahan: "Rayon Bali"
  }
];

const FALLBACK_PROMOS = [
  { id: "PR01", judul: "Promo Tiktok Live", gambar: "https://lh3.googleusercontent.com/d/1c6-XTkkWWtE8GySWYVPpKcXC6plAc08S", link: "https://tiktok.com/@faminis_barokah" },
  { id: "PR02", judul: "Grup Reseller Faminis", gambar: "https://lh3.googleusercontent.com/d/1_8962E-ca8iphDO7lVYIgHhnDoEGc1F3", link: "https://chat.whatsapp.com/DUm7GTpGYBJFSGyAC3uO2x" }
];

const FALLBACK_CATEGORIES = ["Gamis", "Mukena", "Daster", "Setelan"];

const FALLBACK_BANNER = {
  badge: "EDISI BARU",
  judul: "Gaya Anggun & Syar'i Menawan",
  subjudul: "Diskon s/d 50% Koleksi Gamis & Mukena",
  tombol_teks: "Lihat Promo"
};

// ── SPREADSHEET READER FUNCTIONS ──────────────────────────────
function sheetToObjects(sheetNames) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) return null;
    let sheet = null;
    for (let i = 0; i < sheetNames.length; i++) {
      sheet = ss.getSheetByName(sheetNames[i]);
      if (sheet) break;
    }
    if (!sheet) return null;
    
    const values = sheet.getDataRange().getValues();
    if (values.length <= 1) return [];
    
    const headers = values[0].map(h => String(h).trim().toLowerCase().replace(/[\s\-]+/g, '_'));
    const objects = [];
    
    for (let i = 1; i < values.length; i++) {
      const row = values[i];
      if (!row.some(val => val !== '')) continue; // skip empty rows
      
      const obj = {};
      headers.forEach((header, colIdx) => {
        if (!header) return;
        let val = row[colIdx];
        
        // Convert types based on header names
        if (header === 'harga' || header === 'menit_baca' || header === 'harga_grosir') {
          val = Number(val) || 0;
        } else if (header === 'stok') {
          const strVal = String(val).trim();
          if (strVal.includes(',') || strVal.includes(':')) {
            val = strVal;
          } else {
            val = Number(strVal) || 0;
          }
        } else if (header === 'aktif' || header === 'is_active') {
          val = (String(val).toLowerCase() === 'true' || val === true || val === 1 || String(val).toLowerCase() === 'y');
        } else {
          val = String(val).trim();
        }
        obj[header] = val;
      });
      objects.push(obj);
    }
    return objects;
  } catch (e) {
    if (typeof Logger !== 'undefined') {
      const sheetNameStr = (sheetNames && typeof sheetNames.join === 'function') ? sheetNames.join("/") : String(sheetNames);
      Logger.log("Error reading sheet " + sheetNameStr + ": " + e.toString());
    }
    return null;
  }
}

function getProductData() {
  const data = sheetToObjects(["Produk", "Products"]);
  if (data && data.length > 0) return data;
  return FALLBACK_PRODUCTS;
}

function getBlogData() {
  const data = sheetToObjects(["Blog", "Blogs", "Artikel"]);
  if (data && data.length > 0) {
    return data.filter(item => item.aktif !== false);
  }
  return FALLBACK_BLOGS;
}

function getPromoData() {
  const data = sheetToObjects(["Promo", "Promos", "Promosi"]);
  if (data && data.length > 0) return data;
  return FALLBACK_PROMOS;
}

function getCategoriesData() {
  const data = sheetToObjects(["Kategori", "Categories"]);
  if (data && data.length > 0) {
    return data.map(item => item.nama_kategori || item.nama || item.kategori || item.name || Object.values(item)[0]).filter(Boolean);
  }
  return FALLBACK_CATEGORIES;
}

function getBannerData() {
  const data = sheetToObjects(["Banner", "Banners"]);
  if (data && data.length > 0) return data[0];
  return FALLBACK_BANNER;
}

function generateSlug(text) {
  if (!text) return '';
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           
    .replace(/[^\w\-]+/g, '')       
    .replace(/\-\-+/g, '-')         
    .replace(/^-+/, '')             
    .replace(/-+$/, '');            
}

function renderArtikelPage(id) {
  const blogs = getBlogData();
  // Find by ID or by Slug
  const artikel = blogs.find(b => String(b.id).toLowerCase() === String(id).toLowerCase() || generateSlug(b.judul) === String(id).toLowerCase());

  if (!artikel) {
    return HtmlService.createHtmlOutput("<html><body><h1>Artikel Tidak Ditemukan</h1><p>Kembali ke <a href='https://faminisbarokah.my.id/artikel.html'>Semua Artikel</a></p></body></html>")
      .setTitle("Artikel Tidak Ditemukan — Faminis Barokah")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  const slug = generateSlug(artikel.judul);
  const artikelUrl  = 'https://faminisbarokah.my.id/artikel/' + slug;
  const listUrl     = 'https://faminisbarokah.my.id/artikel.html';
  const tokoUrl     = SITE_URL;

  // Artikel terkait (kategori sama, bukan artikel ini)
  const related = blogs
    .filter(b => b.id !== artikel.id && b.kategori === artikel.kategori)
    .slice(0, 3);
  if (related.length < 3) {
    blogs.filter(b => b.id !== artikel.id && !related.find(r => r.id === b.id))
      .slice(0, 3 - related.length)
      .forEach(b => related.push(b));
  }

  const keywordsMeta = artikel.keywords
    ? artikel.keywords + ', supplier gamis solo, supplier mukena solo, faminis barokah, busana muslim solo'
    : 'supplier gamis solo, supplier mukena solo, supplier daster solo, faminis barokah, busana muslim solo, pasar klewer';

  const relatedHTML = related.map(r => `
    <a href="https://faminisbarokah.my.id/artikel/${generateSlug(r.judul)}" class="rel-card">
      <div class="rel-img">
        <img src="${escHtmlGs(r.gambar)}" alt="${escHtmlGs(r.judul)}" loading="lazy"
          onerror="this.src='https://placehold.co/400x225/EDD9C4/1C1612?text=Faminis'">
        <span class="rel-cat">${escHtmlGs(r.kategori)}</span>
      </div>
      <div class="rel-body">
        <p class="rel-title">${escHtmlGs(r.judul)}</p>
        <span class="rel-meta">${r.menit_baca} menit baca</span>
      </div>
    </a>`).join('');

  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": artikel.judul,
    "description": artikel.ringkasan,
    "image": artikel.gambar || LOGO_URL,
    "datePublished": artikel.tanggal,
    "dateModified": artikel.tanggal,
    "author": { "@type": "Organization", "name": artikel.penulis || "Tim Faminis Barokah" },
    "publisher": {
      "@type": "Organization",
      "name": "Faminis Barokah",
      "logo": { "@type": "ImageObject", "url": LOGO_URL }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": artikelUrl },
    "keywords": keywordsMeta
  });

  const html = `<!DOCTYPE html>
<html lang="id" prefix="og: https://ogp.me/ns#">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script>
    // Redirect normal visitors from Apps Script web app domain to custom domain
    window.location.replace("https://faminisbarokah.my.id/artikel/${slug}");
  </script>
  <title>${escHtmlGs(artikel.judul)} — Faminis Barokah</title>
  <meta name="description" content="${escHtmlGs(artikel.ringkasan)} | Faminis Barokah — Supplier gamis, mukena &amp; daster premium di Solo.">
  <meta name="keywords" content="${escHtmlGs(keywordsMeta)}">
  <meta name="author" content="Faminis Barokah">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="theme-color" content="#1C1612">
  <link rel="icon" type="image/svg+xml" href="${SITE_URL}/favicon.svg">
  <link rel="canonical" href="${escHtmlGs(artikelUrl)}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${escHtmlGs(artikelUrl)}">
  <meta property="og:title" content="${escHtmlGs(artikel.judul)} — Faminis Barokah">
  <meta property="og:description" content="${escHtmlGs(artikel.ringkasan)}">
  <meta property="og:image" content="${escHtmlGs(artikel.gambar || LOGO_URL)}">
  <meta property="og:locale" content="id_ID">
  <meta property="og:site_name" content="Faminis Barokah">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escHtmlGs(artikel.judul)} — Faminis Barokah">
  <meta name="twitter:description" content="${escHtmlGs(artikel.ringkasan)}">
  <meta name="twitter:image" content="${escHtmlGs(artikel.gambar || LOGO_URL)}">
  <script type="application/ld+json">${structuredData}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root{--ink:#1C1612;--ink-soft:#6B5744;--cream:#F5EDE0;--cream-mid:#EDD9C4;--cream-light:#FFFDF9;--amber:#C8956C;--amber-dark:#8B5E3C;--amber-pale:#F2DCC8;--radius-sm:10px;--radius-md:16px;--radius-lg:24px;--radius-xl:32px;--shadow-sm:0 2px 8px rgba(28,22,18,.07);--shadow-md:0 6px 24px rgba(28,22,18,.10);--shadow-lg:0 16px 48px rgba(28,22,18,.13);--transition:.22s cubic-bezier(.4,0,.2,1)}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{font-family:'Inter',sans-serif;background:var(--cream);color:var(--ink);-webkit-font-smoothing:antialiased}
    a{text-decoration:none;color:inherit}
    img{display:block;max-width:100%}
    ::-webkit-scrollbar{width:6px}
    ::-webkit-scrollbar-track{background:var(--cream)}
    ::-webkit-scrollbar-thumb{background:var(--cream-mid);border-radius:99px}
    ::-webkit-scrollbar-thumb:hover{background:var(--amber)}
    .playfair{font-family:'Playfair Display',serif}

    /* TOPBAR */
    .topbar{display:flex;align-items:center;padding:0 32px;height:68px;background:var(--ink);position:sticky;top:0;z-index:100;gap:16px}
    .topbar-logo{display:flex;align-items:center;gap:12px;text-decoration:none;flex-shrink:0}
    .topbar-logo-img{width:38px;height:38px;border-radius:50%;overflow:hidden;border:2px solid var(--amber);flex-shrink:0}
    .topbar-logo-img img{width:100%;height:100%;object-fit:cover}
    .topbar-brand div.brand-title{font-family:'Playfair Display',serif;font-size:1.15rem;font-weight:700;color:var(--cream-light);letter-spacing:.01em;line-height:1.2}
    .topbar-brand p{font-size:.6rem;letter-spacing:.18em;color:var(--amber);font-weight:600;text-transform:uppercase}
    .topbar-back{display:flex;align-items:center;gap:8px;padding:9px 18px;border-radius:99px;border:1.5px solid rgba(255,255,255,.15);color:var(--cream-light);font-size:.83rem;font-weight:600;transition:var(--transition);margin-left:auto;flex-shrink:0}
    .topbar-back:hover{border-color:var(--amber);background:rgba(200,149,108,.15)}
    .topbar-back svg{width:16px;height:16px}

    /* CONTAINER */
    .container{max-width:800px;margin:0 auto;padding:48px 24px 72px}

    /* BREADCRUMB */
    .breadcrumb{display:flex;align-items:center;gap:8px;font-size:.78rem;color:var(--ink-soft);margin-bottom:32px;flex-wrap:wrap}
    .breadcrumb a{color:var(--amber-dark);font-weight:600;transition:var(--transition)}
    .breadcrumb a:hover{color:var(--amber)}
    .breadcrumb svg{width:12px;height:12px;flex-shrink:0}

    /* ARTIKEL HEADER */
    .art-cat{display:inline-block;font-size:.67rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;background:var(--amber);color:var(--ink);padding:5px 14px;border-radius:99px;margin-bottom:16px}
    .art-title{font-family:'Playfair Display',serif;font-size:clamp(1.6rem,4vw,2.4rem);font-weight:700;color:var(--ink);line-height:1.25;margin-bottom:18px}
    .art-meta{display:flex;align-items:center;gap:18px;font-size:.8rem;color:var(--ink-soft);flex-wrap:wrap;margin-bottom:28px;padding-bottom:24px;border-bottom:1.5px solid var(--cream-mid)}
    .art-meta span{display:flex;align-items:center;gap:6px}
    .art-meta svg{width:14px;height:14px;flex-shrink:0}
    .art-cover{border-radius:var(--radius-lg);overflow:hidden;margin-bottom:36px;aspect-ratio:16/9}
    .art-cover img{width:100%;height:100%;object-fit:cover}

    /* KONTEN ARTIKEL */
    .art-content{font-size:.97rem;line-height:1.85;color:var(--ink-soft)}
    .art-content h2{font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:700;color:var(--ink);margin:36px 0 14px}
    .art-content h3{font-size:1.05rem;font-weight:700;color:var(--ink);margin:24px 0 10px}
    .art-content p{margin-bottom:18px}
    .art-content ul,.art-content ol{margin:0 0 18px 24px}
    .art-content li{margin-bottom:8px;line-height:1.75}
    .art-content strong{color:var(--ink);font-weight:700}
    .art-content a{color:var(--amber-dark);text-decoration:underline;text-underline-offset:3px}
    .art-content blockquote{border-left:4px solid var(--amber);padding:12px 20px;background:var(--cream-light);border-radius:0 var(--radius-sm) var(--radius-sm) 0;margin:24px 0;font-style:italic;color:var(--ink-soft)}

    /* SHARE */
    .share-row{display:flex;align-items:center;gap:10px;margin-top:36px;padding-top:28px;border-top:1.5px solid var(--cream-mid);flex-wrap:wrap}
    .share-label{font-size:.78rem;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.1em}
    .share-btn{display:inline-flex;align-items:center;gap:6px;font-size:.78rem;font-weight:700;padding:8px 14px;border-radius:99px;border:1.5px solid var(--cream-mid);background:var(--cream-light);color:var(--ink);transition:var(--transition);cursor:pointer}
    .share-btn:hover{border-color:var(--amber);background:var(--amber-pale)}
    .share-btn svg{width:14px;height:14px}
    .share-btn.wa{border-color:#25D366;color:#25D366}
    .share-btn.wa:hover{background:#25D366;color:#fff}

    /* CTA */
    .cta-box{background:var(--ink);border-radius:var(--radius-xl);padding:36px 40px;text-align:center;margin-top:48px}
    .cta-box h3{font-family:'Playfair Display',serif;font-size:1.3rem;color:var(--cream-light);margin-bottom:10px}
    .cta-box p{font-size:.87rem;color:rgba(245,237,224,.65);margin-bottom:22px;line-height:1.6}
    .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
    .cta-btn{display:inline-flex;align-items:center;gap:8px;font-size:.84rem;font-weight:700;padding:13px 26px;border-radius:var(--radius-sm);transition:var(--transition)}
    .cta-btn.wa{background:#25D366;color:#fff}
    .cta-btn.wa:hover{background:#1ebe5c}
    .cta-btn.toko{background:var(--amber);color:var(--ink)}
    .cta-btn.toko:hover{background:#d9a07a}
    .cta-btn svg{width:16px;height:16px}

    /* RELATED */
    .related{margin-top:56px;padding-top:36px;border-top:1.5px solid var(--cream-mid)}
    .related-title{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:700;color:var(--ink);margin-bottom:20px}
    .related-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}
    .rel-card{background:var(--cream-light);border-radius:var(--radius-md);overflow:hidden;border:1.5px solid var(--cream-mid);transition:var(--transition);display:flex;flex-direction:column}
    .rel-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-md);border-color:var(--amber-pale)}
    .rel-img{aspect-ratio:16/9;overflow:hidden;position:relative}
    .rel-img img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease}
    .rel-card:hover .rel-img img{transform:scale(1.04)}
    .rel-cat{position:absolute;top:8px;left:8px;font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;background:var(--ink);color:var(--cream-light);padding:3px 9px;border-radius:99px}
    .rel-body{padding:14px}
    .rel-title{font-size:.85rem;font-weight:700;color:var(--ink);line-height:1.4;margin-bottom:6px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
    .rel-meta{font-size:.72rem;color:var(--ink-soft)}

    /* FOOTER */
    .site-footer{background:var(--ink);color:rgba(245,237,224,.5);text-align:center;padding:24px;font-size:.78rem;margin-top:72px}
    .site-footer a{color:var(--amber);font-weight:600}

    /* RESPONSIVE */
    @media(max-width:768px){
      .topbar{padding:0 16px;height:58px}
      .topbar-back span{display:none}
      .topbar-back{padding:9px 12px}
      .container{padding:28px 16px 60px}
      .cta-box{padding:24px 20px}
      .related-grid{grid-template-columns:1fr}
    }
  </style>
</head>
<body>
  <!-- TOPBAR -->
  <header class="topbar" role="banner">
    <a href="${tokoUrl}" class="topbar-logo" aria-label="Faminis Barokah Beranda">
      <div class="topbar-logo-img">
        <img src="${LOGO_URL}" alt="Logo Faminis Barokah"
          onerror="this.src='https://placehold.co/100/F5EDE0/1C1612?text=FB'">
      </div>
      <div class="topbar-brand">
        <div class="brand-title">Faminis Barokah</div>
        <p>Supplier Busana Premium</p>
      </div>
    </a>
    <a href="${listUrl}" class="topbar-back">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
      </svg>
      <span>Semua Artikel</span>
    </a>
  </header>

  <div class="container">
    <!-- BREADCRUMB -->
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="${tokoUrl}">Beranda</a>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      <a href="${listUrl}">Artikel &amp; Blog</a>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      <span>${escHtmlGs(artikel.judul)}</span>
    </nav>

    <!-- HEADER ARTIKEL -->
    <span class="art-cat">${escHtmlGs(artikel.kategori)}</span>
    <h1 class="art-title playfair">${escHtmlGs(artikel.judul)}</h1>
    <div class="art-meta">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        ${escHtmlGs(artikel.penulis)}
      </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        ${escHtmlGs(artikel.tanggal)}
      </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        ${artikel.menit_baca} menit baca
      </span>
    </div>

    <!-- COVER -->
    ${artikel.gambar ? `<div class="art-cover"><img src="${escHtmlGs(artikel.gambar)}" alt="${escHtmlGs(artikel.judul)}"></div>` : ''}

    <!-- ISI ARTIKEL -->
    <div class="art-content">${artikel.isi}</div>

    <!-- SHARE -->
    <div class="share-row">
      <span class="share-label">Bagikan:</span>
      <a href="https://wa.me/?text=${encodeURIComponent(artikel.judul + ' — Baca di: ' + artikelUrl)}" target="_blank" rel="noopener noreferrer" class="share-btn wa">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L0 24z"/></svg>
        WhatsApp
      </a>
      <button class="share-btn" onclick="navigator.clipboard.writeText('${escHtmlGs(artikelUrl)}').then(()=>{this.textContent='✓ Tersalin!';setTimeout(()=>{this.innerHTML='<svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' style=\\'width:14px;height:14px\\'><path d=\\'M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71\\'/>  <path d=\\'M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71\\'/></svg> Salin Link'},2000)})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
        Salin Link
      </button>
    </div>

    <!-- CTA -->
    <div class="cta-box">
      <h3 class="playfair">Tertarik dengan Koleksi Kami?</h3>
      <p>Faminis Barokah — Supplier gamis, mukena &amp; daster premium di Solo, dekat Pasar Klewer. Grosir &amp; eceran tersedia!</p>
      <div class="cta-btns">
        <a href="https://wa.me/6288980424363" target="_blank" rel="noopener noreferrer" class="cta-btn wa">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L0 24z"/></svg>
          Hubungi Admin
        </a>
        <a href="${tokoUrl}" class="cta-btn toko">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Lihat Koleksi
        </a>
      </div>
    </div>

    <!-- ARTIKEL TERKAIT -->
    ${related.length > 0 ? `
    <div class="related">
      <h2 class="related-title playfair">Artikel Terkait</h2>
      <div class="related-grid">${relatedHTML}</div>
    </div>` : ''}
  </div>

  <footer class="site-footer" role="contentinfo">
    <p>© 2026 <a href="${tokoUrl}">Faminis Barokah</a> · Supplier Gamis, Mukena &amp; Daster Premium · Solo, Jawa Tengah</p>
    <p style="margin-top:6px;font-size:.72rem">Supplier busana terpercaya <strong style="color:rgba(245,237,224,.7)">di kota Solo Jawa Tengah</strong></p>
  </footer>
</body>
</html>`;

  return HtmlService.createHtmlOutput(html)
    .setTitle(artikel.judul + ' — Faminis Barokah')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function generateSitemap() {
  const SITE_URL = 'https://faminisbarokah.my.id';
  let blogs = [];
  let products = [];
  
  try {
    blogs = getBlogData();
  } catch(err) {
    blogs = [];
  }
  
  try {
    products = typeof getProductData === 'function' ? getProductData() : [];
  } catch(err) {
    products = [];
  }

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';

  // 1. Homepage
  xml += '  <url>\n';
  xml += '    <loc>' + SITE_URL + '/</loc>\n';
  xml += '    <changefreq>daily</changefreq>\n';
  xml += '    <priority>1.0</priority>\n';
  xml += '  </url>\n';

  // 2. Artikel Listing Page
  xml += '  <url>\n';
  xml += '    <loc>' + SITE_URL + '/artikel.html</loc>\n';
  xml += '    <changefreq>daily</changefreq>\n';
  xml += '    <priority>0.9</priority>\n';
  xml += '  </url>\n';

  // 3. Blog articles
  blogs.forEach(function(b) {
    if (b.judul) {
      const slug = generateSlug(b.judul);
      xml += '  <url>\n';
      xml += '    <loc>' + SITE_URL + '/artikel/' + slug + '</loc>\n';
      let dateStr = '2026-07-06';
      if (b.tanggal) {
        try {
          const d = new Date(b.tanggal);
          if (!isNaN(d.getTime())) {
            dateStr = d.toISOString().split('T')[0];
          }
        } catch(e) {}
      }
      xml += '    <lastmod>' + dateStr + '</lastmod>\n';
      xml += '    <changefreq>weekly</changefreq>\n';
      xml += '    <priority>0.8</priority>\n';
      xml += '  </url>\n';
    }
  });

  // 4. Products
  products.forEach(function(p) {
    if (p.nama) {
      const slug = generateSlug(p.nama);
      xml += '  <url>\n';
      xml += '    <loc>' + SITE_URL + '/?product=' + slug + '</loc>\n';
      xml += '    <changefreq>weekly</changefreq>\n';
      xml += '    <priority>0.8</priority>\n';
      xml += '  </url>\n';
    }
  });

  xml += '</urlset>';

  return ContentService.createTextOutput(xml).setMimeType(ContentService.MimeType.XML);
}

function doGet(e) {
  const action = (e && e.parameter) ? e.parameter.action : null;
  if (action === 'sitemap') {
    return generateSitemap();
  } else if (action === 'artikel') {
    const id = e.parameter.id || e.parameter.slug;
    return renderArtikelPage(id);
  } else if (action === 'getData') {
    try {
      const data = {
        products: getProductData(),
        promos: getPromoData(),
        blogs: getBlogData(),
        banner: getBannerData(),
        categories: getCategoriesData()
      };
      return ContentService.createTextOutput(JSON.stringify({ status: 'success', data: data }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch(err) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } else {
    return HtmlService.createHtmlOutput("<h1>Faminis Barokah API Backend</h1><p>Running successfully.</p>")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
}

// ── SETUP SPREADSHEET TOOL ──────────────────────────────────────
// Jalankan fungsi ini sekali di Google Apps Script untuk otomatis membuat kolom "Harga Grosir"
function setupSpreadsheet() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      Logger.log("Error: Script tidak dijalankan dari Google Spreadsheet.");
      return;
    }
    
    let sheet = ss.getSheetByName("Produk") || ss.getSheetByName("Products");
    if (!sheet) {
      sheet = ss.getSheets()[0]; // Ambil sheet pertama jika nama tidak cocok
    }
    
    const lastCol = sheet.getLastColumn();
    const lastRow = sheet.getLastRow();
    
    if (lastCol === 0) {
      Logger.log("Sheet kosong.");
      return;
    }
    
    const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(h => String(h).trim().toLowerCase().replace(/[\s\-]+/g, '_'));
    
    // Periksa apakah kolom harga_grosir sudah ada
    const hasGrosir = headers.indexOf('harga_grosir') !== -1;
    
    if (!hasGrosir) {
      // Tambahkan kolom di sebelah kanan kolom terakhir
      sheet.insertColumnAfter(lastCol);
      sheet.getRange(1, lastCol + 1).setValue("Harga Grosir");
      
      // Berikan nilai default 0 untuk baris data yang sudah ada
      if (lastRow > 1) {
        const range = sheet.getRange(2, lastCol + 1, lastRow - 1, 1);
        const values = [];
        for (let i = 0; i < lastRow - 1; i++) {
          values.push([0]);
        }
        range.setValues(values);
      }
      
      if (typeof SpreadsheetApp.getUi === 'function') {
        SpreadsheetApp.getUi().alert("Berhasil! Kolom 'Harga Grosir' telah ditambahkan di sebelah kanan tabel Anda.");
      } else {
        Logger.log("Berhasil menambahkan kolom 'Harga Grosir'.");
      }
    } else {
      if (typeof SpreadsheetApp.getUi === 'function') {
        SpreadsheetApp.getUi().alert("Kolom 'Harga Grosir' sudah ada di spreadsheet Anda.");
      } else {
        Logger.log("Kolom 'Harga Grosir' sudah ada.");
      }
    }
  } catch (e) {
    if (typeof SpreadsheetApp.getUi === 'function') {
      SpreadsheetApp.getUi().alert("Gagal menambahkan kolom: " + e.toString());
    } else {
      Logger.log("Gagal menambahkan kolom: " + e.toString());
    }
  }
}
