const bcrypt = require('bcryptjs')
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
const mainz = async () => {
    const dataPass = "123456abc"
    const inputPass1 = "123456abc"
    const inputPass2 = "12345"
    console.log(await hashPassword(dataPass))
    console.log(await verifyPassword(inputPass1, await hashPassword(dataPass)))
    console.log(await verifyPassword(inputPass2, await hashPassword(dataPass)))
}
mainz()