var connectionString = {
    host: '', // server name or IP address;
    port: 5432,
    database: '', // Database name
    user: '', // Database user
    password: '' // Database password
  };

  function returnConnection() {
      return connectionString;
  }

  module.exports = {
    returnConnection: returnConnection
  }