const sql = require('./index')

const User = () => {
    
}

User.select = (result) => {
    let query = "SELECT * FROM customer"
    sql.query( query, (err, res) => {
        if(err) {
            console.log("error: ", err)
            result(err, null)
            return
        }
        if(res.length) {
            result(null, res)
            return
        }
        result({ kind: "not_found" }, null)
    })
}

module.exports = User