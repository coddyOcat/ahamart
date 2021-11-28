const User = require('../model/user')

exports.insertCustomer = async (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json(
                {message: "Content can not be empty!"}
            )
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
        res.json("OK")
        return
        // await LoyaltyCard.insertCard()
    } catch(err) {
        console.log(err)
    }
}
// exports.select = (req, res) => {
//     if(!req.body) {
//         res.status(400).send(
//             {message: "Content can not be empty!"}
//         )
//     }
//     User.select((err, data) => {
//         if (err)
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving tutorials."
//             });
//         else res.send(data);
//     })
// }