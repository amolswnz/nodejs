var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller');

router.get('/', function(req, res, next) {
    return standupCtrl.list(req, res);
});

router.post('/', function(req, res, next) {
    return standupCtrl.filterByMember(req, res);
});

router.get('/newnote', function(req, res, next) {
    return standupCtrl.getNote(req, res);
});

router.post('/newnote', function(req, res, next) {
    return standupCtrl.create(req, res);
});

module.exports = router;
