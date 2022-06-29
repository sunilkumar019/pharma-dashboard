const model = require("../../../models/webCustomize/home");
const mongoose = require("mongoose");
module.exports = async (home) => {
  home._id= new mongoose.Types.ObjectId();
  return (await new model(home).save()).toObject();  
};
