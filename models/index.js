"use strict";
const { Sequelize } = require("sequelize");

const config = {
  database: "agenda_db",
  user: "rony",
  password: "",
};

const sequelize = new Sequelize(config.database, config.user, config.password, {
  dialect: "mysql",
  host: "localhost",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;
