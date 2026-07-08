// ── DATA ─────────────────────────────────────────────────
let allArticles = [];
let currentArticleId = null;

const DUMMY_BLOGS = [
  {
    id: 'B001', kategori: 'Tips Dagang',
    judul: 'Tips Memilih Supplier Daster, Mukena, dan Gamis yang Terpercaya',
    penulis: 'Tim Faminis Barokah', tanggal: '2 Juli 2026', menit_baca: 5,
    gambar: 'logofaminis.png',
    ringkasan: 'Memilih supplier daster, supplier mukena, dan supplier gamis yang terpercaya menjadi langkah penting bagi siapa saja yang ingin menjalankan bisnis fashion muslim maupun pakaian rumahan.',
    isi: '<p>Memilih <strong>supplier daster, supplier mukena,</strong> dan <strong>supplier gamis</strong> yang terpercaya merupakan langkah awal untuk membangun bisnis fashion yang sukses. Supplier yang tepat akan membantu Anda mendapatkan produk berkualitas, harga bersaing, serta ketersediaan stok yang stabil sehingga kebutuhan pelanggan dapat terpenuhi dengan baik.</p><h2>Perhatikan Kualitas Produk</h2><p>Kualitas bahan menjadi faktor utama saat memilih supplier. Pastikan supplier menawarkan daster, mukena, dan gamis dengan bahan yang nyaman dipakai, jahitan rapi, serta memiliki standar kualitas yang konsisten. Produk berkualitas akan meningkatkan kepuasan pelanggan and mengurangi risiko komplain maupun retur.</p><h2>Bandingkan Harga dan Stok</h2><p>Jangan hanya tergiur dengan harga yang murah. Bandingkan harga dari beberapa supplier sambil memperhatikan kualitas produk dan ketersediaan stok. Supplier yang mampu menjaga stok tetap tersedia akan memudahkan Anda memenuhi permintaan pelanggan tanpa harus khawatir kehabisan barang.</p><h2>Cek Reputasi Supplier</h2><p>Sebelum melakukan kerja sama, cari informasi mengenai reputasi supplier melalui testimoni pelanggan, ulasan di marketplace, maupun pengalaman reseller lainnya. Supplier yang memiliki pelayanan responsif, pengiriman tepat waktu, dan komunikasi yang baik biasanya lebih dapat diandalkan untuk kerja sama jangka panjang.</p><h2>Lakukan Pemesanan Sampel</h2><p>Sebelum membeli dalam jumlah besar, sebaiknya lakukan pemesanan sampel terlebih dahulu. Cara ini membantu Anda memastikan kualitas bahan, ukuran, warna, dan hasil jahitan sesuai dengan harapan. Dengan memilih <strong>supplier daster, supplier mukena,</strong> dan <strong>supplier gamis</strong> yang profesional, bisnis Anda akan lebih mudah berkembang serta mampu memberikan kepuasan maksimal kepada pelanggan.</p>',
    aktif: true, keywords: 'supplier daster, supplier mukena, supplier gamis, supplier solo, pasar klewer, faminis barokah'
  },
  {
    id: 'B002', kategori: 'Supplier',
    judul: 'Supplier Fashion Kota Surakarta',
    penulis: 'Tim Faminis Barokah', tanggal: '2 Juli 2026', menit_baca: 7,
    gambar: 'logofaminis.png',
    ringkasan: 'Faminis Barokah, Supplier Mukena, Daster, Gamis, dan Setelan Berkualitas untuk Bisnis Fashion Muslim',
    isi: '<h1>Faminis Barokah, Supplier Mukena, Daster, Gamis, dan Setelan Berkualitas untuk Bisnis Fashion Muslim</h1><p>Faminis Barokah hadir sebagai toko dan supplier terpercaya yang menyediakan berbagai kebutuhan fashion muslim, mulai dari mukena, daster, gamis, hingga setelan wanita dengan kualitas terbaik. Dengan pengalaman melayani reseller, dropshipper, hingga pemilik toko di berbagai daerah Indonesia, Faminis Barokah berkomitmen menghadirkan produk berkualitas dengan harga grosir yang kompetitif.</p><h2>Produk Lengkap dengan Model Terbaru</h2><p>Koleksi yang tersedia selalu mengikuti perkembangan tren fashion muslim. Mulai dari mukena motif premium, daster kekinian yang nyaman digunakan sehari-hari, gamis elegan untuk berbagai acara, hingga setelan wanita dengan desain modern dapat ditemukan dalam satu tempat. Pilihan motif, warna, dan ukuran yang beragam memudahkan pelanggan memenuhi kebutuhan pasar.</p><h2>Supplier yang Cocok untuk Reseller dan Toko</h2><p>Bagi Anda yang ingin memulai usaha atau mengembangkan bisnis fashion muslim, Faminis Barokah menawarkan sistem pembelian grosir dengan minimum order yang terjangkau. Reseller dapat memilih motif sesuai kebutuhan sehingga lebih mudah menyesuaikan dengan permintaan pelanggan di masing-masing daerah.</p><h2>Kualitas Produk Selalu Menjadi Prioritas</h2><p>Setiap produk dipilih menggunakan bahan yang nyaman dipakai, memiliki jahitan rapi, serta melalui proses pengecekan sebelum dikirim kepada pelanggan. Standar kualitas yang konsisten membuat Faminis Barokah dipercaya oleh banyak reseller and pemilik toko untuk memenuhi kebutuhan stok mereka.</p><h2>Harga Grosir yang Menguntungkan</h2><p>Keunggulan lain dari Faminis Barokah adalah harga grosir yang bersaing tanpa mengurangi kualitas produk. Dengan harga yang kompetitif, reseller memiliki peluang memperoleh margin keuntungan yang lebih optimal sekaligus mampu menawarkan harga menarik kepada konsumen akhir.</p><h2>Pelayanan Cepat dan Pengiriman Aman</h2><p>Selain menyediakan produk berkualitas, Faminis Barokah juga mengutamakan pelayanan yang responsif. Tim admin siap membantu proses pemesanan, memberikan informasi stok terbaru, serta memastikan setiap pesanan dikemas dengan aman agar sampai ke tangan pelanggan dalam kondisi baik.</p><h2>Stok Selalu Diperbarui Setiap Hari</h2><p>Faminis Barokah terus menghadirkan koleksi terbaru agar reseller tidak kehabisan pilihan produk. Pembaruan stok secara rutin memberikan kesempatan kepada pelanggan untuk mendapatkan model-model terbaru yang sedang diminati pasar sehingga bisnis dapat terus berkembang mengikuti tren.</p><h2>Pilih Faminis Barokah sebagai Supplier Terpercaya</h2><p>Jika Anda sedang mencari supplier mukena, supplier daster, supplier gamis, dan supplier setelan yang terpercaya, Faminis Barokah merupakan pilihan yang tepat. Produk berkualitas, harga grosir bersahabat, pelayanan profesional, serta pengiriman yang cepat menjadikan Faminis Barokah sebagai mitra terbaik untuk mendukung kesuksesan bisnis fashion muslim Anda.</p>',
    aktif: true, keywords: 'supplier daster, supplier mukena, supplier gamis, supplier solo, pasar klewer, faminis barokah, busana muslim'
  },
  {
    id: 'b1', kategori: 'Tips Busana',
    judul: 'Panduan Memilih Gamis Wolfis Premium yang Tepat untuk Tubuhmu',
    penulis: 'Tim Faminis Barokah', tanggal: '10 Juni 2025', menit_baca: 5,
    gambar: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&w=800&q=70',
    ringkasan: 'Gamis wolfis kini menjadi favorit banyak muslimah. Temukan panduan memilih gamis wolfis premium yang tepat untuk tubuhmu dari Faminis Barokah Solo.',
    isi: '<p>Gamis wolfis premium kini menjadi pilihan utama bagi muslimah yang mendambakan penampilan anggun sekaligus nyaman. Dalam <strong>panduan memilih gamis wolfis premium</strong> ini, kita akan membahas cara memilih potongan yang tepat. Untuk produk terbaik, Anda bisa mendapatkannya langsung dari <a href="index.html"><strong>supplier gamis di Solo (Surakarta)</strong></a>, Faminis Barokah.</p>'
  },
  {
    id: 'b2', kategori: 'Panduan Ibadah',
    judul: 'Memilih Mukena yang Nyaman untuk Ibadah Sholat Sehari-hari',
    penulis: 'Tim Faminis Barokah', tanggal: '22 Mei 2025', menit_baca: 4,
    gambar: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=800&q=70',
    ringkasan: 'Mukena yang nyaman membuat ibadah semakin khusyuk. Tips memilih mukena yang nyaman untuk sholat sehari-hari dari Faminis Barokah Surakarta.',
    isi: '<p>Dalam <strong>memilih mukena yang nyaman untuk sholat</strong> sehari-hari, bahan katun rayon yang sejuk adalah kuncinya. Faminis Barokah, selaku <a href="index.html"><strong>supplier mukena Solo/Surakarta</strong></a>, menghadirkan pilihan mukena adem dan nyaman untuk menyempurnakan ibadah Anda.</p>'
  },
  {
    id: 'b3', kategori: 'Inspirasi Gaya',
    judul: '5 Inspirasi Outfit Muslimah Elegan untuk Lebaran dan Hari Istimewa',
    penulis: 'Tim Faminis Barokah', tanggal: '5 April 2025', menit_baca: 6,
    gambar: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=70',
    ringkasan: 'Mencari inspirasi outfit muslimah lebaran? Simak tips padu padan busana muslimah premium dan elegan dari Faminis Barokah Solo/Surakarta.',
    isi: '<p>Mencari <strong>inspirasi outfit muslimah lebaran</strong> yang elegan? Paduan gamis syar\'i dan mukena indah adalah pilihan tepat. Tenang saja, semua koleksi tersedia di Faminis Barokah, <a href="index.html"><strong>supplier daster &amp; mukena kota Solo (Surakarta)</strong></a>.</p>'
  }
];

// ── INIT ─────────────────────────────────────────────────
window.onload = async () => {
  const SCRIPT_URL = window.SCRIPT_URL;

  try {
    const cached = localStorage.getItem('faminis_blogs_v1');
    const parsed = cached ? JSON.parse(cached) : null;
    if (parsed && Array.isArray(parsed) && parsed.length > 0) {
      allArticles = parsed;
    } else {
      allArticles = DUMMY_BLOGS;
    }
  } catch (e) { allArticles = DUMMY_BLOGS; }

  if (!allArticles || allArticles.length === 0) allArticles = DUMMY_BLOGS;
  renderList();

  // Cek URL param ?slug= atau ?id= atau clean path
  const urlParams = new URLSearchParams(window.location.search);
  const urlId = urlParams.get('id');
  let urlSlug = urlParams.get('slug');
  
  // Clean path support (e.g. /artikel/slug-name)
  const path = window.location.pathname;
  const match = path.match(/\/artikel\/([a-zA-Z0-9_-]+)/);
  if (match) {
    urlSlug = match[1];
  }

  let foundArticle = null;
  if (urlSlug) {
    foundArticle = allArticles.find(a => generateSlug(a.judul) === urlSlug);
  } else if (urlId) {
    foundArticle = allArticles.find(a => String(a.id) === String(urlId));
  }

  if (foundArticle) {
    showDetail(foundArticle.id);
  }

  // Fetch fresh dari server
  if (SCRIPT_URL) {
    try {
      const res = await Promise.race([
        fetch(SCRIPT_URL + '?action=getData&t=' + Date.now()).then(r => r.json()),
        new Promise((_, rj) => setTimeout(() => rj('timeout'), 10000))
      ]);
      if (res?.status === 'success') {
        const freshBlogs = res.data?.blogs || [];
        if (freshBlogs.length > 0) {
          allArticles = freshBlogs;
          localStorage.setItem('faminis_blogs_v1', JSON.stringify(allArticles));
          renderList();
          
          // Re-evaluate URL params to load fresh content if opened
          const uParams = new URLSearchParams(window.location.search);
          const uSlug = uParams.get('slug') || (window.location.pathname.match(/\/artikel\/([a-zA-Z0-9_-]+)/) || [])[1];
          const uId = uParams.get('id');
          
          if (uSlug) {
            const fa = allArticles.find(a => generateSlug(a.judul) === uSlug);
            if (fa) showDetail(fa.id);
          } else if (uId) {
            const fa = allArticles.find(a => String(a.id) === String(uId));
            if (fa) showDetail(fa.id);
          } else if (currentArticleId) {
            showDetail(currentArticleId);
          }
        }
      }
    } catch (e) { /* gunakan dummy/cache */ }
  }

  // Update cart badge from localStorage
  try {
    const cart = JSON.parse(localStorage.getItem('faminis_cart_v2') || '[]');
    const qty = cart.reduce((t, i) => t + i.qty, 0);
    const mb = document.getElementById('mnav-cart-badge');
    if (mb) {
      mb.textContent = qty;
      mb.classList.toggle('visible', qty > 0);
    }
  } catch (e) { }
};

// ── RENDER LIST ──────────────────────────────────────────
function renderList() {
  const grid = document.getElementById('article-grid');
  const count = document.getElementById('article-count');
  count.textContent = allArticles.length + ' Artikel';

  if (allArticles.length === 0) {
    grid.innerHTML = `<div class="no-article" style="grid-column:1/-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
      <h3>Belum ada artikel</h3><p>Artikel akan segera hadir. Pantau terus ya!</p>
    </div>`;
    return;
  }

  grid.innerHTML = '';
  allArticles.forEach(a => {
    const slug = generateSlug(a.judul);
    const card = document.createElement('a');
    card.href = `artikel/${slug}`;
    card.className = 'blog-card';
    card.setAttribute('data-id', a.id);
    card.onclick = (e) => { e.preventDefault(); showDetail(a.id); updateURL(slug); };
    card.innerHTML = `
      <div class="blog-card-img">
        <img src="${a.gambar || ''}" alt="${escHtml(a.judul)} - Blog Faminis Barokah" loading="lazy"
          onerror="this.src='logofaminis.png'">
        <span class="blog-card-cat">${escHtml(a.kategori)}</span>
      </div>
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>${escHtml(a.penulis)}</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${a.menit_baca} menit baca</span>
        </div>
        <h2 class="blog-card-title">${escHtml(a.judul)}</h2>
        <p class="blog-card-excerpt">${escHtml(a.ringkasan)}</p>
        <div class="blog-card-footer">
          <span class="blog-read-more">Baca Selengkapnya
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// ── SHOW DETAIL ──────────────────────────────────────────
function showDetail(id) {
  const a = allArticles.find(x => String(x.id) === String(id));
  if (!a) return;
  currentArticleId = id;

  document.getElementById('view-list').style.display = 'none';
  document.getElementById('view-detail').style.display = 'block';
  window.scrollTo(0, 0);

  // Update breadcrumb
  document.getElementById('breadcrumb-article-title').textContent = a.judul;

  // Render konten
  document.getElementById('detail-cat').textContent = a.kategori;
  document.getElementById('detail-title').textContent = a.judul;
  document.getElementById('detail-meta').innerHTML = `
    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>${escHtml(a.penulis)}</span>
    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${escHtml(a.tanggal)}</span>
    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${a.menit_baca} menit baca</span>`;
  document.getElementById('detail-cover').innerHTML = `<img src="${a.gambar || ''}" alt="${escHtml(a.judul)} - Cover Faminis Barokah" onerror="this.src='logofaminis.png'">`;
  document.getElementById('detail-content').innerHTML = a.isi || '';

  // Related
  const related = allArticles.filter(x => String(x.id) !== String(id)).slice(0, 3);
  const relGrid = document.getElementById('related-grid');
  relGrid.innerHTML = '';
  related.forEach(r => {
    const slug = generateSlug(r.judul);
    const card = document.createElement('a');
    card.href = `artikel/${slug}`;
    card.className = 'blog-card';
    card.onclick = (e) => { e.preventDefault(); showDetail(r.id); updateURL(slug); };
    card.innerHTML = `
      <div class="blog-card-img" style="aspect-ratio:16/9">
        <img src="${r.gambar || ''}" alt="${escHtml(r.judul)} - Blog Faminis Barokah" loading="lazy" onerror="this.src='logofaminis.png'">
        <span class="blog-card-cat">${escHtml(r.kategori)}</span>
      </div>
      <div class="blog-card-body">
        <h3 class="blog-card-title">${escHtml(r.judul)}</h3>
        <div class="blog-card-footer"><span class="blog-read-more">Baca <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></div>
      </div>`;
    relGrid.appendChild(card);
  });

  // Update SEO meta tags
  updateSEO(a);

  // Update Structured Data untuk artikel
  updateStructuredData(a);
}

// ── SHOW LIST ────────────────────────────────────────────
function showList() {
  currentArticleId = null;
  document.getElementById('view-list').style.display = 'block';
  document.getElementById('view-detail').style.display = 'none';
  window.scrollTo(0, 0);
  history.pushState({}, '', 'artikel.html');
  resetSEO();
}

// ── URL & SEO ────────────────────────────────────────────
function updateURL(slug) {
  history.pushState({ slug }, '', `artikel/${slug}`);
}

function updateSEO(a) {
  const slug = generateSlug(a.judul);
  const title = `${a.judul} — Faminis Barokah`;
  const desc = `${a.ringkasan} | Faminis Barokah — Supplier gamis, mukena & daster premium di Solo.`;
  const url = `https://faminisbarokah.my.id/artikel/${slug}`;
  const kw = a.keywords || `supplier gamis solo, supplier mukena solo, faminis barokah, ${a.kategori}`;
  document.getElementById('page-title').textContent = title;
  document.getElementById('meta-description').content = desc;
  document.getElementById('meta-keywords').content = kw;
  document.getElementById('meta-canonical').href = url;
  document.getElementById('og-title').content = title;
  document.getElementById('og-description').content = desc;
  document.getElementById('og-url').content = url;
  document.getElementById('tw-title').content = title;
  document.getElementById('tw-description').content = desc;
  if (a.gambar) {
    document.getElementById('og-image').content = a.gambar;
    document.getElementById('tw-image').content = a.gambar;
  }
}

function resetSEO() {
  document.getElementById('page-title').textContent = 'Artikel & Blog — Faminis Barokah | Supplier Gamis, Mukena, Daster Solo';
  document.getElementById('meta-description').content = 'Baca artikel tips busana muslimah, panduan memilih gamis, mukena, daster dari Faminis Barokah — supplier busana muslim terpercaya di Solo, dekat Pasar Klewer.';
  document.getElementById('meta-keywords').content = 'supplier daster, supplier mukena, supplier gamis, supplier solo, pasar klewer, daster murah, mukena premium, gamis wolfis, faminis barokah, busana muslim solo, grosir busana muslim, gamis syari, mukena bordir, kaftan, tips busana muslimah';
  document.getElementById('meta-canonical').href = 'https://faminisbarokah.my.id/artikel.html';
  document.getElementById('og-url').content = 'https://faminisbarokah.my.id/artikel.html';
}

function updateStructuredData(a) {
  const sd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": a.judul,
    "description": a.ringkasan,
    "image": a.gambar || "https://faminisbarokah.my.id/logofaminis.png",
    "datePublished": a.tanggal,
    "dateModified": a.tanggal,
    "author": { "@type": "Organization", "name": a.penulis || "Tim Faminis Barokah" },
    "publisher": {
      "@type": "Organization", "name": "Faminis Barokah",
      "logo": { "@type": "ImageObject", "url": "https://faminisbarokah.my.id/logofaminis.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://faminisbarokah.my.id/artikel/${generateSlug(a.judul)}` },
    "keywords": "supplier daster, supplier mukena, supplier gamis, supplier solo, pasar klewer, faminis barokah, " + a.kategori
  };
  document.getElementById('structured-data').textContent = JSON.stringify(sd, null, 2);
}

// ── SHARE ────────────────────────────────────────────────
function shareWA() {
  const a = allArticles.find(x => String(x.id) === String(currentArticleId));
  if (!a) return;
  const url = `https://faminisbarokah.my.id/artikel/${generateSlug(a.judul)}`;
  const msg = `*${a.judul}*\n\n${a.ringkasan}\n\nBaca selengkapnya: ${url}\n\n_Faminis Barokah — Supplier Busana Muslim Premium di Solo_ 🌸`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
}
function copyLink() {
  const a = allArticles.find(x => String(x.id) === String(currentArticleId));
  if (!a) return;
  const url = `https://faminisbarokah.my.id/artikel/${generateSlug(a.judul)}`;
  navigator.clipboard.writeText(url).then(() => alert('Link artikel berhasil disalin!')).catch(() => { });
}

// ── HELPERS ──────────────────────────────────────────────
function escHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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

// Handle browser back/forward
window.addEventListener('popstate', e => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const slug = urlParams.get('slug') || (window.location.pathname.match(/\/artikel\/([a-zA-Z0-9_-]+)/) || [])[1];
  
  let foundArticle = null;
  if (slug) {
    foundArticle = allArticles.find(a => generateSlug(a.judul) === slug);
  } else if (id) {
    foundArticle = allArticles.find(a => String(a.id) === String(id));
  }
  
  if (foundArticle) showDetail(foundArticle.id);
  else showList();
});
