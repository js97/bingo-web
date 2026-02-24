const express = require("express");
const path = require("path");

const { questions } = require("./data/assetLoader.js");

const app = express();
const PORT = 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

function getRandomQuestions(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

app.get("/api/questions", (req, res) => {
  const randomSet = getRandomQuestions(questions, 16);
  res.json(randomSet);
});

// Start server
app.listen(PORT, () => {
  console.log(`Bingo app running at http://localhost:${PORT}`);
});