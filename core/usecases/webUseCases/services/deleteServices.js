const model = require("../../../models/webCustomize/services");

//delete  
module.exports = async (cusId) => {
    let  Response = await model.deleteOne({ _id: cusId }).exec()
    if (Response.ok == 1) {
        return { Message: "Item deleted!!!" }
    }
    else {
        return { Error: "Something went wrong!!!" }
    }
};
