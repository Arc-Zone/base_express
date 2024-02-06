const db = require('../models/database.js')

function home (req, res) {
    /*
        let [rows, fields] = db.query('SELECT * FROM tablename')
    */
    
    res.render('home.ejs')
}

module.exports.home = home