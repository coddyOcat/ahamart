module.exports = {
    port: process.env.PORT || 8080,
    db: {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "2111",
        DB: "dang ky thanh vien chuoi sieu thi"
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'development_secret',
    },
};
  