document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var closeButton = document.getElementById('close-popup');

    // Mengambil nilai parameter "nama" dari URL
    var urlParams = new URLSearchParams(window.location.search);
    var nama = urlParams.get('nama');

    // Memperbarui teks h1 dengan nilai "nama" dari URL
    var h1 = popup.querySelector('h2');
    h1.textContent = nama ? nama : "Selamat datang!";

    // Menampilkan popup saat halaman dimuat
    popup.style.display = 'flex';

    // Menutup popup saat tombol ditutup diklik
    closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
    });
});