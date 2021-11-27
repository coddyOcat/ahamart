module.exports = app => {
    const User = require('./controller/user')
  
    var router = require("express").Router();
  
    router.get('/test', User.select)
  
    app.use('/api', router);
};