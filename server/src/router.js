module.exports = app => {
    const User = require('./controller/user')
  
    var router = require("express").Router();

    router.post('/user/register', User.insertCustomer)
  
    app.use('/api', router);
};