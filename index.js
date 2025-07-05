const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const headlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Discover Delicious Moments at Cake & Co in Mumbai!",
  "Mumbai Loves Cake & Co - Here's Why!",
  "Unwrap Happiness at Cake & Co, Mumbai's Dessert Destination",
];

app.post("/business-data", (req, res) => {
  const { name, location } = req.body;

  const data = {
    rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
    reviews: Math.floor(Math.random() * 200 + 50),
    headline: headlines[Math.floor(Math.random() * headlines.length)],
  };

  res.json(data);
});

app.get("/regenerate-headline", (req, res) => {
  const headline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline });
});
app.get("/", (req, res) => {
  res.send("Backend is up and running 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
