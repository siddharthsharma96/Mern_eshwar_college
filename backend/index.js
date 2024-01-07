const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const details = [
  {
    id: 0,
    date: "2024-01-20",
    title: "Fee",
    type: 2,
    currency: 200,
  },
  {
    id: 1,
    date: "2024-04-20",
    title: "Travell",
    type: 1,
    currency: 50000,
  },
  {
    id: 2,
    date: "2024-01-20",
    title: "Salary",
    type: 2,
    currency: 200000,
  },
];

// Get all users
app.get("/expenses", async (req, res) => {
  try {
    res.json(details);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = details.find((detail) => detail.id === parseInt(id, 10));

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
