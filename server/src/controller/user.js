const User = require('../model/user')

exports.select = (req, res) => {
    if(!req.body) {
        req.status(400).send(
            {message: "Content can not be empty!"}
        )
    }
    User.select((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    })
}