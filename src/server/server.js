const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

// Correctly configure CORS
app.use(cors({
    origin: "http://localhost:3000", // Allow frontend to access backend
    methods: "GET,POST",  // Allow required methods
    allowedHeaders: "Content-Type", // Allow specific headers
}));

app.use(express.json());

app.post("/execute", async (req, res) => {
    try {
        const response = await axios.post("https://api.jdoodle.com/v1/execute", req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error calling JDoodle API" });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
