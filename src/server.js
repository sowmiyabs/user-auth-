const dotenv = require("dotenv");
const path = require("path");

// Only load .env file in development
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.join(__dirname, "../.env") });
}

// Check if required environment variables are set
if (!process.env.MONGO_URI) {
  console.error("ERROR: MONGO_URI environment variable is not set!");
  process.exit(1);
}

const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
