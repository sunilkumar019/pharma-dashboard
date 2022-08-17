const router = require('express').Router();
const serviceHandler = require('../../handlers/web_customize/services');
let multer = require('multer');
 
router.post('/add',serviceHandler.addServices);

router.get('/get', serviceHandler.getServices);

router.put('/update', serviceHandler.updateServices);

router.delete('/delete/:Id', serviceHandler.deleteServices);

module.exports = router;