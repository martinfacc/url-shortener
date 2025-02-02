import express from "express";
import crypto from "crypto";
import { APP_PORT, APP_URL } from "./env.js";
import { sequelize } from "./database.js";
import { Url } from "./models.js";

const app = express();

app.use(express.json());

// Genera un código corto basado en un hash MD5
function generateShortCode(url) {
  return crypto
    .createHash("md5")
    .update(url + Date.now())
    .digest("hex")
    .substring(0, 8); // 16^8 (4294967296) combinaciones
}

// Endpoint para acortar una URL
app.post("/shorten", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "URL requerida" });

    let shortCode = generateShortCode(url);
    await Url.create({ shortCode, url });

    res.status(200).json({ shortUrl: APP_URL + "/" + shortCode });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para redirigir a la URL original
app.get("/:code", async (req, res) => {
  try {
    const { params } = req;
    const { code } = params;
    const url = await Url.findOne({ where: { shortCode: code } });
    if (!url) return res.status(404).json({ error: "URL no encontrada" });
    res.redirect(url.url);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciamos el servidor y mostramos la URL base en la consola
app.listen(APP_PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("🟢", "Conexión a la base de datos establecida");
    await sequelize.sync();
    console.log("🟢", "Modelos sincronizados con la base de datos");
    console.log("🟢", `Servidor corriendo en ${APP_URL}`);
  } catch (error) {
    console.error("🔴", error);
    process.exit(1);
  }
});
