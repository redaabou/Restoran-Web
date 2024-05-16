const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');

exports.AddRepas = async function(req, res) {
    const categories = await prisma.category.findMany();

    res.render('repas', { title: 'Express', categories: categories });
}

const path = require('path');



exports.AddRepasPost = async function(req, res) {
    console.log();
    const repas = await prisma.repas.create({
        data: {
            name: req.body.nom,
            description: req.body.description,
            prix: Number(req.body.prix),
            image: req.body.url_image,
            category_id: Number(req.body.id_categorie)
             
        },
    });
    res.redirect('/');
}


