<!--<?php
// Mengatur koneksi database
$servername = "103.219.251.244";
$username = "lahorasm_root";
$password = "@Lgarin211";
$dbname = "lahorasm_root";

try {
    // Membuat koneksi
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Membuat perintah SQL untuk dijalankan
    $sql = "INSERT INTO trafik (id, tgl) VALUES (NULL, current_timestamp())";

    // Menjalankan perintah SQL
    $conn->query($sql);

    // Menampilkan pesan berhasil
    // echo "Data berhasil ditambahkan.";
} catch (Exception $e) {
    // Menampilkan pesan kesalahan
    echo "Terjadi kesalahan: " . $e->getMessage();
}

// Menutup koneksi
$conn->close();
?>
-->