<?php
echo "Nomor 1 \n <br>";
//Nomor 1 Mendapatkan tanggal hari ini
$today = date('d');
// Menentukan nama panggilan berdasarkan tanggal hari ini
$Nama="Josua";
echo "Nama panggilan : ".$Nama."\n <br>";
$namaPanggilan = str_repeat(date($Nama[0]), 2);
// Menampilkan pesan berdasarkan jumlah huruf nama panggilan
if (strlen($namaPanggilan) == $today) {
    echo "Berhasil";
} elseif (strlen($namaPanggilan) < $today) {
    echo "Sedikit lagi";
} else {
    echo "Coba lagi";
}

echo "\n<br><br><br>";






echo "Nomor 2 \n <br>";
//Nomor 2 Daftar anggota kelompok
$anggotaKelompok = array(
    array('Nama' => 'Alvina', 'NIM' => '123456'),
    array('Nama' => 'Agus', 'NIM' => '234567'),
    array('Nama' => 'Alfa', 'NIM' => '345678'),
    array('Nama' => 'Afra', 'NIM' => '456789'),
    array('Nama' => 'Danu', 'NIM' => '567890')
);
// Menampilkan peran anggota kelompok berdasarkan NIM
foreach ($anggotaKelompok as $anggota) {
    if ($anggota['Nama'] == "Afra"){
        $peran="Project Manager";
    }else{
        $peran = ($anggota['NIM'] % 2 == 0) ? "Pengembang Back-end" : "Front-end Developer";
    }
    echo $anggota['Nama'] . " - " . $peran . "\n <br>";
}
echo "\n<br><br><br>";



echo "Nomor 3 \n <br>";
// nomor 3
// Nama depan Anda
$namaDepan = "Agus";
// Memisahkan setiap huruf dalam nama depan menjadi array
$namaDepanArray = str_split($namaDepan);
// Daftar kota
$kota = array(
    "lampung",
    "riau",
    "jambi",
    "bengkulu",
    "makassar",
    "kendari",
    "gorontalo",
    "samarinda",
    "papua",
    "nusa tenggara barat"
);
echo "Nama depan : ".$namaDepan."\n <br>";

foreach ($namaDepanArray as $key => $value) {
    $tujuan = "Jawa Timur"; // Default jika tidak ditemukan provinsi tujuan
    // Mencari nama kota yang diawali huruf yang sama dengan huruf pertama nama depan Anda
    foreach ($kota as $kotaKey => $kotaValue) {
        // to lowwe case value
        if (strtolower($value) == $kotaValue[0]) {
            $tujuan = $kotaValue;
            break;
        }
    }
    echo $value . " - " . $tujuan . "\n <br>";
}


?>
