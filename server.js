// --- CANLI TUTMA BOTU ---
const https = require('https');
const SITE_URL = 'https://tiktok-clone-9ywo.onrender.com'; // Buraya kendi Render linkini yaz

function keepAlive() {
    https.get(SITE_URL, (res) => {
        // İsteğin başarılı olup olmadığını kontrol eder
    }).on('error', (err) => {
        // Hata durumunda sessizce geçer
    });
}

// Her 5 dakikada bir istek atar
setInterval(keepAlive, 5 * 60 * 1000);
// ------------------------
