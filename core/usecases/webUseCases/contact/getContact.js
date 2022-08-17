const model = require("../../../models/webCustomize/contact");
const mongoose = require("mongoose");
module.exports = async (filter) => {

    return await model.find(filter).exec()
};
