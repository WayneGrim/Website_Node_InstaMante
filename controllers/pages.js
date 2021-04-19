const PagesForms = require("../models/pagesModel");

exports.pagesHome = (req, res) => {
    res.render('pages/index')
}

exports.pagesContact = (req, res) => {
    res.render('pages/contact');
}

exports.pagesLogIn = (req, res) => {
    res.render('pages/login');
}

exports.pagesAddPhoto = (req, res) => {
    res.render('pages/addPhoto');
}

exports.pagesRegister = (req, res) => {
    res.render('pages/register');
}

exports.pagesMantes = (req, res) => {
    res.render('pages/catMantes');
}

exports.pagesElevages = (req, res) => {
    res.render('pages/catElevage');
}

exports.pagesTerras = (req, res) => {
    res.render('pages/catTerra');
}

exports.addContact = (req, res) =>{
    PagesForms.addContact(req, res)
}