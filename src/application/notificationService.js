import { sendEmail } from "../infrastructure/emailService.js";
import { welcomeEmailTemplate } from "../templates/welcomeEmail.js";
import { kelulusanEmailTemplate } from "../templates/kelulusanEmail.js";

/**
 * Menangani event N1. Kirim Notifikasi Berhasil Buat Akun
 * @param {object} payload - { email, nama }
 */
export const handleAkunDibuat = async (payload) => {
  const { email, nama } = payload;
  await sendEmail({
    to: email,
    subject: "Selamat Datang di PMB STTC!",
    htmlBody: welcomeEmailTemplate(nama),
  });
};

/**
 * Menangani event N2. Kirim Notifikasi Berhasil Daftar
 * @param {object} payload - { email, nama, nomorPendaftaran }
 */
export const handlePendaftaranBerhasil = async (payload) => {
  const { email, nama, nomorPendaftaran } = payload;
  await sendEmail({
    to: email,
    subject: "Pendaftaran Berhasil Diajukan",
    htmlBody: `<p>Halo ${nama}, pendaftaran Anda dengan nomor ${nomorPendaftaran} telah berhasil kami terima.</p>`,
  });
};

/**
 * Menangani event N3. Kirim Notifikasi Kelulusan
 * @param {object} payload - { email, nama, statusKelulusan }
 */
export const handleHasilSeleksi = async (payload) => {
  const { email, nama, statusKelulusan } = payload;
  await sendEmail({
    to: email,
    subject: "Pengumuman Hasil Seleksi PMB STTC",
    htmlBody: kelulusanEmailTemplate(nama, statusKelulusan),
  });
};
