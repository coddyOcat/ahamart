const Branch = require('../model/branch')

exports.getListBranch = async (req, res) => {
    try {
        if(!req.body) {
            res.status(400).json(
                {message: "Content can not be empty!"}
            )
            return
        }
        Branch.getListBranch((err, data) => {
            if (err) console.log(err.message)
            else res.json(data);
        })
    } catch (err) {
        console.log(err)
    }
}