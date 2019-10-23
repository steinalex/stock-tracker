const express = require("express");
const router = express.Router();
router.get("/", res => {
  res.send({ response: "Server up" }).status(200);
});
module.exports = router;
