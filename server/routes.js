const express = require("express");
const router = express.Router();
router.get("/", (_, res) => {
  res.send({ response: "Server up" }).status(200);
});
module.exports = router;
