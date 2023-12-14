const express = require("express");

const { displayMesQuestion } = require("../controllers/mesquestions");

const router = express.Router();

router.get("/displayMesQuestion", displayMesQuestion);

module.exports = router;
