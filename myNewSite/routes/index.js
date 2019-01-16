var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/studentName', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    studentName: [
    'Cody',
    'Ron',
    'Kaite',
    'Noelle',
    'Rob',
    'Connor',
    'Khanh',
    'Jim',
    'Chris',
    'Gbenga',
    'Jason',
    'Zac',
    'Greg',
    'Matt',
    'JR',
    'Sean',
    'Micheal',
    'Brandon',
    'Brian'
    ] 
  });
});

module.exports = router;
