const router = require('express').Router()
const {getnotification, notification, updatenotification} = require('../handlers/notification.js')

const check_auth = require("../../../core/middleware/check-auth-admin");

router.post('/', check_auth, notification)

router.get('/get', check_auth,  getnotification)

router.post('/update', check_auth, updatenotification)

module.exports = router