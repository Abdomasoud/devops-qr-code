// pages/api/generate-qr.js
export default async function handler(req, res) {
  const { url } = req.query;

  try {
    const response = await fetch(
      `http://backend:8000/generate-qr/?url=${url}`,
      {
        method: "POST",
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate QR code" });
  }
}
