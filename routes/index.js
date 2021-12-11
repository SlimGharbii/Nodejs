var express = require('express');
var router = express.Router();
var d = new Date();
var n = d.getDay();
var h = d.getHours();
var m = d.getMinutes();
console.log(d,n)
if (n >=1 && n <=5 && d>=9 && d<= 17 ) {
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/contactus', function(req, res, next) {
  res.render('contactus');
});
router.get('/services', function(req, res, next) {
  res.render('services');
});
}
else {
  router.get('/', function(req, res, next) {
    res.render('error');
  });}

module.exports = router;
