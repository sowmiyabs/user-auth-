const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

// Load .env from project root or src folder when not in production
if (process.env.NODE_ENV !== "production") {
  const rootEnv = path.join(__dirname, "..", ".env");
  const srcEnv = path.join(__dirname, ".env");
  if (fs.existsSync(rootEnv)) {
    dotenv.config({ path: rootEnv });
  } else if (fs.existsSync(srcEnv)) {
    dotenv.config({ path: srcEnv });
  } else {
    dotenv.config();
  }
}

// Accept either MONGO_URI or MONGODB_URI for compatibility
const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
if (!mongoUri) {
  console.error("ERROR: MONGO_URI (or MONGODB_URI) environment variable is not set!");
  process.exit(1);
}

const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
