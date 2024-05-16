const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAbout = async function(req, res) {
     const restaurants = await prisma.restaurant.findMany();
     res.render('about', { title: 'Express', restaurants});
}