const express = require('express');
const checkNumbers = require('../controllers/check.controller');
const router = express.Router();

router.get('/', checkNumbers);

module.exports = router;

