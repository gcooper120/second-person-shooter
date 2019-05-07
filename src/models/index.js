const Sequelize = require('sequelize');
require('dotenv').config();

if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
  // the application is executed on Heroku ... use the postgres         database
  sequelize =new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL,
  {
    dialect: "postgres",
    protocol: "postgres",
    port: 5432,
    host: "<heroku host>",
    logging: true //false
  });
} else {
  // the application is executed on the local machine ... use mysql
  sequelize =new Sequelize(process.env.DATABASE_URI,
  {
    dialect: "postgres"
  }
  );
}
const models = {
  User: sequelize.import('./user'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = sequelize;

module.exports.default = models;
