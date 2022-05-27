
// ** Notification Model
const model = require("../../models/notification");
const mongoose = require("mongoose");

module.exports =async (item) => {
    item._id= new mongoose.Types.ObjectId();
    return (await new model(item).save()).toObject();  
}