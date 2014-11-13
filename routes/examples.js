/**
 * Created by jiachiliu on 9/21/14.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('examples', { title: 'AngularJs Examples' });
});

router.get('/todoList', function (req, res) {
    res.render('examples/todolist', {title: 'AngularJS ToDo List'});
});

router.get('/templateAndBind', function (req, res) {
    res.render('examples/templateAndBind', {title: 'AngularJS Template and Data Binding'});
});

module.exports = router;

