const  model = require("../../../models/webCustomize/home");

//delete  
module.exports = async (cusId) => {
    let updateResponse = await model.deleteOne({ _id: cusId }).exec() 
    if(updateResponse.ok == 1){
    return {Message:"Item deleted!!!"}
   }
   else{
       return {Error: "Something went wrong!!!"}
   }
};