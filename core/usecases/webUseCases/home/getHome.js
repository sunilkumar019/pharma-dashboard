const model = require("../../../models/webCustomize/home");
const mongoose = require("mongoose");
module.exports = async (filter) => {
    
    return await model.find(filter).exec()
};
