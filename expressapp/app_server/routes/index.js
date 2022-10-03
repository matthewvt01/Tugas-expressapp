var express = require('express');
var router = express.Router();

//import controller
const ctrlMain = require("../controllers/main")

/* GET home page. */
router.get('/', ctrlMain.index); //routes
/* Get demo page. */
router.get("/demo", ctrlMain.demo);
module.exports = router;
