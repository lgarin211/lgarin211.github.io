<?php
// Mendapatkan tanggal hari ini
$today = date('d');

// Menentukan nama panggilan berdasarkan tanggal hari ini
$Nama="Josua";
$namaPanggilan = str_repeat(date($Nama[0]), 2);

// Menampilkan pesan berdasarkan jumlah huruf nama panggilan
if (strlen($namaPanggilan) == $today) {
    echo "Berhasil";
} elseif (strlen($namaPanggilan) < $today) {
    echo "Sedikit lagi";
} else {
    echo "Coba lagi";
}

echo "\n<br>";

// Daftar anggota kelompok
$anggotaKelompok = array(
    array('Nama' => 'Alfa', 'NIM' => '123456'),
    array('Nama' => 'Agus', 'NIM' => '234567'),
    array('Nama' => 'Alfa', 'NIM' => '345678'),
    array('Nama' => 'Anggota4', 'NIM' => '456789'),
    array('Nama' => 'Anggota5', 'NIM' => '567890')
);

// Menampilkan peran anggota kelompok berdasarkan NIM
foreach ($anggotaKelompok as $anggota) {
    $peran = ($anggota['NIM'] % 2 == 0) ? "Pengembang Back-end" : "Front-end Developer";
    echo $anggota['Nama'] . " - " . $peran . "\n <br>";
}

echo "\n";

// Nama depan Anda
$namaDepan = "A";

// Memisahkan setiap huruf dalam nama depan menjadi array
$namaDepanArray = str_split($namaDepan);

// Daftar kota
$kota = array(
    "Lampung",
    "Riau",
    "Jambi",
    "Bengkulu",
    "Makassar",
    "Kendari",
    "Gorontalo",
    "Samarinda",
    "Papua",
    "Nusa Tenggara Barat"
);

$tujuan = "Jawa Timur"; // Default jika tidak ditemukan provinsi tujuan

// Menentukan tujuan berdasarkan hukum pertama
foreach ($kota as $k) {
    if (strtolower($k[0]) == strtolower($namaDepanArray[0])) {
        $tujuan = $k;
        break;
    }
}

// Jika hukum pertama tidak membuahkan hasil, mencari berdasarkan huruf kedua dst.
if ($tujuan == "Jawa Timur") {
    foreach ($kota as $k) {
        $kotaArray = str_split($k);
        foreach ($namaDepanArray as $huruf) {
            if (in_array(strtolower($huruf), $kotaArray)) {
                $tujuan = $k;
                break 2;
            }
        }
    }
}

echo "Anda akan dipindahkan ke: " . $tujuan . "\n";
?>
