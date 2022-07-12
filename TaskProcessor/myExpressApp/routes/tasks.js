var express = require('express');
var router = express.Router();
const Task = require("../models/Task");

/* GET tasks listing */
router.get('/', async (req, res, next) => {
    const tasks = await Task.find();
    // Some processing here
    res.send(tasks);
});

module.exports = router;