const Service = require("./service")
const db = require("../models/");
const { sequelize } = require("../models");

class AdminService extends Service {}

module.exports = AdminService