const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/', adminController.homeAdmin);

router.get('/articles', adminController.showArticles);

router.get('/users_list', adminController.showUsersList);

router.get('/contact', adminController.showContactMess);

router.get('/add_articles', adminController.homeArticles);

router.get('/update', adminController.updateArticles);

router.get('/delete', adminController.deleteArticles);

router.post('/update', adminController.updatePostArticles);

router.post('/add_articles', adminController.addArticles)
     
module.exports = router