const sql = require('./index')

const User = () => {
    
}
User.insertCustomer = (newUser, result) => {
    let query = "CALL insertCustomer(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    sql.query(query, newUser, (err) => {
        if (err) {
            result(err)
            return
        }
        result(null)
    })
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