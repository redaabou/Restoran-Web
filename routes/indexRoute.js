const router = require('express').Router();
const {getAll, addEmail} = require('../controllers/indexController');

router.route("/").get(getAll).post(addEmail)


module.exports = router;
