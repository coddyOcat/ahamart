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
User.insertLoyaltyCard = (Ssn, result) => {
    let query = "CALL Branch_gives_LoyaltyCard_to_Customer(?,?,?,?,?,?)"
    let inp = ["Cus_"+Ssn, Ssn, "bra_hcm_01", "bronze", 0, 0]
    sql.query(query, inp, (err) => {
        if (err) {
            result(err)
            return
        }
        result(null)
    })
}
User.findAcc = (UserName, result) => {
    let query = "SELECT * from ACCINFO where USERNAME = ?"
    sql.query(query, [UserName], (err, data) => {
        if(err){
            result(err, null)
            return
        }
        result(null, data)
    })
}
User.selectCustomerInfo = (id, result) => {
    let query = "CALL getCustomer(?)"
    sql.query(query, id, (err, data) => {
        if (err) {
            result(err, null)
            return
        }
        result(null, data)
    })
}

module.exports = User