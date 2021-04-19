const mysql = require("mysql");
const AuthUser = require("../models/auth");
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.login = async (req, res) => {
    AuthUser.userLogin(req, res)
}

exports.register = (req, res) => {
    AuthUser.userRegister(req, res)
}


