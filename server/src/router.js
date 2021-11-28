module.exports = app => {
    const User = require('./controller/user')
  
    var router = require("express").Router();

    router.post('/user/register', User.insertCustomer)
    router.post('/user/login', User.loginCustomer)
    router.get('/user/:id', User.selectCustomerInfo)
  
    app.use('/api', router);
};