import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 4000;
const mypassword = "mypass123";

let userInfo = {
  password: "",
};

app.use(bodyParser.urlencoded({ extended: true }));

function saveToDb(req, res, next) {
  if (req.body && req.body.password) {
    userInfo.password = req.body.password;
    console.log("Password", userInfo.password);
  }
  next();
}

app.use(saveToDb);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/", (req, res) => {
  const user = req.body.password;
  console.log("دخل المستخدم:", user);

  if (user === mypassword) {
    res.sendFile(path.join(__dirname, "public", "secret.html"));
  } else {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
