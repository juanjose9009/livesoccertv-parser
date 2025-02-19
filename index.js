const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = "765a9fa849d61d0c0f520db4fceeb55e";  // 📌 Reemplaza con tu API Key

app.get("/", (req, res) => {
    res.send("API en funcionamiento ✅");
});

// 🔹 Obtener partidos de equipos españoles
app.get("/partidos", async (req, res) => {
    try {
        console.log("📌 Obteniendo datos de API-Football...");

        const response = await axios.get("https://v3.football.api-sports.io/fixtures", {
            params: {
                league: "140,141,2,3,4", // LaLiga, Segunda, Champions, Copa del Rey, Supercopa
                season: "2024"
            },
            headers: { "x-apisports-key": API_KEY }
        });

        const partidos = response.data.response.map(match => ({
            homeTeam: match.teams.home.name,
            awayTeam: match.teams.away.name,
            date: match.fixture.date
        }));

        console.log("✅ Partidos obtenidos:", partidos);
        res.json(partidos);
    } catch (error) {
        console.error("❌ Error al obtener los datos:", error);
        res.status(500).json({ error: "No se pudo obtener los datos." });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Servidor corriendo en http://0.0.0.0:${PORT}`);
});
