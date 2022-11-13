var express = require("express");
var router = express.Router();
const { getUsers } = require("../controllers/userController");

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get("/", getUsers);

module.exports = router;
