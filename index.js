const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("API en funcionamiento ✅");
});

// 🔹 RUTA PARA OBTENER PARTIDOS
app.get("/partidos", async (req, res) => {
    try {
        console.log("📌 Intentando obtener los datos...");
        
        // 🔹 DATOS DE PRUEBA
        const partidos = [
            { homeTeam: "Real Madrid", awayTeam: "Barcelona", date: "2025-02-20" },
            { homeTeam: "Sevilla", awayTeam: "Atlético", date: "2025-02-21" }
        ];

        console.log("✅ Datos obtenidos correctamente:", partidos);
        res.json(partidos);
    } catch (error) {
        console.error("❌ Error al obtener los datos:", error);
        res.status(500).json({ error: "Error al obtener los datos" });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Servidor corriendo en http://0.0.0.0:${PORT}`);
});
