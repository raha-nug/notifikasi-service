export const kelulusanEmailTemplate = (nama, statusKelulusan) => {
  const pesan =
    statusKelulusan === "LULUS"
      ? "Selamat! Anda dinyatakan LULUS dalam seleksi penerimaan mahasiswa baru. Informasi mengenai daftar ulang akan kami sampaikan selanjutnya."
      : "Kami sampaikan dengan berat hati bahwa Anda dinyatakan TIDAK LULUS dalam seleksi penerimaan mahasiswa baru. Tetap semangat dan jangan menyerah!";

  return `
    <h1>Pengumuman Hasil Seleksi PMB STTC</h1>
    <p>Halo ${nama},</p>
    <p>${pesan}</p>
    <p>Terima kasih atas partisipasi Anda.</p>
  `;
};
