var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/and', (req, res, next) => {
    res.render('and', {
        name: 'And', message: "And, accusamus adipisci corporis, cumque cupiditate distinctio dolorum" +
            " excepturi inventore"
    });
});

router.get('/cem', (req, res, next) => {
    res.render('cem', {
        name: 'Cem',
        message: "Cem, a ab consequuntur dolores ducimus minima nihil nisi repellendus similique voluptatum!"
    });
});

router.get('/selin', (req, res, next) => {
    res.render('selin', {
        name: 'Selin',
        message: "Selin, lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ex."
    });
});

module.exports = router;
