const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getContact = async function(req, res) {
    const restaurants = await prisma.restaurant.findMany();
    res.render('contact', { title: 'contact', restaurants});
    
};