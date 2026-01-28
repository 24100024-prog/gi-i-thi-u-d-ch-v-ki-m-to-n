const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Handle contact form
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact form data:");
  console.log(name, email, message);

  res.send("Thank you for contacting us!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
