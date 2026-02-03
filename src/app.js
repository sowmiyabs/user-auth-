const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routers/authrouter"));

// Root route - helpful for browser checks / health
app.get("/", (req, res) => {
	res.send("Welcome to User Auth JWT API");
});

// 404 handler for unknown routes
app.use((req, res) => {
	res.status(404).json({ message: "Not Found" });
});

module.exports = app;
