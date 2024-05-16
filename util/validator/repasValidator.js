const {check } = require('express-validator');
const {validatorMiddleware} = require('../../Middlewares/validatorMiddleware');

exports.repasValidator = [
    check('nom', 'Le nom du repas est obligatoire').not().isEmpty().isLength({ min: 3 }).withMessage('Le nom du repas doit contenir au moins 3 caractères'),
    check('description', 'La description du repas est obligatoire').not().isEmpty(),
    check('prix', 'Le prix du repas est obligatoire').not().isEmpty(),
    check('prix', 'Le prix du repas doit être un nombre').isNumeric(),
    check('url_image', 'L\'image du repas est obligatoire').not().isEmpty(),
    check('id_categorie', 'La catégorie du repas est obligatoire').not().isEmpty(),
    check('id_categorie', 'La catégorie du repas doit être un nombre').isNumeric(),
    validatorMiddleware
];