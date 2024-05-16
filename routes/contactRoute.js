const router = require('express').Router();
const {getContact} = require('../controllers/contactController');

router.get('/contact', getContact);

module.exports = router;