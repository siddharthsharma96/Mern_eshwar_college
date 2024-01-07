const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const details = [
  {
    id: 0,
    day: "1",
    month: "Jan",
    title: "Fee",
    type: "credit",
    currency: "200 INR",
  },
  {
    id: 1,
    day: "20",
    month: "Feb",
    title: "Travell",
    type: "Debit",
    currency: "50000 INR",
  },
  {
    id: 2,
    day: "1",
    month: "March",
    title: "Salary",
    type: "credit",
    currency: "200000 INR",
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
    const userId = parseInt(id, 10); // Parse the ID to an integer

    const user = details.find((detail) => detail.id === userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
