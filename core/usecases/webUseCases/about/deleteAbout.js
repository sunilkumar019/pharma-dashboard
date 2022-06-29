const model = require("../../../models/webCustomize/about");

//delete  
module.exports = async (cusId) => {
    let deleteResponse = await model.deleteOne({ _id: cusId }).exec()
    if (deleteResponse.ok == 1) {
        return { Message: "Item deleted!!!" }
    }
    else {
        return { Error: "Something went wrong!!!" }
    }
};
