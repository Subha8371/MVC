
// Connecting to a database
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('office', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

// Testing the connection
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
