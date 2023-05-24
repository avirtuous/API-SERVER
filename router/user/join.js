const router = require('express').Router();
const headerCheck = require('../../src/filter/filter')

router.get('/joinUser', (req, res, next) => {
    headerCheck.authenticate(req, res, next);
    res.send('This is Join Page');
})

module.exports = router;