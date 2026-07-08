<?php
header("Content-Type: application/xml; charset=utf-8");

$appsScriptUrl = "https://script.google.com/macros/s/AKfycbxPIZD8miWMm4nSM8eJOeB9htfbRSbRgeDeBRXLMAlMWf-HAFsOydRuAYk_6IeZCOOn/exec?action=sitemap";

// Coba ambil sitemap dinamis dari Apps Script
$xml = false;
try {
    $opts = array(
        'http' => array(
            'method' => "GET",
            'header' => "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\r\n",
            'timeout' => 6
        )
    );
    $context = stream_context_create($opts);
    $xml = @file_get_contents($appsScriptUrl, false, $context);
} catch (Exception $e) {
    $xml = false;
}

// Jika gagal mengambil dari Apps Script (misal karena port keluar diblokir hosting gratis),
// gunakan sitemap_static.xml lokal sebagai fallback aman.
if ($xml === false || empty($xml) || strpos($xml, '<urlset') === false) {
    $localFile = __DIR__ . '/sitemap_static.xml';
    if (file_exists($localFile)) {
        $xml = file_get_contents($localFile);
    } else {
        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n" .
               '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n" .
               '  <url><loc>https://faminisbarokah.my.id/</loc><priority>1.0</priority></url>' . "\n" .
               '</urlset>';
    }
}

echo $xml;
?>
