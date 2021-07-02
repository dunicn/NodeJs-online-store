const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node-online-store', 'root', 'nemanja123', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
