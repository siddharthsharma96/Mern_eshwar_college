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
    desc: "Paid the fee",
    type: 2,
    currency: 200,
  },
  {
    id: 1,
    date: "2024-04-20",
    title: "Travell",
    desc: "Travel Expenses ",
    type: 1,
    currency: 50000,
  },
  {
    id: 2,
    date: "2024-01-20",
    title: "Salary",
    desc: "Salary of SDE ONLY ",
    type: 2,
    currency: 200000,
  },
];

// Get all users
app.get("/expenses", async (req, res) => {
  try {
    res.status(200).json(details);
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
app.post("/expenses", async (req, res) => {
  try {
    const maxId = Math.max(...details.map((expense) => expense.id), 0);
    const { date, title, desc, type, currency } = req.body;

    const newExpense = {
      id: maxId + 1,
      date,
      title,
      desc,
      type,
      currency,
    };

    details.push(newExpense);

    // res.status(201).json(newExpense);
    res.status(201).json("message:Success");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.put("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { date, title, desc, type, currency } = req.body;

    const expenseIndex = details.findIndex(
      (detail) => detail.id === parseInt(id, 10)
    );

    if (expenseIndex === -1) {
      return res.status(404).json({ message: "Expense not found" });
    }

    details[expenseIndex] = {
      id: parseInt(id, 10),
      date,
      title,
      desc,
      type,
      currency,
    };

    // res.json(details[expenseIndex]);
    res.json("message:Success");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.delete("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const expenseIndex = details.findIndex(
      (detail) => detail.id === parseInt(id, 10)
    );

    if (expenseIndex === -1) {
      return res.status(404).json({ message: "Expense not found" });
    }

    const deletedExpense = details.splice(expenseIndex, 1);

    res.json(deletedExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
