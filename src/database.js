const Sequelize = require('sequelize');
const sequelize = new Sequelize('exp_blog', 'root', '', {dialect: 'mysql'});

class Articles extends Sequelize.Model {}

var articles = Articles.init({
  title: Sequelize.STRING,
  body: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
}, { sequelize, modelName: 'articles' });


module.exports = { Article: articles };