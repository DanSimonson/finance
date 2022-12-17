var bcrypt = require('bcryptjs');

const users = [
  {
    name: "Dan",
    email: "dansimonson@mariposaweb.net",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "test user",
    email: "testuser@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];
module.exports = {
    users,
}
