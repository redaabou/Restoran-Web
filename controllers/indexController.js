const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const nodemailer = require('nodemailer');

exports.getAll = async function(req, res) {
    const repasList = await prisma.repas.findMany({include: {category: true}});
    const employees = await prisma.employee.findMany();
    const restaurants = await prisma.restaurant.findMany();
    res.render('index', { title: 'index', repasList, employees, restaurants});
}

exports.addEmail = async function(req, res) {
    const { email } = req.body;
    console.log(email);
    const subscriber = await prisma.subscriber.create({
        data: { email },
    });

    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true, // Use true for port 465, false for all other ports
        auth: {
            user: process.env.smtpUser,
            pass: process.env.smtpPass,
        },
    });

    await transporter.sendMail({
        from: 'aprenant2@talents4starups.com',
        to: subscriber.email,
        subject: 'Welcome to our Newsletter!',
        text: 'Thank you for subscribing to our newsletter. You will now receive regular updates from us.'
    });
    res.redirect('/');
}