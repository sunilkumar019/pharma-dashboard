const model = require("../../../models/webCustomize/services");
const mongoose = require("mongoose");
module.exports = async (service) => {
    service._id=new mongoose.Types.ObjectId();
  return (await new model(service).save()).toObject();  
};