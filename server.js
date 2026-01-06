// import express, { json } from "express";
// const app = express();

// // Parse JSON bodies
// app.use(json());

// // Webhook endpoint
// app.post("/webhook", (req, res) => {
//   const event = req.body;

//   console.log("Webhook received:");
//   console.log(event);

//   // Always respond quickly
//   res.status(200).send("OK");
// });

// app.listen(3000, () => {
//   console.log("Webhook server listening on port 3000");
// });


import express from "express";

const app = express();

// Parse JSON bodies
app.use(express.json());

// Parse form-encoded bodies (GitHub fallback)
app.use(express.urlencoded({ extended: true }));

app.post("/webhook", (req, res) => {
  console.log("Headers:", req.headers["content-type"]);
  console.log("GitHub Event:", req.headers["x-github-event"]);
  console.log("Webhook received:");
  console.log(req.body);

  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Webhook server listening on port 3000");
});
