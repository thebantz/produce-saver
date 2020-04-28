const express = require('express');
const index = require('../controllers/movie.js');

const router = express.Router();

router.route('/movies.json').get(index);

module.exports = router;