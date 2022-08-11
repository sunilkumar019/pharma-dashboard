const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    bannerText: { type: String, required: [true, "Banner Text is required"] },
    bannerImage: { type:String, default: null },
    created_on: { type: Date, default: Date.now },
    modified_on: { type: Date, default: Date.now },

});
module.exports = mongoose.model('customize_contact',contactSchema);
