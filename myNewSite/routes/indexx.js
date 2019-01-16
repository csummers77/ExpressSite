var express = require('express');
var router = express.Router();

router.get('/reverseName', function(req, res, next) {
    res.render('indexx', {
        title: 'Express',
        reverseName: [
          'Kaite',
          'Noelle',
          'Connor',
          'Cody',
          'Rob',
          'Jim',
          'Khanh',
          'Chris',
          'Gbenga',
          'Zac',
          'Jason',
          'Zac',
          'Greg',
          'JR',
          'Matt',
          'Micheal',
          'Brandon',
          'Sean',
          'Brian'  
        ]
    });
});

module.exports = router;