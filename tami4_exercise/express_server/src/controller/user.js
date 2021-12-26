const db = require('../db/database')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const SignUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        //Hash password before saving
        const salt = await bcrypt.genSalt(10);
        let hashPassword = await bcrypt.hash(password, salt);
        //Save in the DB
        let sql = 'INSERT INTO user (username , email , password) VALUES (?,?,?)';
        let params = [username, email, hashPassword];
        await db.run(sql, params)
        //Send user token in JWT
        const token = await jwt.sign({ username: username, email: email, hashPassword: hashPassword }, process.env.TOKEN_SECRET);
        await res.status(200).json({ success: true, token: token });
    }
    catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}

const SignIn = async (req, res) => {
    try {
        const { username, password } = req.body;
        let params = [username];
        //Find user in DB
        let sql = `SELECT * FROM user WHERE username=?`;
        await db.get(sql, params, async (err, row) => {
            //Validate the password
            const validPassword = await bcrypt.compare(password, row.password);
            if (validPassword) {
                //Send user token in JWT
                const token = await jwt.sign({ username: row.username, email: row.email, password: row.password }, process.env.TOKEN_SECRET);
                await res.status(200).json({ success: true, token: token });
            }
        })
    }
    catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}

module.exports = { SignIn, SignUp };