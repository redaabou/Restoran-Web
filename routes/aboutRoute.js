const router = require('express').Router();
const {getAbout} = require('../controllers/aboutController');

router.get('/about', getAbout);

module.exports = router;