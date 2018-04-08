var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};
var con = require('./connection')
var pgp = require('pg-promise')(options);

var connectionString = con.returnConnection();
console.log(connectionString);

var db = pgp(connectionString);


/////////////////////
// Query Functions
/////////////////////


function getAllUsers(req, res, next) {
  db.any('SELECT id, name	FROM dm."user"')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data
        });
    })
    .catch(function (err) {
      return next(err, 'erro');
    });
}

function getUser(req, res, next) {
  var id = parseInt(req.params.id);
  db.one('SELECT id, name	FROM dm."user" WHERE id = $1', id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved one starship'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createUser(req, res, next) {
  var name = req.body.name;
  db.none('INSERT INTO dm."user"(name) values($1)', name).then(function () {
      res.status(200).json({
          status: 'success',
          message: 'Inserted'
        });
    }).catch(function (err) {
      return next(err);
    });
}

function updateUser(req, res, next) {
  var id = parseInt(req.params.id);
  var name = req.body.name;
  db.none('UPDATE dm."user" SET name=$2 WHERE id = $1', [id, name])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeUser(req, res, next) {
  var id = parseInt(req.params.id);
  db.result('DELETE FROM dm."user" WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: 'Removed'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


/////////////
// Exports
/////////////

module.exports = {
  createUser: createUser,
  updateUser: updateUser,
  removeUser: removeUser,
  getAllUsers: getAllUsers,
  getUser: getUser
};