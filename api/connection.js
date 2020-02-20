var connectionString = {
  host: 'host', // server name or IP address;
  port: port,
  database: 'database',
  user: 'user',
  password: 'password'
};

  function returnConnection() {
      return connectionString;
  }

  module.exports = {
    returnConnection: returnConnection
  }
