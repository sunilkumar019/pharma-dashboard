const model = require("../../../models/webCustomize/contact");
const mongoose = require("mongoose");
module.exports = async (contact) => {
  contact._id=new mongoose.Types.ObjectId();
  return (await new model(contact).save()).toObject();  
};