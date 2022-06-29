const model = require("../../../models/webCustomize/about");
const mongoose = require("mongoose");
module.exports = async (about) => {
  about._id=new mongoose.Types.ObjectId();
  return (await new model(about).save()).toObject();  
};