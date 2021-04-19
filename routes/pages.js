const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pages')

router.get('/', pagesController.pagesHome);

router.get('/register', pagesController.pagesRegister);

router.get('/login', pagesController.pagesLogIn);

router.get('/add_photo', pagesController.pagesAddPhoto);

router.get('/contact', pagesController.pagesContact);

router.get('/mantes', pagesController.pagesMantes);

router.get('/terrariums', pagesController.pagesTerras);

router.get('/elevages', pagesController.pagesElevages);

router.post('/contact', pagesController.addContact)

module.exports = router;