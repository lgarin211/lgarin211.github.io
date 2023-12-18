document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan elemen loading
    const loadingElement = document.querySelector('.loading');

    // Menghilangkan elemen loading dengan mengatur display menjadi none
    loadingElement.style.display = 'none';

    // Menampilkan konten setelah halaman dimuat dengan mengatur display menjadi block
    document.body.style.display = 'block';
  });
  var balm = ''
  var van = [
    ['Elerning Sunitsuga', './assets/img/portfolio/Esug.png', 'web', 'Website Proses Pemberian Tugas Dan Penilayan'],
    ['ETTPAD', './assets/img/portfolio/etppad.png', 'web App', 'Aplikasi Pengolahan Iuran TWP TNI AD'],
    ['IOT Kelembatan Tanah(Smartbe)', './assets/img/portfolio/IOTSMKN4.png', 'web Desktop', 'Aplikasi Untuk Memantau Kondisi Tanah dan tumbuhan'],
    ['Pembayaran SPP', './assets/img/portfolio/SPP.png', 'web Desktop', 'Aplikasi Untuk Melakukan Pembayaran SPP '],
    ['17 2022 - RTB', './assets/img/portfolio/pp (1).jpg', 'gal', '17 Agustus 2022 bersama Artemis'],
    ['PPTI BCA', './assets/img/portfolio/pp (2).jpg', 'gal', 'Berfoto Di Galery BCA Lerning Institude'],
    ['Foto Gunung Salah', './assets/img/portfolio/pp (3).jpg', 'gal', 'Berfoto Dengan Background Gunung Salak'],
    ['Berdiam Dalam Kumpulan Orang-Orang Hebat', './assets/img/portfolio/pp (5).jpg', 'gal', 'berfoto Bersama Semua Teman Teman Hebatku'],
    ['Berdiam Kisah Mahasiswa', './assets/img/portfolio/pp (6).jpg', 'gal', 'berfoto Orang Orang Kotak'],
    ['Bersama RPL 1 2022', './assets/img/portfolio/wa (1).jpg', 'gal', 'Bersama Hal yang Tak terlupakan'],
    ['Expo di Makasar', './assets/img/portfolio/wa (2).jpg', 'gal', 'Terpilih Sebagai Peserta Expo Nasional di GOA makasar'],
    ['Pionering Garuda', './assets/img/portfolio/wa (3).jpg', 'gal', 'Sebuah Pionering Garduda dan aku'],
    ['Momend Termegah', './assets/img/portfolio/wa (4).jpg', 'gal', 'Hal Termegah Di Pramuka Terakhirku'],
    ['Bukan Pantai', './assets/img/portfolio/wa (5).jpg', 'gal', 'Main Di Kebunraya Bogor'],
    ['Balkot Bogor', './assets/img/portfolio/wa (6).jpg', 'gal', 'Abis Nugas Di Balai Kota Bogor'],
    ['Semangat ASIA', './assets/img/portfolio/wa (7).jpg', 'gal', 'Awal Pagi Hari bersam Kreasi ASIA'],
    ['Para Programer', './assets/img/portfolio/wa (9).jpg', 'gal', 'Mereka yang Tidak Terlupakan'],
    ['Induksi PPTI 15', './assets/img/portfolio/ARte.jpg', 'gal', "Bersama Teman Teman Baru Berkenalan dan Berbagi"],
    ['BINUS', './assets/img/portfolio/ranma (1).jpg', 'gal', "Pertama Kali ke Binus Anggek"],
    ['GALLERY BLI', './assets/img/portfolio/ranma (4).jpg', 'gal', "Berfoto di GALLERY TEMPAT KU BELAJAR"],
    ['~', './assets/img/hero-bg1.jpg', 'gal', "~"],
    ['KOTAK', './assets/img/VAST/pat.jpg', 'gal', "YA begitulah ya"],
    ['360<sup>0</sup> WEBSITE', './assets/img/portfolio/360WEB.png', 'web', 'WEBSITE 360 FOR SMKN 4 BOGOR'],
    ['BUKA.in', './assets/img/portfolio/BUKAIN.png', 'app', 'APLIKAI LINK SORTER'],
    ['JALA', './assets/img/portfolio/JALA.png', 'app', 'APLIKAI DEMO PEMESANAN MAKANAN'],
    ['CARD FOR ALL', './assets/img/portfolio/CARDAPPR.png', 'web', 'KARTU UCAPAN SELAMAT DENGAN MUSIC'],
    ['WEB JENSHIN', './assets/img/portfolio/JENSIN.png', 'web', 'WEBSITE JENSHIN IMPACT TUGAS HCI'],
    ['JAVA PROJECT', './assets/img/portfolio/JAVAOOP.png', 'Desktop', 'APLIKASI KASIR SEDERHANA'],
    ['DKAMAR MOBILE', 'https://play-lh.googleusercontent.com/zkap_ztciLrBryUNUlcTWcFRnIhrhXsI30J11acs3NJ8Jv5zpmzh1DbfH4dE5dsTAg=w2560-h1440-rw', 'App', 'APLIKASI AI Kamar'],
    ['BANK CINTA DAMAI', 'https://play-lh.googleusercontent.com/RAky5qScxsK1mZDAmvk0-9KZiza7XC6Uim_A7eKy1_uBrNNTkBKLhxJXGRJyhfYMiufj=w2560-h1440-rw', 'App', 'APLIKASI Kamar Simpel'],
    ['AI EYE', './assets/img/portfolio/4.png', 'App', 'APLIKASI AI EYES'],
  ]
  van = van.sort(() => Math.random() - 0.5)
  for (let i = 0; i < van.length; i++) {
    bal = van[i]
    if (bal[2] == 'gal') {
      bal[2] = 'web Desktop'
    } else {
      balm = balm +
        `  <div class="col-lg-4 col-md-6 portfolio-item ` + bal[2] + ` rounded">
              <div class="portfolio-wrap rounded">
                <img src="` + bal[1] + `" class="img-fluid" alt="Agustinus Pardamean Lumban Tobing - ` + bal[0] + bal[3] + `">
                <div class="portfolio-info">
                  <h4>` + bal[0] + `</h4>
                  <p>` + bal[3] + `</p>
                  <div class="portfolio-links">
                    <a href="` + bal[1] + `" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox" title="` + i + `">
                      <i class="bx bx-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              </div>
            `
    }
    document.getElementById('portfolio-counter').innerHTML = balm
  }
  // load galery
  function lodp() {
    for (let i = 0; i < van.length; i++) {
      bal = van[i]
      if (bal[2] == 'gal') {
        balm = balm +
          `  <div class="col-lg-4 col-md-6 portfolio-item ` + bal[2] + `">
              <div class="portfolio-wrap">
                <img src="` + bal[1] + `" class="img-fluid" alt="Agustinus Pardamean Lumban Tobing - ` + bal[0] + bal[3] + `">
                <div class="portfolio-info">
                  <h4>` + bal[0] + `</h4>
                  <p>` + bal[3] + `</p>
                  <div class="portfolio-links">
                    <a href="` + bal[1] + `" target="_blank" data-gallery="portfolioGallery" class="portfolio-lightbox" title="` + i + `">
                      <i class="bx bx-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              </div>
            `
      }
    }
  }