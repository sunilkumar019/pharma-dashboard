const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required:  [true, "Name is Required"] },
    email: { type: String, default: '' },
    label:{ type: String, required:[true, " label is Required"] },
    delete: { type: Boolean, default: false },
    read: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Notification',notificationSchema);