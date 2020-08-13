const env = {
    database: 'learning',
    username: 'root',
    password: 'hmt123456',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1
    }
  };
   
  module.exports = env;
  