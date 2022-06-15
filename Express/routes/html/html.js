const path = require("path");

const router = require("express").Router();

router.get("/otherPage", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/otherPage.html"));
});

router.get("*", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname, "../../public/index.html");
});

module.exports = router;
