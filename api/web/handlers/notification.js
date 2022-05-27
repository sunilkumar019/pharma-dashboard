const sendNotificationModule = require("../../../firebase_notification")
// ** Notification Controller
const notificationController = require("../../../core/controllers/notification")

const notification = async (req, res, next) => {

    try {
        if (!req.body.title) {
            throw new Error("Notification title is Required")
        }
        if (!req.body.message) {
            throw new Error("Notification message is Required")
        }
        if (!req.body.send_to) {
            throw new Error("Notification Receipents i.e(Distributor,MR,Both) is Required")
        }
        let notificationResponse = await sendNotificationModule({ title: req.body.title, message: req.body.message }, req.body.send_to)
        if (notificationResponse.Message)
            req.data = notificationResponse.Message;
        else
            throw new Error(notificationResponse.Error)

        next()
    } catch (e) {
        req.status = 400;
        next(e)
    }
}

const getnotification = async (req, res, next) => {
    try {
        let notification = await notificationController.getNotification(req.body)
        req.data = notification
        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}

const updatenotification = async (req, res, next) => {
    try {
        let notification = await notificationController.updateNotification(req.body)
        req.data = notification
        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}

module.exports = { getnotification, updatenotification, notification }