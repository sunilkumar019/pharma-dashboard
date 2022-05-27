//import model
const model = require("../../models/notification");
const getNotification = require("./get");
//update a notification
module.exports = async (notiId) => {
    let updateResponse = await model.updateOne({ _id: notiId}, { $set: {
        read: true, delete: true} }).exec() 

   if(updateResponse.ok == 1){
    return await getNotification();
   }
   else{
       return {Error: "Something went wrong!!!"}
   }
}