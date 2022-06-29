//import model
const model = require("../../../models/webCustomize/home");
const getHome = require("./getHome");


//update a home
module.exports = async (custId, data) => {
    let updateResponse = await model.updateOne({_id: custId }, { $set: data }).exec()

    if (updateResponse.ok == 1) {
        return await getHome({_id:custId});
    }
    else {
        return { Error: "Something went wrong!!!" }
    }
}
