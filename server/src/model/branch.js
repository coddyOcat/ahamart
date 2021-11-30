const sql = require('./index')

const Branch = () => {
    
}
Branch.getListBranch = (result) => {
    let query = "SELECT * FROM BRANCH, BRA_PHONENO WHERE BRANCH.BID = BRA_PHONENO.BID"
    sql.query(query, (err, data) => {
        if (err) {
            result(err, null)
            return
        }
        result(null, data)
    })
}

module.exports = Branch