const sequelize = require("../config/config");
const { User, Post } = require("../models");

const userData = [
  {
    username: "andrew123",

    password: "password123",
  },

  {
    username: "sean123",

    password: "password123",
  },

  {
    username: "sarah123",

    password: "password123",
  },

  {
    username: "jimmy123",

    password: "password123",
  },

  {
    username: "alex123",

    password: "password123",
  },

  {
    username: "cam123",

    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
