const express = require('express');
const addNumbers = require('../controllers/add.controller');
const router = express.Router();

router.post('/', addNumbers);

module.exports = router;

