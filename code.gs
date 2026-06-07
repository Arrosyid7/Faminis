/**
 * BACKEND GOOGLE APPS SCRIPT - UPDATE v4
 * Nama Toko: Faminis Barokah
 * Deskripsi: Ditambahkan penanganan Alamat Lengkap Pengiriman pada Sheet Pesanan.
 */

// 1. JALANKAN FUNGSI INI PERTAMA KALI UNTUK MEMBUAT / MEMPERBARUI DATABASE
function setupDatabase() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Setup Sheet Kategori
  let sheetKategori = ss.getSheetByName("Kategori");
  if (!sheetKategori) {
    sheetKategori = ss.insertSheet("Kategori");
    sheetKategori.appendRow(["Nama Kategori"]);
    sheetKategori.appendRow(["Gamis"]);
    sheetKategori.appendRow(["Hijab"]);
    sheetKategori.appendRow(["Atasan"]);
    sheetKategori.setFrozenRows(1);
  }
  
  // Setup Sheet Produk
  let sheetProduk = ss.getSheetByName("Produk");
  if (!sheetProduk) {
    sheetProduk = ss.insertSheet("Produk");
    sheetProduk.appendRow(["ID", "Kategori", "Nama", "Deskripsi", "Harga", "Gambar", "Warna", "Ukuran", "Stok"]);
    sheetProduk.appendRow(["P001", "Gamis", "Gamis Syar'i Faminis Barokah", "Gamis muslimah eksklusif dari bahan wolfis premium grade A. Tekstur serat kain halus, sangat sejuk saat dikenakan, jatuh anggun di badan, dan tidak menerawang. Cocok digunakan untuk acara formal maupun daily wear.", 150000, "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&w=500&q=60, https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=60", "Mocca,Hitam,Maroon,Navy", "S,M,L,XL", 50]);
    sheetProduk.appendRow(["P002", "Hijab", "Pashmina Ceruty Babydoll", "Pashmina ceruty premium bertekstur pasir lembut berukuran 175x75 cm. Mudah dibentuk, tegak di dahi, tidak gampang bergeser.", 45000, "https://images.unsplash.com/photo-1607583643358-3011a68132d7?auto=format&fit=crop&w=500&q=60", "Dusty Pink,Mocca,Hitam,Abu-Abu", "All Size", 120]);
    sheetProduk.appendRow(["P003", "Atasan", "Tunik Motif Bunga Barokah", "Tunik panjang elegan bermotif floral nan manis. Memakai bahan rayon viscose berkualitas tinggi yang terkenal dingin dan berdaya serap tinggi.", 120000, "https://images.unsplash.com/photo-1515347619362-73bc3ee22f51?auto=format&fit=crop&w=500&q=60, https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=60", "Putih Sifon,Soft Blue", "L,XL", 35]);
    sheetProduk.appendRow(["P004", "Gamis", "Kaftan Silk Exclusive", "Kaftan berbahan silk satin premium dengan pendar berkilau mewah. Nyaman dipakai seharian.", 195000, "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=60", "Rose Gold,Sage Green", "All Size", 15]);
    sheetProduk.setFrozenRows(1);
  }

  // Setup Sheet Promo
  let sheetPromo = ss.getSheetByName("Promo");
  if (!sheetPromo) {
    sheetPromo = ss.insertSheet("Promo");
    sheetPromo.appendRow(["ID", "Judul", "Gambar", "Link"]);
    sheetPromo.appendRow(["PR01", "TikTok Live Sale: Diskon 30% Spesial Hijab!", "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80", "https://tiktok.com/@faminisbarokah"]);
    sheetPromo.appendRow(["PR02", "Promo Jumat Berkah - Diskon Gamis Offline", "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", "#"]);
    sheetPromo.setFrozenRows(1);
  }

  // Setup Sheet Banner
  let sheetBanner = ss.getSheetByName("Banner");
  if (!sheetBanner) {
    sheetBanner = ss.insertSheet("Banner");
    sheetBanner.appendRow(["Badge", "Judul", "Subjudul", "Tombol_Teks"]);
    sheetBanner.appendRow([
      "EDISI BARU", 
      "Gaya Anggun & Syar'i Menawan", 
      "Diskon s/d 50% Koleksi Tunik & Gamis", 
      "Lihat Promo"
    ]);
    sheetBanner.setFrozenRows(1);
  }

  // Setup Sheet Pesanan (DENGAN KOLOM ALAMAT LENGKAP)
  let sheetPesanan = ss.getSheetByName("Pesanan");
  if (!sheetPesanan) {
    sheetPesanan = ss.insertSheet("Pesanan");
    sheetPesanan.setFrozenRows(1);
  }
  // Paksa agar kolom pesanan memiliki urutan header yang sesuai dengan format checkout baru
  sheetPesanan.getRange(1, 1, 1, 7).setValues([["Tanggal", "Nama Pelanggan", "No WA/Telepon", "Alamat Lengkap", "Detail Pesanan", "Total", "Status"]]);

  SpreadsheetApp.getUi().alert("Sinkronisasi Database Sukses! Header Sheet 'Pesanan' telah disesuaikan dengan Alamat Lengkap.");
}

// 2. FUNGSI AMBIL DATA (GET)
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Ambil Data Kategori
  const sheetKategori = ss.getSheetByName("Kategori");
  const categories = [];
  if (sheetKategori) {
    const dataKategori = sheetKategori.getDataRange().getValues();
    for (let i = 1; i < dataKategori.length; i++) {
      if (dataKategori[i][0]) {
        categories.push(dataKategori[i][0].toString().trim());
      }
    }
  }

  // Ambil Data Produk
  const sheetProduk = ss.getSheetByName("Produk");
  const dataProduk = sheetProduk.getDataRange().getValues();
  const headersProduk = dataProduk[0];
  const products = [];
  for (let i = 1; i < dataProduk.length; i++) {
    let obj = {};
    for (let j = 0; j < headersProduk.length; j++) {
      let key = headersProduk[j].toLowerCase();
      let value = dataProduk[i][j];
      if (key === 'warna' || key === 'ukuran') {
        obj[key] = value ? value.toString().split(',').map(s => s.trim()) : [];
      } else {
        obj[key] = value;
      }
    }
    products.push(obj);
  }

  // Ambil Data Promo List
  const sheetPromo = ss.getSheetByName("Promo");
  const dataPromo = sheetPromo.getDataRange().getValues();
  const headersPromo = dataPromo[0];
  const promos = [];
  for (let i = 1; i < dataPromo.length; i++) {
    let obj = {};
    for (let j = 0; j < headersPromo.length; j++) {
      obj[headersPromo[j].toLowerCase()] = dataPromo[i][j];
    }
    promos.push(obj);
  }

  // Ambil Data Banner Utama Home
  const sheetBanner = ss.getSheetByName("Banner");
  let bannerObj = {
    badge: "EDISI BARU",
    judul: "Gaya Anggun & Syar'i Menawan",
    subjudul: "Diskon s/d 50% Koleksi Tunik & Gamis",
    tombol_teks: "Lihat Promo"
  };
  
  if (sheetBanner && sheetBanner.getLastRow() > 1) {
    const dataBanner = sheetBanner.getDataRange().getValues();
    const row = dataBanner[1];
    bannerObj = {
      badge: row[0] || "EDISI BARU",
      judul: row[1] || "Gaya Anggun & Syar'i Menawan",
      subjudul: row[2] || "Diskon s/d 50% Koleksi Tunik & Gamis",
      tombol_teks: row[3] || "Lihat Promo"
    };
  }

  const result = {
    status: "success",
    data: {
      products: products,
      promos: promos,
      banner: bannerObj,
      categories: categories
    }
  };

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// 3. FUNGSI SIMPAN PESANAN (POST)
function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheetPesanan = ss.getSheetByName("Pesanan");
    const requestData = JSON.parse(e.postData.contents);
    const tanggal = new Date();
    
    let detailString = "";
    requestData.items.forEach(item => {
       detailString += `- ${item.nama} (${item.warna || 'Default'}, ${item.ukuran || 'All Size'}) x${item.qty} = Rp ${item.harga * item.qty}\n`;
    });

    // Menambahkan baris dengan susunan baru yang menyertakan data Alamat Lengkap
    sheetPesanan.appendRow([
      tanggal,
      requestData.nama_pelanggan || "Tanpa Nama",
      requestData.no_wa || "-",
      requestData.alamat_lengkap || "Tidak ada alamat",
      detailString,
      requestData.total,
      "Pesanan Baru"
    ]);

    return ContentService.createTextOutput(JSON.stringify({status: "success", message: "Pesanan masuk ke sistem"}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
