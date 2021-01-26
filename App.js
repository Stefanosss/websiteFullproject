var express = require("express");
const app = express();
var firebase = require("firebase");
const firebaseConfig = require("./firebaseConfig");
const path = require("path");
var bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
var cors = require("cors");

app.engine("html", require("ejs").renderFile);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const users = require("./routes/UserRoutes.js");
const remix = require("./routes/remixRoutes.js")

firebase.initializeApp(firebaseConfig);

app.get("/", (req, res) => {
  res.send("welcome to the landing page!");
});
app.use("/authentication", users);
app.use("/remix", remix);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
