const bycrypt = require("bcryptjs");
const salt = bycrypt.genSaltSync(10);
const hashPassword = (password) => bycrypt.hashSync(password, salt);

const comparePasswords = (inputPassword, hashedPassword) => bycrypt.compareSync(inputPassword,hashedPassword)
module.exports = { hashPassword, comparePasswords };