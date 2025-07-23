import * as appService from "../application/notificationService.js";

export const handleEvent = async (req, res) => {
  const { eventType, payload } = req.body;

  console.log(`Menerima event: ${eventType}`);

  try {
    switch (eventType) {
      case "AkunBerhasilDibuatEvent":
        await appService.handleAkunDibuat(payload);
        break;
      case "PendaftaranBerhasilDiajukanEvent":
        await appService.handlePendaftaranBerhasil(payload);
        break;
      case "HasilSeleksiDiterbitkanEvent":
        await appService.handleHasilSeleksi(payload);
        break;
      default:
        await appService.handleOtherMessage(payload)
    }

    res.status(200).json({ message: `Event ${eventType} berhasil ditangani.` });
  } catch (error) {
    console.error(`Gagal menangani event ${eventType}:`, error);
    res.status(500).json({ message: "Gagal memproses event." });
  }
};
