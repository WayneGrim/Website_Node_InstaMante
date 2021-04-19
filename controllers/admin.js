const AdminArticles = require('../models/adminModel')

exports.homeAdmin = (req, res) => {
    res.render('pages/admin/index')
}

exports.homeArticles = (req, res) => {
    res.render('pages/admin/add_articles')
}

exports.showUsersList = (req, res) => {
    AdminArticles.getAllUsers(req, res)
}

exports.addArticles = (req, res) => {
    AdminArticles.addArticles(req, res)
}

exports.showArticles = (req, res) => {
    AdminArticles.getAllArticles(req, res)
}

exports.showContactMess = (req, res) => {
    AdminArticles.getAllContactMess(req, res)
}

exports.updatePostArticles = (req, res) => {
    AdminArticles.updatePostArticles(req, res)
}

exports.updateArticles = (req, res) => {
    AdminArticles.updateArticles(req, res)
}

exports.deleteArticles = (req, res) => {
    AdminArticles.deleteArticles(req, res)
}
