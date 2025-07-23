import { sendEmail } from "../infrastructure/emailService.js";
import { welcomeEmailTemplate } from "../templates/welcomeEmail.js";
import { kelulusanEmailTemplate } from "../templates/kelulusanEmail.js";

export const handleAkunDibuat = async (payload) => {
  const { email, nama } = payload;
  await sendEmail({
    to: email,
    subject: "Selamat Datang di PMB STTC!",
    htmlBody: welcomeEmailTemplate(nama),
  });
};

export const handlePendaftaranBerhasil = async (payload) => {
  const { email, nama, nomorPendaftaran } = payload;
  await sendEmail({
    to: email,
    subject: "Pendaftaran Berhasil Diajukan",
    htmlBody: `<p>Halo ${nama}, pendaftaran Anda dengan nomor ${nomorPendaftaran} telah berhasil kami terima.</p>`,
  });
};

export const handleHasilSeleksi = async (payload) => {
  const { email, nama, statusKelulusan } = payload;
  await sendEmail({
    to: email,
    subject: "Pengumuman Hasil Seleksi PMB STTC",
    htmlBody: kelulusanEmailTemplate(nama, statusKelulusan),
  });
};

export const handleOtherMessage = async (payload) => {
  const { to, subject, htmlBody } = payload;
  await sendEmail({
    to: to,
    subject: subject,
    htmlBody: htmlBody,
  });
};
