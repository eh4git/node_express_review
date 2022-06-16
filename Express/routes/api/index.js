const router = require("express").Router();
const fs = require("fs");
const path = require("path");

router.get("/products", (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "/db/db.json"), "utf8")
  );
  // console.log(typeof products);
  res.send(products.products);
});

router.post("/:id/:name", (req, res) => {
  console.log(req.params);

  res.send("Hello POST!");
});

router.put("/", (req, res) => {
  console.log(req.body);
  res.send("Hello PUT!");
});

router.delete("/", (req, res) => {
  console.log(req.body);
  res.send("Hello DELETE!");
});
module.exports = router;
