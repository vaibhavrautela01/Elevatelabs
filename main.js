const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Task 1 from Vaibhav Rautela");
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});