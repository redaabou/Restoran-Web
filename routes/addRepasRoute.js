const express = require('express');
const router = express.Router();
const {AddRepas, AddRepasPost} = require('../controllers/addRepasController');
const {uploadImage} = require('../Middlewares/multerMiddleware');
const {repasValidator} = require('../util/validator/repasValidator');

router.get('/repas', AddRepas);
router.post('/repas', uploadImage,repasValidator, AddRepasPost);

module.exports = router;
