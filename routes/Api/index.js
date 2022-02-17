const express = require('express');
const router = express.Router();

router.use('/products', require('./v1'));

module.exports = router;