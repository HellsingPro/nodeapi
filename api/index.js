var express = require('express');
var router = express.Router();


// http://localhost:3000/
router.get('/', function(req, res, next) {
    res.status(200)
      .json({
        status: 'success',
        message: 'Live long and prosper!'
      });
});


//////////////////////
// Postgres queries
//////////////////////

var db = require('./queries');

router.get('/api/users', db.getAllUsers);
router.get('/api/user/:id', db.getUser);
router.post('/api/createUser', db.createUser);
router.put('/api/updateUser/:id', db.updateUser);
router.delete('/api/removeUser/:id', db.removeUser);

module.exports = router;
