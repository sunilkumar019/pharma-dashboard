const model = require("../../models/notification");

//get notification
module.exports = async (id) => {
  let filter = { read: false,delete: false};
  if( id ) {
    filter = { _id: id, read: false,delete: false }
  }
  
  return await model.find( filter, 
    { name: 1, label: 1, email: 1}).exec()
}