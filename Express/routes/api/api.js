const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello GET!");
});

router.post("/", (req, res) => {
  res.send("Hello POST!");
});

router.put("/", (req, res) => {
  res.send("Hello PUT!");
});

router.delete("/", (req, res) => {
  res.send("Hello DELETE!");
});
module.exports = router;
