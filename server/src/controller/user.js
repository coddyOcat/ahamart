const User = require('../model/user')
const bcrypt = require('bcryptjs')

// Ma hoa mat khau
const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
        if (err)
            reject(err);
  
        bcrypt.hash(password, salt, (errBc, hash) => {
            if (errBc)
                reject(errBc);
            resolve(hash);
            });
        });
    });
};
const verifyPassword = (passwordAttempt, hashedPassword) => {
    return bcrypt.compare(passwordAttempt, hashedPassword);
};

exports.insertCustomer = async (req, res) => {
    try {
        if(!req.body) {
            return res.status(400).json(
                {message: "Content can not be empty!"}
            )
        }
        const newUser = req.body
        newUser[8] = await hashPassword(newUser[8])
        User.insertCustomer(newUser, (err) => {
            if(err) return res.json({status: err.message})
            else {
                console.log("Đã thêm khách hàng mới")
                return res.json({status:"OK"})
            }
        })
        User.insertLoyaltyCard(newUser[0], (err) => {
            if(err) console.log(err.message)
            else {
                console.log("Đã thêm thẻ thành viên mới")
            } 
        })
        return
    } catch(err) {
        console.log(err)
    }
}
exports.updateCustomer = async (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json(
                {message: "Content can not be empty!"}
            )
            return
        }
        const userInfo = req.body
        if (userInfo[8].length != 60) userInfo[8] = await hashPassword(userInfo[8])
        User.updateCustomer(userInfo, (err) => {
            if (err) console.log(err.message)
            else console.log("Cập nhật thành công")
        })
    } catch (err) {
        console.log(err)
    }
}
exports.findUserName = async (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json(
                {message: "Content can not be empty!"}
            )
            return
        }
        const userName = req.body[0]
        User.findUserName(userName, (err, data) => {
            if (err) console.log(err.message)
            else {
                if (data.length) res.json({"status": "OK"})
                else res.json({"status": "Username Available"})
            }
        })
    } catch (err) {
        console.log(err)
    }
}
exports.findPhoneNo = async (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json(
                {message: "Content can not be empty!"}
            )
            return
        }
        const phoneNo = req.body[0]
        User.findPhoneNo(phoneNo, (err, data) => {
            if (err) console.log(err.message)
            else {
                if (data.length) res.json({"status": "OK"})
                else res.json({"status": "PhoneNo Available"})
            }
        })
    } catch (err) {
        console.log(err)
    }
}
exports.findEmail = async (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json(
                {message: "Content can not be empty!"}
            )
            return
        }
        const email = req.body[0]
        User.findEmail(email, (err, data) => {
            if (err) console.log(err.message)
            else {
                if (data.length) res.json({"status": "OK"})
                else res.json({"status": "Email Available"})
            }
        })
    } catch (err) {
        console.log(err)
    }
}
exports.findSsn = async (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json(
                {message: "Content can not be empty!"}
            )
            return
        }
        const ssn = req.body[0]
        User.findSsn(ssn, (err, data) => {
            if (err) console.log(err.message)
            else {
                if (data.length) res.json({"status": "OK"})
                else res.json({"status": "Ssn Available"})
            }
        })
    } catch (err) {
        console.log(err)
    }
}
exports.loginCustomer = async (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json(
                {message: "Content can not be empty!"}
            )
            return
        }
        const {UserName, Passw} = req.body
        User.findAcc(UserName, (err, data) => {
            if (err) console.log(err.message)
            else {
                if (data.length){
                    const checkPass = verifyPassword(Passw, data[0].PASSW)
                    if(checkPass) res.json({...data[0], "status": "OK"})
                    else res.json({"status": "Wrong Pass"})
                } else res.json({"status": "Wrong Pass"}) //User No Available
            }
        })
    } catch (err) {
        console.log(err)
    }
}
exports.selectCustomerInfo = (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json(
                {message: "Content can not be empty!"}
            )
            return
        }
        const {id} = req.params
        User.selectCustomerInfo(id, (err, data) => {
            if (err) console.log(err.message)
            else res.json(data);
        })
    } catch (err) {
        console.log(err)
    }
}
exports.getPointPacket = (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json(
                {message: "Content can not be empty!"}
            )
            return
        }
        const {id} = req.params
        const cid = "Cus_"+id
        User.getPointPacket(cid, (err, data) => {
            if (err) console.log(err.message)
            else res.json(data[0]);
        })
    } catch (err) {
        console.log(err)
    }
}
exports.getSupport = (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json(
                {message: "Content can not be empty!"}
            )
            return
        }
        User.getSupport((err, data) => {
            if (err) console.log(err.message)
            else res.json(data);
        })
    } catch (err) {
        console.log(err)
    }
}
exports.passCrypt = () => {
    hashPassword()
    verifyPassword()
}