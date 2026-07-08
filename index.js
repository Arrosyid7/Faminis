const NO_WA_ADMIN = '6288980424363';
const apiKey = ""; // Otomatis disuntik oleh platform runtime

// ── STATE ────────────────────────────────────────────────────
let productsData = [];
let promosData = [];
let categoriesData = ["Gamis", "Mukena"];
let bannerData = { badge: "EDISI BARU", judul: "Gaya Anggun & Syar'i Menawan", subjudul: "Diskon s/d 50% Koleksi Gamis & Mukena", tombol_teks: "Lihat Promo" };
let cart = JSON.parse(localStorage.getItem('faminis_cart_v2')) || [];
let currentProduct = null;
let selectedColor = "";
let selectedSize = "";
let currentQty = 1;
let prevPage = 'home';
let galleryImages = [];
let galleryIndex = 0;
let currentBlogId = null;

// ── BLOG DATA (dinamis dari Spreadsheet, dummy sebagai fallback) ──
let blogsData = [];

const DUMMY_BLOGS = [
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

const DUMMY_PRODUCTS = [
  {
    id: "P001", kategori: "Mukena", nama: "Mukena Dewasa Premium Kawira",
    deskripsi: "Ibadah lebih khusyuk dengan mukena berpotongan super jumbo. Bahan Rayon Premium.",
    harga: 150000, gambar: "https://lh3.googleusercontent.com/d/16Nx_5WwDy1XqAqKOsvUf6dZvLN7HCpnB",
    warna: [], ukuran: ["All Size"], stok: 50, bahan: "Rayon Premium"
  },
  {
    id: "P002", kategori: "Mukena", nama: "Mukena Dewasa Premium Anyara",
    deskripsi: "Ibadah lebih khusyuk dengan mukena berpotongan super jumbo. Bahan Rayon Premium.",
    harga: 150000, gambar: "https://lh3.googleusercontent.com/d/13zllHOLohYxpn7gQslkchjTBRXRAQdoV",
    warna: [], ukuran: ["All Size"], stok: 50, bahan: "Rayon Premium"
  },
  {
    id: "P014", kategori: "Daster", nama: "Daster batik jumbo Raras",
    deskripsi: "Pilihan tepat untuk santai di rumah dengan ruang gerak yang super lega.",
    harga: 45000, gambar: "https://lh3.googleusercontent.com/d/14PuXK76D89Y0ddbcaTX7NAhf1UT3L5u-",
    warna: ["Biru","Merah","Sage","Orange","Ungu"], ukuran: ["All Size"], stok: 50, bahan: "Rayon Bali"
  },
  {
    id: "P026", kategori: "Gamis", nama: "Gamis Wanita Dewasa Arunika",
    deskripsi: "Gamis wanita dewasa berkualitas premium, sejuk dan nyaman dipakai.",
    harga: 95000, gambar: "https://lh3.googleusercontent.com/d/1G4EanbkOwIopSnVPaZyx5VHfhR47jg-K",
    warna: ["G1","G2","G3","G4","G5"], ukuran: ["All Size"], stok: 50, bahan: "Rayon Bali"
  }
];
const DUMMY_PROMOS = [
  { id: "PR01", judul: "Promo Tiktok Live", gambar: "https://lh3.googleusercontent.com/d/1c6-XTkkWWtE8GySWYVPpKcXC6plAc08S", link: "https://tiktok.com/@faminis_barokah" },
  { id: "PR02", judul: "Grup Reseller Faminis", gambar: "https://lh3.googleusercontent.com/d/1_8962E-ca8iphDO7lVYIgHhnDoEGc1F3", link: "https://chat.whatsapp.com/DUm7GTpGYBJFSGyAC3uO2x" }
];

// ── HELPERS ──────────────────────────────────────────────────
const IDR = n => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(n);

function getDriveUrl(url) {
  if (!url) return '';
  url = url.trim();
  if (url.includes('drive.google.com')) {
    const m = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (m) return `https://lh3.googleusercontent.com/d/${m[1]}`;
  }
  return url;
}

function markImageLoaded(img) {
  if (!img) return;
  img.classList.remove('img-loading');
  img.classList.add('img-loaded');
}

function renderImg(src, alt, fallback) {
  const safeSrc = src || fallback;
  const safeAlt = String(alt || '').replace(/"/g, '&quot;');
  return `<img class="img-loading" src="${safeSrc}" alt="${safeAlt}" loading="lazy" onload="markImageLoaded(this)" onerror="this.onerror=null; this.src='${fallback}'; markImageLoaded(this)">`;
}

function getFirstImg(prod) {
  if (!prod.gambar) return 'logofaminis.png';
  const src = typeof prod.gambar === 'string' ? prod.gambar.split(',')[0].trim() : prod.gambar[0];
  return getDriveUrl(src || '');
}

function getImgArray(prod) {
  if (!prod.gambar) return ['logofaminis.png'];
  const list = typeof prod.gambar === 'string' ? prod.gambar.split(',').map(s => s.trim()).filter(Boolean) : prod.gambar;
  return list.map(getDriveUrl);
}

function getStrList(val) {
  if (!val) return [];
  return typeof val === 'string' ? val.split(',').map(s => s.trim()).filter(Boolean) : (Array.isArray(val) ? val : [String(val)]);
}

function getBahan(prod) {
  if (prod.bahan && String(prod.bahan).trim()) return String(prod.bahan).trim();
  const d = (prod.deskripsi || '').toLowerCase();
  if (d.includes('wolfis')) return 'Wolfis Premium';
  if (d.includes('silk') || d.includes('satin')) return 'Silk Satin';
  if (d.includes('rayon')) return 'Rayon Viscose';
  if (d.includes('katun')) return 'Katun Premium';
  if (d.includes('crinkle')) return 'Crinkle Airflow';
  return 'Bahan Premium';
}

function isHabis(prod) { return !prod.stok || parseInt(prod.stok, 10) <= 0; }

// ── TOAST ────────────────────────────────────────────────────
let toastTimeout;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.querySelector('#toast-text').textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => el.classList.add('hidden'), 2800);
}

// ── MODAL CONFIRM ────────────────────────────────────────────
function showConfirm(title, msg) {
  return new Promise(resolve => {
    const ov = document.getElementById('modal-overlay');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-msg').textContent = msg;
    ov.classList.add('open');
    const yes = () => { cleanup(); resolve(true); };
    const no = () => { cleanup(); resolve(false); };
    function cleanup() {
      ov.classList.remove('open');
      document.getElementById('modal-confirm').removeEventListener('click', yes);
      document.getElementById('modal-cancel').removeEventListener('click', no);
    }
    document.getElementById('modal-confirm').addEventListener('click', yes);
    document.getElementById('modal-cancel').addEventListener('click', no);
  });
}

// ── SHARE MODAL ──────────────────────────────────────────────
function openShareModal() { document.getElementById('share-modal').classList.add('open'); }
function closeShareModal() { document.getElementById('share-modal').classList.remove('open'); }
function getProductShareUrl() {
  if (!currentProduct) return window.location.href;
  return window.location.origin + window.location.pathname + '?product=' + generateSlug(currentProduct.nama);
}

async function shareLinkNative() {
  const url = getProductShareUrl();
  closeShareModal();
  if (navigator.share) {
    try { await navigator.share({ title: currentProduct?.nama, url }); showToast("Produk dibagikan!"); return; } catch (e) { }
  }
  try { await navigator.clipboard.writeText(url); showToast("Link disalin ke clipboard!"); }
  catch (e) { showToast("Link: " + url); }
}

function shareToWhatsAppAdmin() {
  if (!currentProduct) return;
  const url = getProductShareUrl();
  const txt = `Assalamu'alaikum Admin Faminis Barokah, saya tertarik dengan produk *${currentProduct.nama}*.\n\nLink produk: ${url}`;
  closeShareModal();
  window.open(`https://wa.me/${NO_WA_ADMIN}?text=${encodeURIComponent(txt)}`, '_blank');
}

// ── NAVIGATION ───────────────────────────────────────────────
let savedScrolls = {};
const SEARCH_PAGES = ['home'];

function switchPage(id) {
  const cur = document.querySelector('.page.active');
  const curId = cur ? cur.id.replace('page-', '') : '';
  if (curId && curId !== id) savedScrolls[curId] = window.scrollY;
  if (id !== 'detail' && id !== 'blog-detail') prevPage = id;

  if (id === 'home' && window.location.search) {
    history.pushState({}, '', window.location.pathname);
    // Reset canonical to home
    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.href = 'https://faminisbarokah.my.id/';
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + id);
  if (target) target.classList.add('active');

  if (SEARCH_PAGES.includes(id)) {
    document.body.classList.remove('hide-search');
  } else {
    document.body.classList.add('hide-search');
    document.getElementById('topbar-search').value = '';
    document.getElementById('mobile-search').value = '';
  }

  const pos = savedScrolls[id] !== undefined ? savedScrolls[id] : 0;
  setTimeout(() => window.scrollTo(0, curId === id ? 0 : pos), 10);

  document.querySelectorAll('.sidebar-nav-btn').forEach(b => b.classList.remove('active'));
  const sb = document.getElementById('snav-' + (id === 'blog-detail' ? 'blog' : id));
  if (sb) sb.classList.add('active');

  document.querySelectorAll('.mnav-btn').forEach(b => b.classList.remove('active'));
  const mb = document.getElementById('mnav-' + (id === 'blog-detail' ? 'blog' : (id === 'detail' ? 'home' : id)));
  if (mb) mb.classList.add('active');

  if (id === 'cart') renderCart();
  if (id === 'blog') renderBlog();

  const waFab = document.querySelector('.wa-fab');
  if (waFab) {
    waFab.style.display = (id === 'home') ? '' : 'none';
  }
  handleScrollStickyButton();
}

function handleDetailBack() { switchPage(prevPage); }
function handleBlogDetailBack() { switchPage('blog'); }

// ── CART BADGE ───────────────────────────────────────────────
function updateCartBadge() {
  const qty = cart.reduce((t, i) => t + i.qty, 0);
  const el = document.getElementById('topbar-cart-count');
  if (el) { el.textContent = qty; el.classList.toggle('visible', qty > 0); }
  const mb = document.getElementById('mnav-cart-badge');
  if (mb) { mb.textContent = qty; mb.classList.toggle('visible', qty > 0); }
}

// ── RENDER BANNER ────────────────────────────────────────────
function renderBanner(d) {
  if (!d) return;
  const hb = document.getElementById('hero-badge'); if (hb) hb.textContent = d.badge || 'EDISI BARU';
  const ht = document.getElementById('hero-title'); if (ht) ht.innerHTML = (d.judul || '').replace('&', '&<br>');
  const hs = document.getElementById('hero-sub'); if (hs) hs.textContent = d.subjudul || '';
  const hbt = document.getElementById('hero-btn-text'); if (hbt) hbt.textContent = d.tombol_teks || 'Lihat Promo';
}

// ── RENDER CATEGORIES ─────────────────────────────────────────
function renderCategories(cats) {
  const sl = document.getElementById('sidebar-cat-list');
  sl.innerHTML = `<li><button class="cat-btn active" id="scat-Semua" onclick="filterCategory('Semua',this)">Semua <span class="count">${productsData.length}</span></button></li>`;
  cats.forEach(c => {
    const cnt = productsData.filter(p => p.kategori.toLowerCase() === c.toLowerCase()).length;
    sl.innerHTML += `<li><button class="cat-btn" id="scat-${c}" onclick="filterCategory('${c}',this)">${c} <span class="count">${cnt}</span></button></li>`;
  });
  const mp = document.getElementById('mobile-cat-pills');
  mp.innerHTML = `<button class="cat-pill active" id="mcat-Semua" onclick="filterCategory('Semua',this)">Semua</button>`;
  cats.forEach(c => mp.innerHTML += `<button class="cat-pill" id="mcat-${c}" onclick="filterCategory('${c}',this)">${c}</button>`);
}

// ── RENDER PRODUCTS ───────────────────────────────────────────
function renderProducts(data) {
  document.getElementById('skeleton-grid').style.display = 'none';
  const grid = document.getElementById('product-grid');
  grid.style.display = 'grid';
  grid.innerHTML = '';
  document.getElementById('product-count').textContent = `${data.length} Busana`;
  if (data.length === 0) {
    grid.innerHTML = `<div class="no-results"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><h3>Busana tidak ditemukan</h3><p>Coba kata kunci atau kategori lain</p></div>`;
    return;
  }
  data.forEach(p => {
    const img = getFirstImg(p);
    const habis = isHabis(p);
    const slug = generateSlug(p.nama);
    const card = document.createElement('a');
    card.className = 'product-card';
    card.href = `?product=${slug}`;
    card.onclick = (e) => { e.preventDefault(); openDetail(p.id); };
    card.innerHTML = `
      <div class="product-img image-loading-shell">
        ${renderImg(img, p.nama, 'logofaminis.png')}
        <span class="product-badge">${p.kategori}</span>
        ${habis ? '<div class="product-badge-habis"><span>Stok Habis</span></div>' : ''}
        ${!habis ? `<button class="product-quick-add" onclick="event.preventDefault(); event.stopPropagation(); openDetail('${p.id}')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>` : ''}
      </div>
      <div class="product-info">
        <p class="product-category">${p.kategori}</p>
        <p class="product-name">${p.nama}</p>
        <div class="product-footer">
          <span class="product-price">${IDR(p.harga)}</span>
          <span class="product-rating"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>4.9</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function handleSearch(q) {
  document.getElementById('topbar-search').value = q;
  document.getElementById('mobile-search').value = q;
  const v = q.toLowerCase();
  const filtered = productsData.filter(p => p.nama.toLowerCase().includes(v) || p.kategori.toLowerCase().includes(v) || (p.deskripsi || '').toLowerCase().includes(v));
  renderProducts(filtered);
}

function filterCategory(cat, btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const sb = document.getElementById('scat-' + cat);
  if (sb) sb.classList.add('active');
  document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
  const mp = document.getElementById('mcat-' + cat);
  if (mp) mp.classList.add('active');
  renderProducts(cat === 'Semua' ? productsData : productsData.filter(p => p.kategori.toLowerCase() === cat.toLowerCase()));
}

// ── DETAIL ────────────────────────────────────────────────────
const COLOR_PALETTE = {
  hitam: '#1A1A1A', maroon: '#7A1C1C', navy: '#1F2937', putih: '#F3F4F6', mocca: '#BAA48A',
  'dusty rose': '#D2A2A7', 'abu-abu': '#9CA3AF', 'soft blue': '#B0C4DE', 'sage green': '#9FAF90',
  'rose gold': '#E3A89F', cream: '#F5EDE0', 'soft green': '#B7CFBF'
};

function openDetail(id) {
  currentProduct = productsData.find(p => String(p.id) === String(id));
  if (!currentProduct) return;
  selectedColor = ""; selectedSize = ""; currentQty = 1;
  galleryImages = getImgArray(currentProduct); galleryIndex = 0;
  renderGallery();
  document.getElementById('detail-page-title').textContent = currentProduct.nama;
  document.getElementById('detail-cat').textContent = currentProduct.kategori;
  document.getElementById('detail-name').textContent = currentProduct.nama;
  document.getElementById('detail-price').textContent = IDR(currentProduct.harga);
  document.getElementById('detail-desc').textContent = currentProduct.deskripsi || 'Tidak ada deskripsi.';
  document.getElementById('detail-bahan').textContent = getBahan(currentProduct);
  document.getElementById('detail-qty').textContent = 1;
  const habis = isHabis(currentProduct);
  document.getElementById('detail-stock').innerHTML = habis ? `<span style="color:#E53E3E;font-weight:700">Habis</span>` : `<strong>${currentProduct.stok}</strong>`;
  const addBtn = document.getElementById('btn-add-cart');
  if (habis) { addBtn.textContent = 'Stok Habis'; addBtn.disabled = true; }
  else { addBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>Masukkan Keranjang`; addBtn.disabled = false; }
  const colors = getStrList(currentProduct.warna);
  const colorSec = document.getElementById('color-section');
  const colorOpts = document.getElementById('color-options');
  colorOpts.innerHTML = ''; document.getElementById('sel-color-lbl').textContent = '—';
  if (colors.length > 0) {
    colorSec.style.display = '';
    colors.forEach(c => {
      const btn = document.createElement('button'); btn.className = 'color-opt';
      const lc = c.toLowerCase();
      if (COLOR_PALETTE[lc]) btn.innerHTML = `<span class="color-swatch" style="background:${COLOR_PALETTE[lc]}"></span>${c}`;
      else btn.textContent = c;
      btn.onclick = () => { document.querySelectorAll('#color-options .color-opt').forEach(b => b.classList.remove('active')); btn.classList.add('active'); selectedColor = c; document.getElementById('sel-color-lbl').textContent = c; };
      colorOpts.appendChild(btn);
    });
  } else { colorSec.style.display = 'none'; }
  const sizes = getStrList(currentProduct.ukuran);
  const sizeSec = document.getElementById('size-section');
  const sizeOpts = document.getElementById('size-options');
  sizeOpts.innerHTML = ''; document.getElementById('sel-size-lbl').textContent = '—';
  if (sizes.length > 0) {
    sizeSec.style.display = '';
    sizes.forEach(s => {
      const btn = document.createElement('button'); btn.className = 'size-opt'; btn.textContent = s;
      btn.onclick = () => { document.querySelectorAll('#size-options .size-opt').forEach(b => b.classList.remove('active')); btn.classList.add('active'); selectedSize = s; document.getElementById('sel-size-lbl').textContent = s; };
      sizeOpts.appendChild(btn);
    });
  } else { sizeSec.style.display = 'none'; }
  
  // Update canonical URL for product deep link
  const canonicalEl = document.querySelector('link[rel="canonical"]');
  const slug = generateSlug(currentProduct.nama);
  if (canonicalEl) canonicalEl.href = `https://faminisbarokah.my.id/?product=${slug}`;
  history.pushState({ product: slug }, '', `?product=${slug}`);

  // Dynamic Product JSON-LD Structured Data
  const sd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": currentProduct.nama,
    "image": getImgArray(currentProduct),
    "description": currentProduct.deskripsi || `${currentProduct.nama} - Koleksi busana muslim premium dari Faminis Barokah Solo.`,
    "offers": {
      "@type": "Offer",
      "url": `https://faminisbarokah.my.id/?product=${slug}`,
      "priceCurrency": "IDR",
      "price": currentProduct.harga,
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": habis ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Faminis Barokah"
      }
    }
  };
  const scriptEl = document.getElementById('product-jsonld');
  if (scriptEl) scriptEl.textContent = JSON.stringify(sd, null, 2);

  switchPage('detail');
}

function renderGallery() {
  const mainImg = document.getElementById('gallery-main-img');
  mainImg.classList.remove('img-loaded');
  mainImg.classList.add('img-loading');
  mainImg.src = galleryImages[galleryIndex] || 'logofaminis.png';
  mainImg.onload = () => { markImageLoaded(mainImg); };
  mainImg.onerror = () => { mainImg.onerror = null; mainImg.src = 'logofaminis.png'; markImageLoaded(mainImg); };
  mainImg.alt = currentProduct?.nama || '';
  const thumbs = document.getElementById('gallery-thumbs'); thumbs.innerHTML = '';
  galleryImages.forEach((img, i) => {
    const div = document.createElement('div'); div.className = 'gallery-thumb' + (i === galleryIndex ? ' active' : '');
    div.innerHTML = `${renderImg(img, `${currentProduct?.nama || 'Produk'} ${i + 1}`, 'logofaminis.png')}`;
    div.onclick = () => { galleryIndex = i; renderGallery(); }; thumbs.appendChild(div);
  });
  const showNav = galleryImages.length > 1;
  document.getElementById('gallery-prev').style.display = showNav ? '' : 'none';
  document.getElementById('gallery-next').style.display = showNav ? '' : 'none';
}

function changeSlide(dir) { galleryIndex = (galleryIndex + dir + galleryImages.length) % galleryImages.length; renderGallery(); }
function changeQty(delta) {
  if (!currentProduct || isHabis(currentProduct)) return;
  const maxStock = parseInt(currentProduct.stok, 10);
  currentQty = Math.max(1, Math.min(currentQty + delta, maxStock));
  if (currentQty >= maxStock && delta > 0) showToast(`Stok terbatas! Maks. ${maxStock} pcs`);
  document.getElementById('detail-qty').textContent = currentQty;
}

function addToCart() {
  if (!currentProduct || isHabis(currentProduct)) { showToast("Stok produk sedang habis!"); return; }
  const colors = getStrList(currentProduct.warna); const sizes = getStrList(currentProduct.ukuran);
  if (colors.length > 0 && !selectedColor) {
    showToast("Pilih warna terlebih dahulu!");
    const sec = document.getElementById('color-section');
    if (sec) {
      const rect = sec.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.top < window.innerHeight - 150;
      if (!isVisible) sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }
  if (sizes.length > 0 && !selectedSize) {
    showToast("Pilih ukuran terlebih dahulu!");
    const sec = document.getElementById('size-section');
    if (sec) {
      const rect = sec.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.top < window.innerHeight - 150;
      if (!isVisible) sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }
  const thumb = getFirstImg(currentProduct);
  const existing = cart.findIndex(i => String(i.id) === String(currentProduct.id) && i.warna === selectedColor && i.ukuran === selectedSize);
  if (existing > -1) { cart[existing].qty = Math.min(cart[existing].qty + currentQty, parseInt(currentProduct.stok, 10)); }
  else { cart.push({ id: currentProduct.id, nama: currentProduct.nama, harga: currentProduct.harga, gambar: thumb, warna: selectedColor, ukuran: selectedSize, qty: currentQty }); }
  localStorage.setItem('faminis_cart_v2', JSON.stringify(cart));
  updateCartBadge(); showToast("Ditambahkan ke Keranjang Belanja!");
}

// ── CART ──────────────────────────────────────────────────────
function renderCart() {
  const container = document.getElementById('cart-items-section');
  const panel = document.getElementById('cart-summary-panel');
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg><h3 class="playfair">Keranjang Kosong</h3><p>Pilih busana impianmu dari koleksi Faminis Barokah.</p><button class="cart-empty-btn" onclick="switchPage('home')">Mulai Belanja</button></div>`;
    panel.style.display = 'none'; return;
  }
  panel.style.display = '';
  let subtotal = 0; container.innerHTML = '';
  cart.forEach((item, i) => {
    subtotal += item.harga * item.qty;
    const vt = [item.warna, item.ukuran].filter(Boolean).join(' · ');
    const card = document.createElement('div'); card.className = 'cart-item-card';
    card.innerHTML = `<div class="cart-item-thumb image-loading-shell">${renderImg(item.gambar, item.nama, 'logofaminis.png')}</div>
    <div class="cart-item-body">
      <p class="cart-item-name">${item.nama}</p><p class="cart-item-variant">${vt}</p>
      <p class="cart-item-price">${IDR(item.harga)}</p>
      <div class="cart-item-actions">
        <div class="cart-qty-ctrl"><button class="cart-qty-btn" onclick="updateCartQty(${i},-1)">−</button><span class="cart-qty-num">${item.qty}</span><button class="cart-qty-btn" onclick="updateCartQty(${i},1)">+</button></div>
        <button class="cart-remove-btn" onclick="removeFromCart(${i})"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg></button>
      </div>
    </div>`;
    container.appendChild(card);
  });
  document.getElementById('summary-subtotal').textContent = IDR(subtotal);
  document.getElementById('summary-total').textContent = IDR(subtotal);
}

async function removeFromCart(i) {
  const ok = await showConfirm("Hapus Produk", `Hapus "${cart[i].nama}" dari keranjang?`);
  if (!ok) return; cart.splice(i, 1); saveCart(); renderCart(); showToast("Produk dihapus dari keranjang");
}

function updateCartQty(i, delta) {
  const prod = productsData.find(p => String(p.id) === String(cart[i].id));
  const maxStock = prod ? parseInt(prod.stok, 10) : 999;
  cart[i].qty += delta;
  if (cart[i].qty < 1) { removeFromCart(i); return; }
  if (cart[i].qty > maxStock) { cart[i].qty = maxStock; showToast(`Stok terbatas! Maks. ${maxStock} pcs`); }
  saveCart(); renderCart();
}

async function clearCart() {
  if (cart.length === 0) return;
  const ok = await showConfirm("Kosongkan Keranjang", "Semua item akan dihapus dari keranjang.");
  if (!ok) return; cart = []; saveCart(); renderCart(); showToast("Keranjang dikosongkan");
}

function saveCart() { localStorage.setItem('faminis_cart_v2', JSON.stringify(cart)); updateCartBadge(); }

// ── CHECKOUT ──────────────────────────────────────────────────
function checkoutWhatsApp() {
  if (cart.length === 0) { showToast("Keranjang masih kosong!"); return; }
  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const region = document.getElementById('cust-region').value.trim();
  const street = document.getElementById('cust-street').value.trim();
  const detail = document.getElementById('cust-detail').value.trim();
  if (!name) { showToast("Nama penerima wajib diisi!"); document.getElementById('cust-name').focus(); return; }
  if (!phone) { showToast("Nomor telepon wajib diisi!"); document.getElementById('cust-phone').focus(); return; }
  if (!region) { showToast("Wilayah pengiriman wajib diisi!"); document.getElementById('cust-region').focus(); return; }
  if (!street) { showToast("Alamat jalan wajib diisi!"); document.getElementById('cust-street').focus(); return; }
  if (!detail) { showToast("Detail / patokan wajib diisi!"); document.getElementById('cust-detail').focus(); return; }
  let subtotal = 0;
  let msg = `🛍️ *INVOICE ORDER FAMINIS BAROKAH*\n===============================\n\n*INFORMASI PENERIMA:*\n👤 *Nama:* ${name}\n📞 *Telepon:* ${phone}\n📍 *Wilayah:* ${region}\n🏠 *Jalan:* ${street}\n📝 *Detail:* ${detail}\n📅 *Tanggal:* ${new Date().toLocaleDateString('id-ID')}\n\n*DAFTAR BELANJA:*\n`;
  cart.forEach((item, i) => {
    subtotal += item.harga * item.qty;
    const vt = [item.warna, item.ukuran].filter(Boolean).join(', ');
    msg += `${i + 1}. *${item.nama}*\n   Varian: ${vt || '-'}\n   ${item.qty} x ${IDR(item.harga)} = ${IDR(item.harga * item.qty)}\n\n`;
  });
  msg += `===============================\n*TOTAL ESTIMASI: ${IDR(subtotal)}*\n\n_Biaya pengiriman akan dikonfirmasi Admin ya kak. Terima kasih!_ 🌸`;
  window.open(`https://wa.me/${NO_WA_ADMIN}?text=${encodeURIComponent(msg)}`, '_blank');
  cart = []; saveCart(); renderCart(); switchPage('home'); showToast("Pesanan dikirim ke WhatsApp Admin!");
}

// ── PROMO ─────────────────────────────────────────────────────
function renderPromos() {
  const container = document.getElementById('promo-list');
  if (promosData.length === 0) { container.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--ink-soft);padding:60px">Tidak ada promo saat ini</div>`; return; }
  container.innerHTML = '';
  promosData.forEach(p => {
    const img = getDriveUrl(p.gambar);
    const card = document.createElement('a'); 
    card.className = 'promo-card';
    card.href = p.link || '#';
    if (p.link) { card.target = '_blank'; card.rel = 'noopener noreferrer'; }
    card.innerHTML = `<div class="promo-img image-loading-shell">${renderImg(img, p.judul, 'logofaminis.png')}<span class="promo-badge">PROMO</span></div>
    <div class="promo-body"><h3 class="promo-title playfair">${p.judul}</h3><span class="promo-link">Lihat Detail Promo <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></div>`;
    container.appendChild(card);
  });
}

// ── BLOG ─────────────────────────────────────────────────────
function renderBlog() {
  const container = document.getElementById('blog-list');
  const data = blogsData.length > 0 ? blogsData : DUMMY_BLOGS;
  if (data.length === 0) {
    container.innerHTML = `<div class="no-results"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg><h3>Belum ada artikel</h3><p>Tambahkan artikel di sheet Blog pada Spreadsheet Anda.</p></div>`;
    return;
  }
  container.innerHTML = '';
  data.forEach(a => {
    const slug = generateSlug(a.judul);
    const card = document.createElement('a'); 
    card.className = 'blog-card';
    card.href = `artikel.html?slug=${slug}`;
    card.onclick = (e) => { e.preventDefault(); openBlogDetail(a.id); };
    card.innerHTML = `
      <div class="blog-card-img image-loading-shell">
        ${renderImg(a.gambar, a.judul, 'logofaminis.png')}
        <span class="blog-card-cat">${a.kategori}</span>
      </div>
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${a.tanggal}</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${a.menit_baca} mnt baca</span>
        </div>
        <h3 class="blog-card-title">${a.judul}</h3>
        <p class="blog-card-excerpt">${a.ringkasan}</p>
        <div class="blog-card-footer"><span class="blog-read-more">Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></div>
      </div>`;
    container.appendChild(card);
  });
}

function openBlogDetail(id) {
  const source = blogsData.length > 0 ? blogsData : DUMMY_BLOGS;
  const article = source.find(a => String(a.id) === String(id));
  if (!article) return;
  currentBlogId = id;
  document.getElementById('blog-detail-cat').textContent = article.kategori;
  document.getElementById('blog-detail-header-title').textContent = article.kategori;
  document.getElementById('blog-detail-title').textContent = article.judul;
  document.getElementById('blog-detail-meta').innerHTML = `
    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>${article.penulis}</span>
    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${article.tanggal}</span>
    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${article.menit_baca} menit baca</span>`;
  document.getElementById('blog-detail-cover').innerHTML = `${renderImg(article.gambar, article.judul, 'logofaminis.png')}`;
  document.getElementById('blog-detail-content').innerHTML = article.isi;
  const related = source.filter(a => String(a.id) !== String(id)).slice(0, 3);
  const relGrid = document.getElementById('blog-related-grid');
  relGrid.innerHTML = '';
  related.forEach(a => {
    const slug = generateSlug(a.judul);
    const card = document.createElement('a'); 
    card.className = 'blog-card'; 
    card.href = `artikel.html?slug=${slug}`;
    card.onclick = (e) => { e.preventDefault(); openBlogDetail(a.id); };
    card.innerHTML = `<div class="blog-card-img image-loading-shell" style="aspect-ratio:16/9">${renderImg(a.gambar, a.judul, 'logofaminis.png')}<span class="blog-card-cat">${a.kategori}</span></div>
    <div class="blog-card-body"><h3 class="blog-card-title">${a.judul}</h3><div class="blog-card-footer"><span class="blog-read-more">Baca <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></div></div>`;
    relGrid.appendChild(card);
  });
  switchPage('blog-detail');
  window.scrollTo(0, 0);
}

// ── AI CHATBOX ────────────────────────────────────────────────
function toggleAiChat(open) { document.getElementById('ai-drawer').classList.toggle('open', open); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleAiChat(false); });
function sendAiMessage() {
  const input = document.getElementById('ai-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  const msgs = document.getElementById('ai-messages');
  const userBubble = document.createElement('div'); userBubble.className = 'msg-bubble user'; userBubble.textContent = text;
  msgs.appendChild(userBubble);
  const loadId = 'ai-load-' + Date.now();
  const loadBubble = document.createElement('div'); loadBubble.className = 'msg-bubble ai'; loadBubble.id = loadId;
  loadBubble.innerHTML = '<span style="display:inline-flex;gap:4px"><span style="animation:ping .8s .0s ease-in-out infinite;display:inline-block">●</span><span style="animation:ping .8s .15s ease-in-out infinite;display:inline-block">●</span><span style="animation:ping .8s .3s ease-in-out infinite;display:inline-block">●</span></span>';
  msgs.appendChild(loadBubble); msgs.scrollTop = msgs.scrollHeight;
  const sysP = `Kamu adalah Asisten Fashion Muslimah "Faminis AI ✨" dari Butik Faminis Barokah. Layani dengan sopan, ramah, dan Islami. ATURAN: Hanya rekomendasikan produk dari katalog ini. Mukena = tidak perlu hijab tambahan.\nKATALOG:\n${productsData.map(p => `- ${p.nama} (${p.kategori}, ${getBahan(p)}, ${IDR(p.harga)})`).join('\n')}`;
  callGeminiAPI(text, sysP).then(reply => {
    const el = document.getElementById(loadId);
    if (el) el.innerHTML = formatAI(reply || localFallbackChat(text));
    msgs.scrollTop = msgs.scrollHeight;
  }).catch(() => {
    const el = document.getElementById(loadId);
    if (el) el.innerHTML = formatAI(localFallbackChat(text));
    msgs.scrollTop = msgs.scrollHeight;
  });
}



// ── GEMINI API ────────────────────────────────────────────────
async function callGeminiAPI(prompt, system = '') {
  const SCRIPT_URL = window.SCRIPT_URL;
  let url, opts;
  if (!apiKey && SCRIPT_URL) {
    url = SCRIPT_URL + (SCRIPT_URL.includes('?') ? '&' : '?') + 'action=callGemini&prompt=' + encodeURIComponent(prompt) + '&systemInstruction=' + encodeURIComponent(system);
    opts = { method: 'GET', headers: { 'Accept': 'application/json' } };
  } else if (apiKey) {
    url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const payload = { contents: [{ parts: [{ text: prompt }] }] };
    if (system) payload.systemInstruction = { parts: [{ text: system }] };
    opts = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) };
  } else { throw new Error("No AI backend configured"); }
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, opts); const json = await res.json();
      if (!apiKey) return json.status === 'success' ? json.text : null;
      return json.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch (e) { if (i === 2) throw e; await new Promise(r => setTimeout(r, 1200 * (i + 1))); }
  }
}

function formatAI(text) {
  if (!text) return '';
  return text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
}



function localFallbackChat(q) {
  const ql = q.toLowerCase();
  if (ql.includes('mukena') || ql.includes('sholat')) {
    const ms = productsData.filter(p => (p.kategori || '').toLowerCase().includes('mukena'));
    if (ms.length > 0) { let r = "Koleksi Mukena kami:\n"; ms.forEach(m => r += `- **${m.nama}** — ${IDR(m.harga)}\n`); return r + "\nMukena sudah menutup aurat lengkap, tidak perlu hijab tambahan! 🕌"; }
  }
  if (ql.includes('gamis') || ql.includes('kaftan')) {
    const gs = productsData.filter(p => (p.kategori || '').toLowerCase().includes('gamis'));
    if (gs.length > 0) { let r = "Koleksi Gamis & Kaftan kami:\n"; gs.forEach(g => r += `- **${g.nama}** — ${IDR(g.harga)}\n`); return r + "\nTersedia dalam berbagai warna dan ukuran! 🌸"; }
  }
  let r = "Assalamu'alaikum kak! 🌸 Koleksi Faminis Barokah:\n";
  productsData.forEach(p => r += `- **${p.nama}** (${p.kategori}) — ${IDR(p.harga)}\n`);
  return r + "\nAda yang ingin ditanyakan soal produk atau padu padan? Saya siap membantu! ✨";
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

function toggleSeoIntro() {
  const content = document.getElementById('seo-intro-content');
  const btn = document.getElementById('seo-toggle-btn');
  const icon = document.getElementById('seo-toggle-icon');
  
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    btn.innerHTML = `Baca Selengkapnya <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;transition:transform 0.3s" id="seo-toggle-icon"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  } else {
    content.classList.add('expanded');
    btn.innerHTML = `Tutup <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;transition:transform 0.3s;transform:rotate(180deg)" id="seo-toggle-icon"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  }
}

// ── INIT ─────────────────────────────────────────────────────
window.onload = async () => {
  const SCRIPT_URL = window.SCRIPT_URL;
  updateCartBadge();
  document.body.classList.remove('hide-search');

  try {
    const cp = localStorage.getItem('faminis_products_v2');
    const parsed = cp ? JSON.parse(cp) : null;
    if (parsed && Array.isArray(parsed) && parsed.length > 0) {
      productsData = parsed;
      promosData = JSON.parse(localStorage.getItem('faminis_promos_v2') || '[]');
      blogsData = JSON.parse(localStorage.getItem('faminis_blogs_v1') || '[]');
      bannerData = JSON.parse(localStorage.getItem('faminis_banner_v2') || JSON.stringify(bannerData));
      categoriesData = JSON.parse(localStorage.getItem('faminis_cats_v2') || JSON.stringify(categoriesData));
    } else {
      productsData = DUMMY_PRODUCTS; promosData = DUMMY_PROMOS; blogsData = DUMMY_BLOGS;
    }
  } catch (e) { 
    productsData = DUMMY_PRODUCTS; promosData = DUMMY_PROMOS; blogsData = DUMMY_BLOGS;
  }

  if (productsData.length > 0) {
    renderBanner(bannerData);
    renderCategories(categoriesData);
    renderProducts(productsData);
    renderPromos();
  }

  // Deep link
  const urlP = new URLSearchParams(window.location.search).get('product') || window.location.hash.slice(1);
  if (urlP) {
    const found = productsData.find(p => String(p.id) === String(urlP) || generateSlug(p.nama) === urlP);
    if (found) openDetail(found.id);
  }
  const pageP = new URLSearchParams(window.location.search).get('page');
  if (pageP) switchPage(pageP);

  // Fetch fresh data
  if (!SCRIPT_URL) return;
  try {
    const bust = SCRIPT_URL + (SCRIPT_URL.includes('?') ? '&' : '?') + 'action=getData&t=' + Date.now();
    const race = await Promise.race([fetch(bust).then(r => r.json()), new Promise((_, rj) => setTimeout(() => rj('timeout'), 12000))]);
    if (race?.status === 'success') {
      const fp = race.data.products || [];
      const fpr = race.data.promos || [];
      const fb = race.data.blogs || [];
      if (fp.length > 0) {
        productsData = fp;
        promosData = fpr;
        blogsData = fb;
        bannerData = race.data.banner || bannerData;
        categoriesData = (race.data.categories || []).length > 0 ? race.data.categories : categoriesData;
      }
      localStorage.setItem('faminis_products_v2', JSON.stringify(productsData));
      localStorage.setItem('faminis_promos_v2', JSON.stringify(promosData));
      localStorage.setItem('faminis_blogs_v1', JSON.stringify(blogsData));
      localStorage.setItem('faminis_banner_v2', JSON.stringify(bannerData));
      localStorage.setItem('faminis_cats_v2', JSON.stringify(categoriesData));
      renderBanner(bannerData);
      renderCategories(categoriesData);
      renderProducts(productsData);
      renderPromos();
      
      const activePage = document.querySelector('.page.active');
      if (activePage && activePage.id === 'page-blog') renderBlog();
      const urlP2 = new URLSearchParams(window.location.search).get('product') || window.location.hash.slice(1);
      if (urlP2) {
         const found = productsData.find(p => String(p.id) === String(urlP2) || generateSlug(p.nama) === urlP2);
         if (found) openDetail(found.id);
      }
      const pageP2 = new URLSearchParams(window.location.search).get('page');
      if (pageP2) switchPage(pageP2);
    }
  } catch (e) { 
    console.warn('Revalidation failed.', e);
    if (productsData.length === 0) {
      renderProducts([]);
    }
  }
};

window.addEventListener('popstate', (e) => {
  const urlP = new URLSearchParams(window.location.search).get('product');
  if (urlP) {
    const found = productsData.find(p => String(p.id) === String(urlP) || generateSlug(p.nama) === urlP);
    if (found) openDetail(found.id);
  } else {
    const activePage = document.querySelector('.page.active');
    if (activePage && activePage.id === 'page-detail') {
      switchPage('home');
    }
  }
});

function handleScrollStickyButton() {
  const btn = document.getElementById('btn-add-cart');
  const wrapper = document.getElementById('add-cart-wrapper');
  if (!btn || !wrapper) return;
  const activePage = document.querySelector('.page.active');
  if (activePage && activePage.id === 'page-detail') {
    const rect = wrapper.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    if (rect.top + 52 > viewportHeight - 74) {
      btn.classList.add('floating');
    } else {
      btn.classList.remove('floating');
    }
  } else {
    btn.classList.remove('floating');
  }
}
window.addEventListener('scroll', handleScrollStickyButton);
