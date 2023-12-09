import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hi There</h1>");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
