var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/login", function (req, res, next) {
  const { username, password } = req.body;
  if (username !== "admin" && password !== "123456") {
    res.json({ status: false });
  } else {
    res.redirect("/elections/");
  }
});

module.exports = router;
