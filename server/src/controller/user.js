const User = require('../model/user')

exports.insertCustomer = async (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json(
                {message: "Content can not be empty!"}
            )
            return
        }
        //get data from client
        var {Ssn, HouseNo, StName, WardName, DistName, CityName, CountryName, UserName, Passw, Email, PhoneNo, Gender, Nationality, DOB, SName, GName} = req.body
        
        //process data
        if (Gender == "") {
            res.json("Chưa nhập đủ thông tin")
            return
        }
        else if (Gender == "Nam") Gender = "M"
        else if (Gender == "Nữ") Gender = "F"
        else Gender = "O"
        const newUser = [Ssn, HouseNo, StName, WardName, DistName, CityName, CountryName, UserName, Passw, Email, PhoneNo, Gender, Nationality, DOB, SName, GName]
        //check data
            //not null
        newUser.map(x => {
            if (x=="") {
                res.json("Chưa nhập đủ thông tin")
                return
            }
        })
        User.insertCustomer(newUser, (err) => {
            if(err) console.log("Lỗi thực hiện truy vấn ", err.message)
            else console.log("Đã thêm khách hàng mới")
        })
        User.insertLoyaltyCard(newUser[0], (err) => {
            if(err) console.log("Lỗi thực hiện truy vấn ", err.message)
            else console.log("Đã thêm thẻ thành viên mới")
        })
        res.json("OK")
        return
        // await LoyaltyCard.insertCard()
    } catch(err) {
        console.log(err)
    }
}
exports.loginCustomer = (req, res) => {
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
                    if(Passw == data[0].PASSW) res.json({...data[0], "status": "OK"})
                    else res.json({"status": "Wrong Pass"})
                } else res.json({"status": "No Username Available"})
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