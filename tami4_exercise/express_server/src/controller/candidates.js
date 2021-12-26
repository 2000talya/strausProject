const db = require('../db/database')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const GetCandidates = async (req, res) => {
    try {
        const authHeader = await req.headers['authorization'];
        const token = await authHeader.split(' ')[1];
        //Check if jwt token valid
        const validation = await jwt.verify(token, process.env.TOKEN_SECRET);
        if (validation !== undefined) {
            let sql = `SELECT * FROM candidate`;
            //Return all candidates
            await db.all(sql, [], async (err, rows) => {
                res.status(200).json({ success: true, candidates: rows });
            })
        }
    }
    catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}


module.exports = { GetCandidates };