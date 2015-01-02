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

router.get('/service', function (req, res) {
    res.render('examples/service', {title: 'AngularJS Service, Factory and Provider'});
});

router.get('/eworld', function (req, res) {
    res.render('examples/electronic-world', {title: 'Project - Electronic World'});
});

module.exports = router;

