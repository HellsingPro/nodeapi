var connectionString = {
  host: 'ec2-54-204-21-226.compute-1.amazonaws.com', // server name or IP address;
  port: 5432,
  database: 'd5psijb3oto6ql',
  user: 'anzkuobymqywis',
  password: '9b1907260f99912b4d03ae6d3d3d0ff940c9cf3da8225175ebcf792867e63f5d'
};

  function returnConnection() {
      return connectionString;
  }

  module.exports = {
    returnConnection: returnConnection
  }
