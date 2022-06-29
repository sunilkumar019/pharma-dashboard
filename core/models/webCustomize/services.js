const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    heading: { type: String, required: [true, "Heading is Required"] },
    text: { type: String, required: [true, "Text is Required"] },
    created_on: { type: Date, default: Date.now },
    modified_on: { type: Date, default: Date.now }
});
module.exports = mongoose.model('customize_service', serviceSchema);
