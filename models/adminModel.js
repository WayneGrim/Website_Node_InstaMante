const mysql = require("mysql");
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

class AdminArticles {

    static getAllArticles(req, res) {
        let sqlQuery = 'SELECT * FROM articles';
        db.query(sqlQuery, (err, result) => {
            if (err) throw err;
            console.log(result)
            res.render('pages/admin/articles', { datas: result })
        });
    }

    static getAllUsers(req, res) {
        let sqlQuery = 'SELECT * FROM users';
        db.query(sqlQuery, (err, result) => {
            if (err) throw err;
            console.log(result)
            res.render('pages/admin/users_list', { datausers: result })
        });
    }

    static getAllContactMess(req, res) {
        let sqlQuery = 'SELECT * FROM contact';
        db.query(sqlQuery, (err, result) => {
            if (err) throw err;
            console.log(result)
            res.render('pages/admin/listContact', { datacontact: result })
        });
    }

    static addArticles(req, res) {
        const { titre, description, image } = req.body;

        db.query('INSERT INTO articles SET ?', { titre: titre, description: description, image: image }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                return res.render('pages/admin/add_articles', {
                    messageOk: 'Article posté'
                });
            }
        });
    }

    static updatePostArticles(req, res) {
        let params = [
            req.body,
            req.query.id
        ]

        let sqlQuery = 'UPDATE articles SET ? WHERE id = ?';
        db.query(sqlQuery, params, (err, result) => {
            if (err) throw err;
            res.render('pages/admin/updateArticle', { messageOk: 'Article modifié' })
        });
    }

    static updateArticles(req, res) {
        const idArticle = req.query.id;

        let sqlQuery = 'SELECT * FROM articles WHERE id = ?';
        db.query(sqlQuery, [idArticle], (err, result) => {
            if (err) throw err;
            res.render('pages/admin/updateArticle', { article: result })
        });
    }

    static deleteArticles(req, res) {
        const id = req.query.id;
        let sqlQuery = 'DELETE FROM articles WHERE id = ?';
        db.query(sqlQuery, id, (err, result) => {
            if (err) throw err;
            res.redirect('/admin/articles')
        });
    }
}

module.exports = AdminArticles;