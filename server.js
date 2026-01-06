import express, { json } from "express";
const app = express();

// Parse JSON bodies
app.use(json());

// Webhook endpoint
app.post("/webhook", (req, res) => {
  const event = req.body;

  console.log("Webhook received:");
  console.log(event);

  // Always respond quickly
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Webhook server listening on port 3000");
});
