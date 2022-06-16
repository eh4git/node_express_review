const path = require("path");

const router = require("express").Router();

router.get("/products", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../public/products.html"));
});

router.get("*", (req, res) => {
  // console.log(__dirname);
  // console.log(path.join(__dirname, "../../public/index.html"));
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
