const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Simple API endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
