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
User.updateCustomer = (userInfo, result) => {
    let query = "CALL updateCustomer(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    sql.query(query, userInfo, (err) => {
        if (err) {
            result(err)
            return
        }
        result(null)
    })
}
User.findUserName = (userName, result) => {
    let query = "SELECT * from ACCINFO where USERNAME = ?"
    sql.query(query, [userName], (err, data) => {
        if(err){
            result(err, null)
            return
        }
        result(null, data)
    })
}
User.findPhoneNo = (phoneNo, result) => {
    let query = "SELECT * from CUS_PHONENO where PHONENO = ?"
    sql.query(query, [phoneNo], (err, data) => {
        if(err){
            result(err, null)
            return
        }
        result(null, data)
    })
}
User.findEmail = (email, result) => {
    let query = "SELECT * from CUS_EMAIL where EMAIL = ?"
    sql.query(query, [email], (err, data) => {
        if(err){
            result(err, null)
            return
        }
        result(null, data)
    })
}
User.findSsn = (ssn, result) => {
    let query = "SELECT * from CUSTOMER where SSN = ?"
    sql.query(query, [ssn], (err, data) => {
        if(err){
            result(err, null)
            return
        }
        result(null, data)
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
User.getPointPacket = (id, result) => {
    let query = "CALL getListPointPacket(?)"
    sql.query(query, id, (err, data) => {
        if (err) {
            result(err, null)
            return
        }
        result(null, data)
    })
}
User.getSupport = (result) => {
    let query = "SELECT * FROM SUPSTAFF, STEMAIL, STPHONENO WHERE SUPSTAFF.STAFFID = STEMAIL.STAFFID AND SUPSTAFF.STAFFID = STPHONENO.STAFFID"
    sql.query(query, (err, data) => {
        if (err) {
            result(err, null)
            return
        }
        result(null, data)
    })
}
module.exports = User