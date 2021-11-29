module.exports = app => {
    const User = require('./controller/user')
  
    var router = require("express").Router();

    router.post('/user/register', User.insertCustomer)
    router.post('/user/find/userName', User.findUserName)
    router.post('/user/find/phoneNo', User.findPhoneNo)
    router.post('/user/find/email', User.findEmail)
    router.post('/user/find/ssn', User.findSsn)

    router.post('/user/login', User.loginCustomer)
    router.get('/user/:id', User.selectCustomerInfo)
  
    app.use('/api', router);
};