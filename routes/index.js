const player = require('./player');
const user = require('./user');

module.exports = app => {
  app.use('/player',player);
  app.use('/user',user);
};