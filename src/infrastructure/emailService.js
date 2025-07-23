import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587", 10),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


export const sendEmail = async ({ to, subject, htmlBody }) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: to,
    subject: subject,
    html: htmlBody,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email berhasil dikirim: " + info.response);
    return info;
  } catch (error) {
    console.error("Error saat mengirim email:", error);
    throw new Error("Gagal mengirim email notifikasi.");
  }
};
