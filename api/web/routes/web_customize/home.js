const router = require('express').Router();
const homeHandler = require('../../handlers/web_customize/home');


router.post('/add', homeHandler.addHome);
router.get('/get', homeHandler.getHome);
router.post('/update', homeHandler.updateHome);
router.get('/delete/:Id', homeHandler.deleteHome);

module.exports = router;