const router = require('express').Router();
const headerCheck = require('../../src/filter/filter')

router.get('/login', (req, res, next) => {
    headerCheck.authenticate(req, res, next);
    res.send('This is login page');
})
router.get('/logout', (req, res, next) => {
    headerCheck.authenticate(req, res, next);
    res.send('This is logout page');
});
router.get('/register', (req, res, next) => {
    headerCheck.authenticate(req, res, next);
    res.send('This is register page');
});

module.exports = router;