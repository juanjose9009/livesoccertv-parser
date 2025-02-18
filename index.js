const express = require("express");
const getMatches = require("livesoccertv-parser"); // Asegúrate de que esto es correcto

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para obtener los datos de los partidos
app.get("/partidos", async (req, res) => {
    try {
        const partidos = await getMatches();
        res.json(partidos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los datos" });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
