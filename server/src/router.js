module.exports = app => {
    const User = require('./controller/user')
    const Branch = require('./controller/branch')
  
    var router = require("express").Router();

    router.post('/user/register', User.insertCustomer)
    router.post('/user/update', User.updateCustomer)
    router.post('/user/find/userName', User.findUserName)
    router.post('/user/find/phoneNo', User.findPhoneNo)
    router.post('/user/find/email', User.findEmail)
    router.post('/user/find/ssn', User.findSsn)
    router.post('/user/login', User.loginCustomer)
    router.get('/user/getSupport', User.getSupport)
    router.get('/user/pointPacket/:id', User.getPointPacket)
    router.get('/user/:id', User.selectCustomerInfo)

    router.get('/branch', Branch.getListBranch)
  
    app.use('/api', router);
};