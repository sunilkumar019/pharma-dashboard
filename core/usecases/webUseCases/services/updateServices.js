//import model
const model = require("../../../models/webCustomize/services");
const getServices =require("./getServices");


//update 
module.exports = async (custId,data) => {
    let updateResponse = await model.updateOne({_id: custId }, { $set: data }).exec()

    if (updateResponse.ok == 1) {
        return await getServices({_id:custId});
    }
    else {
        return { Error: "Something went wrong!!!" }
    }
}
