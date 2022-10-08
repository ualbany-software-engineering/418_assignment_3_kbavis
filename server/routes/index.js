var express = require("express");
var router = express.Router();
const app = express();
const path = require("path");
/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Expressssss" });
// });

var dir = "D:\\Code\\Workplace\\Express-React-Application\\client";
router.get("/add/:firstNumber/and/:secondNumber", (req, res) => {
  console.log(req.params.firstNumber + req.params.secondNumber);
  let firstNo = parseInt(req.params.firstNumber),
    secondNo = parseInt(req.params.secondNumber);
  res.json({ Addition: firstNo + secondNo });
});

router.use(express.static(path.join(dir, "build")));
router.get("*", (req, res) => {
  res.sendFile(path.resolve(dir, "public", "index.html"));
});

module.exports = router;
