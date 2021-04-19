const mysql = require("mysql");
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

class PagesForms {

    static addContact(req, res) {
        const { name, email, objet, description } = req.body;

        db.query('INSERT INTO contact SET ?', { name: name, email: email, objet: objet, description: description }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                return res.render('pages/contact', {
                    messageOk: "Message envoyé à l'administrateur"
                });
            }
        });
    }

    // static addPhoto(req, res) => {
    // const { titre, description, image, categorie } = req.body;


    // if categorie === mantes {
    //     db.query('INSERT INTO photoM SET ?', { titre: titre, description: description, image: image }, (error, results) => {
    //         if (error) {
    //             console.log(error)
    //         } else {
    //             return res.render('pages/admin/add_articles', {
    //                 messageOk: 'Article posté'
    //             });
    //         }

    //     }
    //         if categorie === terrariums {
    //         db.query('INSERT INTO photoT SET ?', { titre: titre, description: description, image: image }, (error, results) => {
    //             if (error) {
    //                 console.log(error)
    //             } else {
    //                 return res.render('pages/admin/terrariums', {
    //                     messageOk: 'Article posté'
    //                 });
    //             }
    //         }
    //         if categorie === elevages {
    //             db.query('INSERT INTO articles SET ?', { titre: titre, description: description, image: image }, (error, results) => {
    //                 if (error) {
    //                     console.log(error)
    //                 } else {
    //                     return res.render('pages/admin/elevages', {
    //                         messageOk: 'Article posté'
    //                     });
    //                 }
    //             });
    //         }


    //     }
    }

    module.exports = PagesForms;